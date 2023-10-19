import { Button, Dialog, TextField, DialogTitle, DialogContent, DialogContentText } from "@mui/material";
// import { useState, useEffect } from "react"
import { useState, useEffect } from "react"
// import axios from "axios"
import MenuItem from '@mui/material/MenuItem';
import { Controller, useController, useForm } from 'react-hook-form';
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { BooksGenre, BooksShrift } from "../data/data";
import { toast } from "react-toastify"

const schema = yup.object().shape(
    {
        files: yup.mixed().test("required", "please select a file", value => {
            return value && value.length
        })
    }
)
const AddPost = () => {
    // const apiUrl = "https://samtuitlib.pythonanywhere.com/addebook/"
    // const authToken = "814d9619d44654dc5b7d7219c752cafd39590043"
    const [fileID, setFileID] = useState(null)
    const style = {
        titleInpt: "py-2 px-3 border-2 border-blue-600 rounded-md",
        inputBox: "flex flex-col md:flex-row justify-between items-center mt-4 gap-2"
    }

    const [result, setResult] = useState("");

    // eslint-disable-next-line no-unused-vars
    const { formState, getValues, register, reset, handleSubmit, formState: { errors }, setValue } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data);
        const headers = {
            "Authorization": "Token 814d9619d44654dc5b7d7219c752cafd39590043"
        };

        const fetchData = {
            title: data.title,
            authors: data.authors,
            publisher: data.publisher,
            description: data.description,
            genres: data.genres,
            language: data.language,
            pages: data.pages,
            font_shrift: data.font_shrift,
        };

        fetch('https://samtuitlib.pythonanywhere.com/addebook/', {
            method: 'POST',
            headers: headers,
            body: new URLSearchParams(fetchData),
            "content-type": 'application/json'
        })
            .then(response => response.json())
            .then(res => {
                console.log("So'rov natijasi:", res);
                localStorage.setItem("fileID", res.id)
                // toast.success("Kitob muvaffaqiyatli qo'shildi!")

                setOpen(true);
            })
        // reset();
    };
    const [files, setFiles] = useState("");

    const convert2base64 = file => {
        const reader = new FileReader();

        reader.onloadend = () => {
            setFiles(reader.result.toString())
        }
        reader.readAsDataURL(file);
    }

    const OnFileSubmit = data => {
        if (data.files.lenght > 0) {
            convert2base64(data.files[0]);
        }
        const formData = {
            file: data.files[0]
        }
        fetch(`https://samtuitlib.pythonanywhere.com/add_efile/12`, {
            method: 'PUT',
            body: formData,
            headers: {
                "Authorization": "Token 814d9619d44654dc5b7d7219c752cafd39590043"
            }
        })
            .then(response => response.json())
            .then(response => {

                if (response.status == true) {
                    alert('Yuklandi')
                    // location.reload();
                } else {
                    console.log("hello");
                }

            })
            .catch(error => {
                console.error('Fayl yuklanmadi' + error.message)
            });
    }
    const [open, setOpen] = useState(false);


    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div >

            <form

                onSubmit={handleSubmit(onSubmit)}
            > {/* Elektron kitoblarni qo'shish uchun forma */}
                <h2 >{"Elektron kitob qo'shish."}</h2>
                <div >
                    <TextField
                        required
                        id="outlined-required"
                        label="Kitob nomi"
                        defaultValue=""
                        {...register("title")}
                        sx={{
                            width: "50%",
                        }}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Kitob muallifi"
                        defaultValue=""
                        {...register("authors")}
                        sx={{
                            width: "50%",
                        }}
                    />
                </div>
                <div >
                    <TextField
                        id="outlined-required"
                        label="Nashriyot"
                        defaultValue=""
                        {...register("publisher")}
                        sx={{
                            width: "50%",
                        }}
                    />
                    {/* <TextField

                        id="outlined-required"
                        label="Janiri"
                        defaultValue=""
                        sx={{
                            width: "50%",
                        }}
                    /> */}
                </div>
                <div >
                    <TextField
                        id="outlined-multiline-static"
                        label="Kitob haqida ma'lumot"
                        multiline
                        rows={4}
                        defaultValue=""
                        placeholder="Bu kitobda o'zbekiston tarixi haqida ma'lumotlar bor..."
                        {...register("description")}
                        sx={{
                            width: "100%",
                        }}
                    />
                </div>
                <div >

                    <TextField
                        select
                        defaultValue=""
                        label="Janir*"
                        sx={{
                            width: "30%"
                        }}
                        {...register("genres")}
                    >
                        <MenuItem selected disabled hidden>
                            Janirni tanlang
                        </MenuItem>
                        {BooksGenre.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        id="outlined-required"
                        label="Til"
                        placeholder="Kitob qaysi tilda yozilgan?"
                        defaultValue=""
                        {...register("language")}
                        sx={{
                            width: "45%",
                        }}
                    />
                    <TextField
                        id="outlined-required"
                        label="Sahifa soni"
                        {...register("pages")}
                        inputProps={{
                            step: 1,
                            min: 0,
                            max: 99999,
                            type: 'number',
                        }}
                        sx={{
                            width: "20%",
                        }}
                    />
                </div>
                <div>
                    <TextField
                        select
                        defaultValue=""
                        label="Janir*"
                        sx={{
                            width: "30%"
                        }}
                        {...register("font_shrift")}
                    >
                        <MenuItem selected disabled hidden>
                            Shriftni tanlang
                        </MenuItem>
                        {BooksShrift.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>

                <div>
                    <Button type="submit" variant="contained" sx={{ mt: 3 }}>
                        Yuborish
                    </Button>
                    {/* <pre>{JSON.stringify(getValues(), null, 4)}</pre> */}
                </div>
                <div>
                </div>
            </form>
            <Dialog open={open} onClose={handleClose}>
                <form onSubmit={handleSubmit(OnFileSubmit)}>
                    <DialogTitle>Tasdiqlndi</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            {localStorage.getItem("fileID")}
                            Ma'lumotlar tasdiqlandi endi fayl yuklang
                        </DialogContentText>
                    </DialogContent>
                    <input type="file" accept=".pdf,.doc,.docx"  {...register("files")} />

                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit">Yuborish</Button>

                </form>
            </Dialog>
        </div>
    )
}

export default AddPost;