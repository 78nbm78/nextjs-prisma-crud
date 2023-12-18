"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const AddNewUser = () => {
    const router = useRouter();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const getUsername = (e) => {
        setUsername(e.target.value)
    }

    const getPassword = (e) => {
        setPassword(e.target.value)
    }

    const formSubmitHandler = async (e) => {
        e.preventDefault()

        const myData = {
            username: username,
            password: password,
        }

        try {
            const response = await fetch("http://localhost:3000/api/users", {
                method: "POST",
                body: JSON.stringify(myData)
            })

            if (response.ok) {
                toast.success("User Added Successfully!")
                router.refresh();
            }

        } catch (error) {
            console.log(error)
            toast.error("Somthing went wrong!")
        }
    }

    return (
        <form
            className="max-w-3xl p-4 bg-stone-200 rounded-xl m-auto mt-6 flex flex-col gap-4"
            onSubmit={(e) => formSubmitHandler(e)}
        >
            <input
                type="text"
                name='username'
                placeholder='username'
                onChange={(e) => getUsername(e)}
                className="rounded-lg py-2 px-3 border-[1px] border-stone-400 outline-none"
            />
            <input
                type="text"
                name='password'
                placeholder='password'
                onChange={(e) => getPassword(e)}
                className="rounded-lg py-2 px-3 border-[1px] border-stone-400 outline-none"
            />
            <button
                type="submit"
                className="bg-orange-500 text-white font-bold rounded-lg py-2"
            >
                Add User
            </button>
        </form>
    );
}

export default AddNewUser;