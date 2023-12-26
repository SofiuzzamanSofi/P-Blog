"use client";

import { FC, useState } from 'react';
import toast from 'react-hot-toast';

interface SubscribeProps {

};

const Subscribe: FC<SubscribeProps> = ({ }) => {

    const [email, setEmail] = useState<string>("");

    const handleSubmit = () => {

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return toast.error("Email must be correct.")
        };
        toast.loading("Please wait...", { id: "user-creating" });
        setTimeout(() => {
            toast.success("Subscribe Success.", { id: "user-creating" });
            setEmail("")
        }, 3000)


    }
    return (
        <>
            <input type="text" placeholder="example@email.com" className="w-3/5 p-3 rounded-l-lg sm:w-2/3 text-black"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button type="button" className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 bg-violet-400 text-gray-900"
                onClick={handleSubmit}
            >Subscribe</button>
        </>
    );
};

export default Subscribe;