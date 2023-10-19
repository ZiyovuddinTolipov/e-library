import { Button, TextField } from "@mui/material";
// import { useState, useEffect } from "react"

// import axios from "axios"
import { useForm } from 'react-hook-form';

import {  Telegram } from "@mui/icons-material";
import { Link } from "react-router-dom";

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
            user:localStorage.getItem("user_id"),
            book: localStorage.getItem("user_post_id"),
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
                <h2 className="text-blue-500 text-center font-[500]">{"Kitob Olish"}</h2>
                <div className="px-[10px]">
                    <TextField
                        required
                        id="outlined-required"
                        label="Kursi"
                        defaultValue=""
                        {...register("kurs")}
                        sx={{
                            width: "50%",
                            marginTop: "20px",
                        }}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="guvohnoma id"
                        defaultValue=""
                        {...register("student_id")}
                        sx={{
                            width: "50%",
                            marginTop: "20px",
                        }}
                    />
                    
                </div>
                <div className="px-[10px]">
                    <TextField
                    required
                        id="outlined-required"
                        label=" telegram username"
                        defaultValue=""
                        {...register("username")}
                        sx={{
                            width: "50%",
                            marginTop: "20px",
                        }}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="qancha vaqtga olishi(h)"
                        defaultValue=""
                        {...register("soat")}
                        sx={{
                            width: "50%",
                            marginTop: "20px",
                        }}
                    />
                </div>
                
                <div>
                    <Button type="submit" variant="contained" sx={{ mt: 3, marginLeft: '10px' }}>
                        Yuborish
                    </Button>
                    <Link to="https://t.me/none_qwerty_bot">
                    <Button variant="contained" sx={{ mt: 3, marginLeft: '10px' }}>
                        <Telegram />  &nbsp;
                        Botga Start bosish
                    </Button>
                    
                    </Link>
                    {/* <pre>{JSON.stringify(getValues(), null, 4)}</pre> */}
                </div>
                <div>
                </div>
            </form>
        </div>
    )
}

export default AddPost;