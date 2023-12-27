"use client";

import BlogCard from '@/components/blog/BlogCard';
import Loading from '@/components/shared/Loading';
import { useAuth } from '@/provider/AuthProvider';
import { BlogDataTypes } from '@/typesInterface/types';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function AllBlog() {

    const { loading } = useAuth();
    const [blogs, setBlogs] = useState<BlogDataTypes[] | null>(null);
    // const [isLoading, setIsLoading] = useState<boolean>(false);
    const [titleText, setTitleText] = useState<string>("");
    const [newOrOld, setnewOrOld] = useState<string>("new");

    const handleFromSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
    };

    useEffect(() => {
        try {
            const searchData = {
                title: titleText?.trim(),
                timestamp: newOrOld,
            };
            const getData = async () => {
                // setIsLoading(true);
                const response = await axios.post(
                    `${process.env.NEXT_PUBLIC_SERVER}/blog/search`,
                    searchData,
                );
                if (response?.data?.success) {
                    // setIsLoading(false);
                    setBlogs(response?.data?.data);
                };
            }
            getData();
        } catch (error) {
            // setIsLoading(false);
        }
    }, [titleText, newOrOld]);


    const searchBarInputClass = "p-2 w-full border border-gray-200 dark:border-gray-700 rounded-md bg-gray-100 dark:bg-gray-900 text-slate-700 dark:text-slate-400"

    if (loading) {
        return <Loading />;
    }
    else if (blogs) {
        return (
            <div
                className='py-5 min-h-[calc(100vh-9rem)]'
            >
                <div
                    className='pb-5'
                >
                    <div>
                        <h1 className='font-bold text-4xl pb-5 text-center dark:text-slate-300'>P- Blog</h1>
                    </div>
                    <form
                        className="border border-gray-200 dark:border-gray-700 rounded-md p-5"
                        onSubmit={handleFromSubmit}
                    >
                        <div
                            className='flex flex-col lg:flex-row lg:justify-between lg:gap-4 w-full'>
                            <div className='flex flex-col items-start w-full'>
                                <label htmlFor='jobTitle' className='py-2'>
                                    Blog Title
                                </label>
                                <input
                                    className={searchBarInputClass}
                                    type='text'
                                    id='jobTitle'
                                    value={titleText}
                                    onChange={(e) => setTitleText(e.target.value)}
                                    placeholder='Search for blog....'
                                />
                            </div>
                        </div>
                        <div className="flex w-full justify-end  items-center pt-2 pb-1 gap-4 ">
                            <div className='flex gap-2 max-w-xs'>
                                <div>
                                    <select
                                        name="onldNew" id="onldNew" className={searchBarInputClass}
                                        value={newOrOld}
                                        onChange={(e) => setnewOrOld(e.target.value)}
                                    >
                                        <option disabled value="">Chose One</option>
                                        <option value="new">New First</option>
                                        <option value="old">Old First</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div
                    className='grid gap-4'
                >
                    {
                        blogs?.length ?
                            blogs?.map((blog, index) => (
                                <BlogCard key={index} blog={blog} />
                            ))
                            :
                            <div>
                                <h1> No Blogs Yet On This Website.</h1>
                            </div>
                    }
                </div>
            </div>
        )
    };
};