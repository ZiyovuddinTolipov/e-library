import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
// import { useState, useEffect } from "react"

// import axios from "axios"
import { useForm } from 'react-hook-form';

const AddPost = () => {

    // eslint-disable-next-line no-unused-vars
    const { formState, getValues, register, reset, handleSubmit, formState: { errors }, setValue } = useForm({

    });

    const onSubmit = (data) => {
        console.log(data);
        const headers = {
            "Authorization": `Token ${localStorage.getItem("token")}`
        };

        const fetchData = {
            user: localStorage.getItem("user_id"),
            message_id: localStorage.getItem("message_id"),
            kurs: data.kurs,
            student_id: data.student_id,
            description: `${data.username}\n${data.soat}`,
        };


        fetch('https://samtuitlib.pythonanywhere.com/sendmessage/', {
            method: 'POST',
            headers: headers,
            body: new URLSearchParams(fetchData),
        })
            .then(response => response.json())
            .then(res => {
                console.log("So'rov natijasi:", res);
                // localStorage.setItem("fileID", res.id)
                // toast.success("Kitob muvaffaqiyatli qo'shildi!")
            })
        // reset();
    };

    return (
        <div >
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="max-w-[1000px] mx-auto pt-4"
            > {/* Elektron kitoblarni qo'shish uchun forma */}
                <h2 className="text-blue-500 text-center font-[500]">{"Habar yuborish"}</h2>
                <div className="px-[10px]">
                    <TextField
                        required
                        id="outlined-required"
                        label="des"
                        defaultValue=""
                        {...register("kurs")}
                        sx={{
                            width: "50%",
                            marginTop: "20px",
                        }}
                    />
                </div>
                <div className="px-[10px] flex items-center justify-between">

                    <TextField
                        required
                        id="outlined-required"
                        label="qancha vaqtga olishi(h)"
                        {...register("soat")}
                        sx={{
                            width: "30%",
                            marginTop: "20px",
                        }}
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="parolni saqlab qolish"
                    />
                </div>

                <div>
                    <Button type="submit" variant="contained" sx={{ mt: 3, marginLeft: '10px' }}>
                        Yuborish
                    </Button>
                    {/* <pre>{JSON.stringify(getValues(), null, 4)}</pre> */}
                </div>
                <div>
                </div>
            </form>
        </div>
    )
}

export default AddPost;