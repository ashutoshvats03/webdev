import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";
import Home from "./homepage";
import { FaEye } from "react-icons/fa";

function LoginPage() {
    const {
        register,
        handleSubmit,
        setError,
        reset,
        formState: { errors, isSubmitting },
    } = useForm();

    const [correct, setCorrect] = useState(false);

    const onSubmit = async (data) => {
        let r = await fetch("http://localhost:3001/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        let res = await r.text();
        console.log(data, res);

        if (data.username === "Ashutoshvats1234@gmail.com" && data.password === "Ashutosh") {
            setCorrect(true);
            
        } else {
            // Handle incorrect login
            setError("username", { type: "manual", message: "Invalid username or password" });
        }
        reset()
    };


    if (correct) {
        return <Navigate to="/home" replace/>
    }

    return (
        <div className="min-w-screen min-h-[90.8vh] relative bg-zinc-900 text-purple-100 flex">
            <div className="container w-[50vw] h-[50vh] left-[25%] top-[15%] absolute ">
                <form className="ml-10 mt-14" onSubmit={handleSubmit(onSubmit)}>
                    <div className="font-bold">Username</div>
                    <input
                        className="block my-2 w-80 p-1 text-zinc-900"
                        type="email"
                        {...register("username", { minLength: 3, required: true })}
                        placeholder="write username"
                    />
                    {errors.username && <p>{errors.username.message}</p>}

                    <div className="font-bold">Password</div>
                    <div className="flex relative">
                        <input
                            className="block my-2 w-80 p-1 text-zinc-900"
                            type="password"
                            {...register("password", { minLength: 3, required: true })}
                            placeholder="write password"
                        />
                        <FaEye className="absolute ml-72 mt-3" />
                    </div>
                    {errors.password && <p>{errors.password.message}</p>}

                    {isSubmitting ? (
                        <div>Loading....</div>
                    ) : (
                        <input
                            className="bg-blue-950 text-white font-bold mx-16 lg:mx-64 px-3 py-1 my-6"
                            type="submit"
                            value="Login"
                        />
                    )}
                </form>
            </div>
            <img className="w-[10vw] h-[20vh] absolute left-[60%] top-[25%]" src="src/assets/img.png" alt="" />
        </div>
    );
}

export default LoginPage;
