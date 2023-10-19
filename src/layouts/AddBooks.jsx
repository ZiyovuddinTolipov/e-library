import { Button, Dialog, TextField } from "@mui/material";
// import { useState, useEffect } from "react"
import { useState, useEffect } from "react"
// import axios from "axios"
import MenuItem from '@mui/material/MenuItem';
import { useForm } from 'react-hook-form';
import { BooksGenre, BooksShrift } from "../data/data";
// import { toast } from "react-toastify"
import EbookFile from "../components/library/EbookFile";

const AddPost = () => {
    // const apiUrl = "https://samtuitlib.pythonanywhere.com/addebook/"
    // const authToken = "814d9619d44654dc5b7d7219c752cafd39590043"
    
    // const style = {
    //     titleInpt: "py-2 px-3 border-2 border-blue-600 rounded-md",
    //     inputBox: "flex flex-col md:flex-row justify-between items-center mt-4 gap-2"
    // }


    // eslint-disable-next-line no-unused-vars
    const { formState, getValues, register, reset, handleSubmit, formState: { errors }, setValue } = useForm({
        
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

        fetch('https://samtuitlib.pythonanywhere.com/addpbook/', {
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
    const [open, setOpen] = useState(false);


    const handleClose = () => {
        setOpen(false);
    };


    return (
        <div >

            <form

                onSubmit={handleSubmit(onSubmit)}
                className="max-w-[1000px] mx-auto pt-4"
            > {/* Elektron kitoblarni qo'shish uchun forma */}
                <h2 className="text-blue-500 text-center font-[500]">{"Qog'oz kitob qo'shish."}</h2>
                <div >
                    <TextField
                        required
                        id="outlined-required"
                        label="Kitob nomi"
                        defaultValue=""
                        {...register("title")}
                        sx={{
                            width: "50%",
                            marginTop:"20px",
                            paddingLeft: "10px",
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
                            marginTop:"20px",
                            paddingLeft: "10px",
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
                            marginTop:"20px",
                            paddingLeft: "10px",
                        }}
                    />
                    <TextField
                        select
                        defaultValue=""
                        label="Shrift*"
                        sx={{
                            width: "50%",
                            marginTop:"20px",
                            paddingLeft: "10px",
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
                            marginTop:"20px",
                            paddingLeft: "10px",
                        }}
                    />
                </div>
                <div className="mt-[20px] pl-[10px] flex flex-row justify-between">

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
                    <Button type="submit" variant="contained" sx={{ mt: 3,marginLeft:'10px' }}>
                        Yuborish
                    </Button>
                    {/* <pre>{JSON.stringify(getValues(), null, 4)}</pre> */}
                </div>
                <div>
                </div>
            </form>
            <Dialog open={open} onClose={handleClose} >
                <EbookFile />
                <Button onClick={handleClose}>Cancel</Button>
            </Dialog>
        </div>
    )
}

export default AddPost;