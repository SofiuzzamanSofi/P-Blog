"use client";

import React, { useEffect, useState } from "react";
import { BsArrowRightShort, BsArrowReturnRight } from "react-icons/bs";
import { FaDonate } from "react-icons/fa";
import Image from "next/image";
import { toast } from "react-hot-toast";
import { usePathname, useRouter } from "next/navigation"
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useAuth } from "@/provider/AuthProvider";
import { BlogDataTypes } from "@/typesInterface/types";
import { PhotoProvider, PhotoView } from "react-photo-view";
import moment from "moment";
import axios from "axios";


const page = () => {

    //
    const [blog, setBlog] = useState<BlogDataTypes | null>(null);
    const [reloadBlog, setReloadBlog] = useState<boolean>(false);
    const { user } = useAuth();
    const pathname = usePathname()
    const _id = pathname?.split("/")[3] as string;
    const { register, handleSubmit, reset } = useForm<{ question: string }>();

    useEffect(() => {
        try {
            const getData = async () => {
                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_SERVER}/blog/by-id`,
                    {
                        method: "PATCH",
                        headers: {
                            "content-type": "application/json",
                        },
                        body: JSON.stringify({ _id }),
                    }
                );
                const result = await res.json();
                // console.log('result:', result);
                if (result.success) {
                    setBlog(result?.data);
                }
            }
            getData();

        } catch (error) {

        }
    }, [reloadBlog]);

    const submitQuestion = async (data: { question: string }) => {
        if (!user?._id) {
            toast.error("Login First.");
            window.location.href = "/sign-in";
            return;
        };
        const questionData = {
            blogId: _id,
            userId: user?._id,
            userEmail: user?.email,
            ...data,
        };
        try {
            const res = await axios.patch(
                `${process.env.NEXT_PUBLIC_SERVER}/blog/query`,
                questionData
            )
            if (res.data.success) {
                setReloadBlog((prev) => !prev)
            }
        } catch (err) {
        }
        reset();
    };

    const submitAns = async (e: React.FormEvent<HTMLFormElement>, questionId: string) => {
        e.preventDefault();
        const ansData = {
            blogId: _id,
            questionId,
            userEmail: user?.email,
            riplay: e.currentTarget.ans.value,
        };
        try {
            const res = await axios.patch(
                `${process.env.NEXT_PUBLIC_SERVER}/blog/riplay`,
                ansData
            )
            if (res.data.success) {
                setReloadBlog((prev) => !prev)
            }
        } catch (err) {
        }
        (e.target as HTMLFormElement).reset();
    };


    // console.log("jobData", jobData);

    const replyAnsButtonClass = "shrink-0 h-10 w-10 bg-primary/10 border border-primary dark:border-darkPrimary hover:bg-primary dark:hover:bg-darkPrimary rounded-full grid place-items-center text-primary dark:text-darkPrimary hover:text-white hover:px-2 transition-all"

    return (
        <div className='py-5'>
            <div className='min-h-[120px] flex flex-wrap gap-4 overflow-hidden'>
                <PhotoProvider>
                    {
                        blog?.photoURLs && blog?.photoURLs?.length > 0 &&
                        blog?.photoURLs.map((photo, index) => (
                            <PhotoView src={photo} >
                                <Image
                                    key={index}
                                    src={photo}
                                    alt='blog-photo'
                                    className='object-cover cursor-pointer'
                                    title="click to full view"
                                    height={256}
                                    width={256}
                                />
                            </PhotoView>
                        ))
                    }
                </PhotoProvider>
            </div>

            {/* job info  */}
            <div className='space-y-5'>
                <div className='flex justify-between items-center mt-5'>
                    <h1 className='text-xl font-semibold text-primary dark:text-darkPrimary'>{blog?.title}</h1>
                </div>
                <div>
                    {/* <h1 className='text-primary dark:text-darkPrimary text-lg font-medium mb-3'>Details:</h1> */}
                    <p>{blog?.details}</p>
                </div>
                {
                    blog?.tags && blog?.tags?.length > 0 &&
                    <div>
                        <h1 className='text-primary dark:text-darkPrimary font-medium mb-3'>Tags:</h1>
                        <div className="flex flex-wrap gap-2">
                            {
                                blog.tags.map((tag, index) => (
                                    <button key={index} className='flex items-center bg-white text-black px-2'>
                                        <BsArrowRightShort /> <span>{tag}</span>
                                    </button>
                                ))
                            }
                        </div>
                    </div>
                }

                <div>
                    <h1 className='text-primary dark:text-darkPrimary text-lg font-medium mt-3'>Author Info:</h1>
                    <Link
                        href={`/profile/${blog?.bloggerId}`}
                        className="hover:underline"
                    >
                        {blog?.displayName}
                    </Link>

                    <p className="font-semibold">
                        {blog?.timestamp ? moment(blog?.timestamp).format('D MMMM, YYYY, h:mm:ss A z') : 'No timestamp available'}
                    </p>


                    {
                        user?._id !== blog?.bloggerId &&
                        <Link
                            href={`/profile/donate?receiver=${blog?.bloggerId}`}
                            className="flex items-center gap-2 border w-24 rounded-md mt-2"
                        >
                            <FaDonate
                                className="h-6 w-6"
                            />
                            <span>Donate</span>
                        </Link>
                    }
                </div>
            </div>
            <hr className='my-5' />

            {/* question ans  */}
            <div className="max-w-[43rem]">
                <h1 className='text-xl font-semibold text-primary dark:text-darkPrimary mb-5'>
                    General Q&A
                </h1>
                <div className='grid gap-3'>
                    {
                        blog?.questionAns && blog?.questionAns?.length > 0 &&
                        blog?.questionAns?.map((question, index) => (
                            <div key={index} className="hover:text-black dark:hover:text-white">
                                <small>{question?.userEmail}</small>
                                <p className='text-lg font-medium'>{question?.question?.questionString}</p>
                                {
                                    question?.ans &&
                                    question?.ans?.map((item, index) => (
                                        <p key={index} className='flex items-center gap-2 relative left-5'>
                                            <span className="text-primary dark:text-darkPrimary "><BsArrowReturnRight /></span>
                                            <span>{item?.ansString}</span>
                                        </p>
                                    ))
                                }
                                {
                                    user?._id === blog?.bloggerId &&
                                    <form
                                        onSubmit={(e) => submitAns(e, question?.questionId)}
                                    >
                                        <div className='flex gap-3 my-5'>
                                            <input
                                                placeholder='Reply'
                                                type='text'
                                                name="ans"
                                                className='p-2 w-full border border-gray-200 dark:border-gray-700 rounded-md bg-gray-100 dark:bg-gray-900 text-slate-700 dark:text-slate-400'
                                            />
                                            <button
                                                className={replyAnsButtonClass}
                                                type="submit"
                                            >
                                                <BsArrowRightShort size={30} />
                                            </button>
                                        </div>
                                    </form>
                                }
                            </div>
                        ))
                    }
                </div>

                {
                    user?._id !== blog?.bloggerId &&
                    <form
                        onSubmit={handleSubmit(submitQuestion)}
                    >
                        <div className='flex gap-3 my-5'>
                            <input
                                placeholder='Ask a question...'
                                type='text'
                                id='question'
                                className='p-2 w-full border border-gray-200 dark:border-gray-700 rounded-md bg-gray-100 dark:bg-gray-900 text-slate-700 dark:text-slate-400'
                                {...register("question")}
                                required
                            />
                            <button
                                className={replyAnsButtonClass}
                                type="submit"
                            >
                                <BsArrowRightShort size={30} />
                            </button>
                        </div>
                    </form>
                }
            </div>
        </div>
    );
};

export default page;