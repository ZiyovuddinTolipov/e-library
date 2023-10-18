import { Button, TextField } from "@mui/material";
// import { useState, useEffect } from "react"

import MenuItem from '@mui/material/MenuItem';
import { useForm } from 'react-hook-form';

import { BooksGenre } from "../data/data";
import { toast } from "react-toastify"


const AddPost = () => {

    const style = {
        titleInpt: "py-2 px-3 border-2 border-blue-600 rounded-md",
        inputBox: "flex flex-col md:flex-row justify-between items-center mt-4 gap-2"
    }

    // eslint-disable-next-line no-unused-vars
    const { formState, getValues, register, reset, handleSubmit, formState: { errors }, } = useForm({

    });

    const onSubmit = (data) => {
        alert(JSON.stringify(data, null, 4))
        toast.success("Yangi kitob qo'shildi !", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        reset();
    };

    return (
        <div className="w-100 h-auto max-w-[1000px] mx-auto pt-2 sm:pt-4 md:pt-10">
            <form
                className="mt-2 md:mt-10"
                onSubmit={handleSubmit(onSubmit)}
            > {/* Elektron kitoblarni qo'shish uchun forma */}
            <h2 className="text-blue-500 text-center font-[500]">{"Qog'oz kitob qo'shish."}</h2>
                <div className={style.inputBox}>
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
                    {/* <div className="w-50 relative">
                    <p className="absolute bottom-[-70%] text-red-600 text-sm pl-2">{errors.author?.message}</p>
                    </div> */}
                    <TextField
                        required
                        id="outlined-required"
                        label="Kitob muallifi"
                        defaultValue=""
                        {...register("author")}
                        sx={{
                            width: "50%",
                        }}
                    />
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center mt-7 gap-2">
                    <TextField
                        id="outlined-required"
                        label="Nashriyot"
                        defaultValue=""
                        {...register("publisher")}
                        sx={{
                            width: "50%",
                        }}
                    />
                    <TextField

                        id="outlined-required"
                        label="Janiri"
                        defaultValue=""
                        sx={{
                            width: "50%",
                        }}
                    />
                </div>
                <div className={style.inputBox}>
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
                <div className={style.inputBox}>

                    <TextField
                        select
                        defaultValue=""
                        label="Janir*"
                        sx={{
                            width: "30%"
                        }}
                        {...register("language")}
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
                    <Button type="submit" variant="contained" sx={{ mt: 3 }}>
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