"use client";

import React, { useState } from "react";
import { useFieldArray, useForm, SubmitHandler } from "react-hook-form";
import { FiTrash, FiPlusCircle } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { useAuth } from "@/provider/AuthProvider";
import { BlogDataTypes } from "@/typesInterface/types";
import { BsPlusSquareDotted } from "react-icons/bs";
import axios from "axios";
import Loading from "@/components/shared/Loading";
import Image from "next/image";


const Page = () => {

    const { user, loading } = useAuth();
    const [photoURLs, setPhotosURLs] = useState([]);
    const [loadingStates, setLoadingStates] = useState(Array(6).fill(false));
    const router = useRouter();

    //   const [postJob, { isLoading, isSuccess, isError }] = usePostJobMutation();
    const { handleSubmit, register, control } = useForm();
    const {
        fields: tagsFields,
        append: tagsAppend,
        remove: tagsRemove,
    } = useFieldArray({ control, name: "tags" });


    const onSubmit: SubmitHandler<BlogDataTypes> = async (data) => {

        if (!user?._id) {
            toast.error("Login First.");
            window.location.href = "/sign-in";
            return;
        };

        const blogData = {
            photoURLs: photoURLs,
            email: user?.email,
            displayName: user?.displayName,
            bloggerId: user?._id,
            title: data.title,
            details: data.details,
            tags: data.tags,
        };
        const response = await axios.post(
            `${process.env.NEXT_PUBLIC_SERVER}/blog/add-blog`,
            blogData,
        );
        if (response.data.success) {
            toast.success("Bloag Post success.");
            router.push(`/profile/blog/${response.data.data._id}`);
        }
    };

    // image upload on imageBB
    const imageUploadHandler = async (event: any, setImgArray: any, index: number) => {
        const imageData = new FormData();
        setLoadingStates((prevStates) => {
            const newStates = [...prevStates];
            newStates[index] = true;
            return newStates;
        });
        try {
            imageData.set("key", `${process.env.NEXT_PUBLIC_IMAGEBB_KEY}`);
            for (let i = 0; i < event.target.files.length; i++) {
                imageData.append("image", event.target.files[i]);
            }

            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_IMAGEBB_URL}`,
                imageData
            );
            const imageUrl = response?.data?.data?.display_url;
            setImgArray((prevArray: any) => [...prevArray, imageUrl]);
            setLoadingStates((prevStates) => {
                const newStates = [...prevStates];
                newStates[index] = false;
                return newStates;
            });
        } catch (error) {
            setLoadingStates((prevStates) => {
                const newStates = [...prevStates];
                newStates[index] = false;
                return newStates;
            });
            toast.error("Image is not supported. Try Different image.")
        }
    }


    const handleRemoveImage = (indexToRemove: any) => {
        setPhotosURLs((prevUrls) =>
            prevUrls.filter((_url, index) => index !== indexToRemove)
        );
    };

    const handlePhotoImageChange = (event: any, index: number) => {
        imageUploadHandler(event, setPhotosURLs, index);
    };

    const renderLoadingPlaceholder = (index: number) => (
        <div
            key={index}
            className="w-[180px] h-[180px] shadow-[0_0px_10px_rgba(0,0,0,0.15)] hover:shadow-[0_0px_20px_rgba(0,0,0,0.26)] rounded-xl flex justify-center items-center"
        >
            <>
                {" "}
                <div
                    id={`fileInput-${index}`}
                    className="h-full w-full flex justify-center items-center"
                >
                    <span className="loading loading-bars loading-lg">
                        Loading...
                    </span>
                </div>
            </>
        </div>
    );

    const renderPhotos = (url: any, index: number) => (
        <div key={index} className="relative">
            <Image src={url} className="object-cover rounded-xl" width={180} height={180} alt="" />
            <button
                className="bg-gray-100 absolute right-1 bottom-1 py-1 px-2 rounded-full text-black"
                onClick={() => handleRemoveImage(index)}
            >
                X
            </button>
        </div>
    );

    const renderPhotoPlaceholder = (index: number) => (
        <div
            key={index}
            className="w-[180px] h-[180px] shadow-[0_0px_10px_rgba(0,0,0,0.15)] hover:shadow-[0_0px_20px_rgba(0,0,0,0.26)] rounded-xl flex justify-center items-center border"
        >
            <label htmlFor={`fileInput-${index}`}>
                <BsPlusSquareDotted className="w-10 h-10 text-[#00C684] cursor-pointer" />
            </label>
            <input
                type="file"
                id={`fileInput-${index}`}
                onChange={(event) => handlePhotoImageChange(event, index)}
                style={{ display: "none" }}
                multiple
            />
        </div>
    );

    const searchBarInputClass = "p-2 w-full border border-gray-200 dark:border-gray-700 rounded-md bg-gray-100 dark:bg-gray-900 text-slate-700 dark:text-slate-400"
    const addButtonClass = "shrink-0 h-10 w-10 bg-primary/10 border border-primary dark:border-darkPrimary hover:bg-primary dark:hover:bg-darkPrimary hover:text-white rounded-full grid place-items-center text-primary dark:text-darkPrimary transition-all duration-500 hover:scale-100 scale-90"
    const removeButtonClass = "shrink-0 h-10 w-10 bg-primary/10 border border-red-600 hover:bg-red-600 text-red-600 hover:text-white rounded-full grid place-items-center transition-all duration-500 hover:scale-100 scale-90"

    if (!user?.email && !loading) {
        return <Loading />
    }
    else if (!user?.email && loading) {
        <Loading />
        // return window.location.href = "/sign-in";
    }
    else if (!user?.email && !loading) {
        return window.location.href = "/sign-in";
    }

    if (user?.email) {
        return (
            <div className='flex justify-center items-center overflow-auto py-5'>
                <form
                    className='flex flex-wrap gap-3 max-w-3xl justify-between md:border border-gray-200 dark:border-gray-700 rounded-md md:p-5'
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="w-full">
                        <h1 className='font-bold text-4xl pb-5 text-center dark:text-slate-300'>
                            Add A Blog
                        </h1>
                    </div>

                    <div className='flex flex-col w-full'>
                        <label className='pt-2 dark:text-slate-300' htmlFor='images'>
                            Images
                        </label>
                        <div className="w-11/12 mx-auto flex justify-center items-center">
                            <div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                                    {photoURLs.map((url, index) =>
                                        loadingStates[index]
                                            ? renderLoadingPlaceholder(index)
                                            : renderPhotos(url, index)
                                    )}
                                    {Array.from({ length: 6 - photoURLs.length }, (_, index) =>
                                        loadingStates[index + photoURLs.length]
                                            ? renderLoadingPlaceholder(index + photoURLs.length)
                                            : renderPhotoPlaceholder(index + photoURLs.length)
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col w-full'>
                        <label className='pt-2 dark:text-slate-300' htmlFor='title'>
                            Title
                        </label>
                        <input className={searchBarInputClass} type='text' id='title' {...register("title")} required />
                    </div>


                    <div className='flex flex-col w-full'>
                        <label className='pt-2 dark:text-slate-300' htmlFor='details'>
                            Details
                        </label>
                        <textarea className={`${searchBarInputClass}`} rows={8} {...register("details")} id='details' required />
                    </div>
                    <div className='flex flex-col w-full'>
                        <label className='pt-2 dark:text-slate-300' >Tags:</label>
                        <div>
                            <div>
                                {tagsFields.map((item, index) => {
                                    return (
                                        <div key={index} className='flex items-center gap-3 mb-5'>
                                            <input
                                                className={searchBarInputClass}
                                                type='text'
                                                {...register(`tags[${index}]`)}
                                            />
                                            <button
                                                type='button'
                                                onClick={() => tagsRemove(index)}
                                                className={removeButtonClass}
                                            >
                                                <FiTrash
                                                    size='20'
                                                />
                                            </button>
                                        </div>
                                    );
                                })}
                            </div>
                            <div>
                                <button
                                    type='button'
                                    onClick={() => tagsAppend("")}
                                    className={addButtonClass}
                                >
                                    <FiPlusCircle
                                        size='20'
                                    />
                                </button>
                            </div>
                        </div>
                    </div>


                    <div className='flex justify-end items-center w-full mt-3'>
                        <button
                            type="submit"
                            className={"cursor-pointer py-3 px-4 rounded-md border border-primary dark:border-darkPrimary hover:bg-primary dark:hover:bg-darkPrimary text-primary  dark:text-darkPrimary  hover:text-white font-bold"}
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        );
    };
};

export default Page;