import { BlogDataTypes } from '@/typesInterface/types';
import Link from 'next/link';
import { FC, useEffect, useState } from 'react';
import { TiDocumentAdd } from "react-icons/ti";
import { useAuth } from '@/provider/AuthProvider';
import axios from 'axios';
import moment from 'moment';
import { FiTrash } from "react-icons/fi";
import toast from 'react-hot-toast';
import Loading from '../shared/Loading';
import Image from 'next/image';

interface BlogProps {

};

const Blog: FC<BlogProps> = ({ }) => {

    //
    const { user, loading } = useAuth();
    const [blogs, setBlogs] = useState<BlogDataTypes[] | null>(null);
    // const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isReload, setIsReload] = useState<boolean>(false);

    const handleApply = async (_id: string | undefined) => {
        if (_id) {
            const permission = window.confirm("do you want to Delete this?");
            if (permission) {
                try {
                    const response = await axios.delete(
                        `${process.env.NEXT_PUBLIC_SERVER}/blog-by-author/${_id}`,
                    );
                    if (response?.data?.success) {
                        setIsReload((prev) => !prev);
                        toast.success("Delete success.")
                    };
                } catch (error) {
                }
            };
        }
    };

    useEffect(() => {
        if (user?.email) {
            try {
                const getData = async () => {
                    // setIsLoading(true);
                    const response = await axios.get(
                        `${process.env.NEXT_PUBLIC_SERVER}/blog-by-author/${user?.email}`,
                    );
                    if (response?.data?.success) {
                        // setIsLoading(false);
                        setBlogs(response?.data?.data);
                    };
                }
                getData();
            } catch (error) {
                // setIsLoading(false);
            };
        };
    }, [user?.email, isReload]);

    if (loading) {
        return <Loading />
    }
    else if (!user?.email && !loading) {
        return window.location.href = "/sign-in";
    }
    else if (user?.email) {
        return (
            <div>
                <div className='flex justify-between items-center'>
                    <h3 className='text-xl'> Blog</h3>
                    <Link
                        href="/profile/blog/add-blog"
                        className="flex justify-center md:justify-start font-medium gap-x-2 shadow-[0_0px_15px_rgba(0,0,0,0.15)] hover:opacity-90 transform py-5 rounded-full my-5 text-xl"
                    >
                        <TiDocumentAdd
                            className="h-8 w-8"
                        />
                        <span>Add Blog</span>
                    </Link>
                </div>
                <div>
                    <div className='pb-5'>
                        Total Blog: {blogs?.length}
                    </div>
                    <div
                        className='grid gap-4'
                    >
                        {
                            blogs?.length ?
                                blogs?.map((blog, index) => (
                                    <div
                                        key={index}
                                        className='border border-gray-300 dark:border-gray-700 shadow-xl p-5 rounded-md dark:hover:text-slate-300'
                                    >
                                        <div className='flex flex-wrap gap-4 overflow-hidden justify-center'>
                                            {
                                                blog?.photoURLs && blog?.photoURLs?.length > 0 &&
                                                blog?.photoURLs.map((photo, index) => (
                                                    <Image
                                                        key={index}
                                                        src={photo}
                                                        alt='blog-photo'
                                                        className='object-cover cursor-pointer'
                                                        title="click to full view"
                                                        height={128}
                                                        width={128}
                                                    />
                                                ))
                                            }
                                        </div>
                                        <div className='flex justify-between'>
                                            <div>
                                                <p className='text-xl hover:underline transition-all'>{blog.title}</p>
                                            </div>
                                        </div>
                                        <div className='flex justify-between items-center mt-5'>
                                            <div>
                                                <p>
                                                    {
                                                        blog?.details && blog?.details?.length > 120 ? `${blog?.details?.slice(0, 120)}...` : blog?.details
                                                    }
                                                </p>
                                            </div>
                                        </div>
                                        <div className='grid mt-5'>
                                            <small className="hover:underline">
                                                Author: {blog.displayName}
                                            </small>
                                            <small >
                                                <span className='font-semibold'>
                                                    {moment(blog.timestamp).format('D MMMM, YYYY, h:mm:ss A z')}
                                                </span>
                                            </small>
                                        </div>
                                        <div className='flex justify-end items-center gap-5 md:mt-[-20px]'>
                                            <Link href={`/profile/blog/${blog._id}`}
                                                className='px-4 py-1 border rounded-md'
                                            >
                                                Details
                                            </Link>
                                            <FiTrash
                                                size='40'
                                                className="text-white bg-red-700 rounded-full p-2 cursor-pointer"
                                                onClick={() => handleApply(blog?._id)}
                                            />
                                        </div>
                                    </div>
                                ))
                                :
                                <div>
                                    <h1> No Blogs Yet On For This Author.</h1>
                                </div>
                        }
                    </div>
                </div>
            </div>
        );
    };
};

export default Blog;