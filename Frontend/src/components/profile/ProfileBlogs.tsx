import { FC } from 'react';
import { FaBlog } from "react-icons/fa";
import BlogCard from '../blog/BlogCard';
import { BlogDataTypes } from '@/typesInterface/types';

interface ProfileBlogsProps {
    blogs: BlogDataTypes[] | null;
};

const ProfileBlogs: FC<ProfileBlogsProps> = ({ blogs }) => {
    return (
        <div className="mt-10 ">
            <div className="flex items-center gap-x-3">
                <FaBlog className="h-8 w-8" />
                <h1 className="text-[28px] font-semibold">Activities and Blogs</h1>
            </div>
            <hr className="my-5" />
            <div
                className='grid gap-4 my-10'
            >
                {
                    blogs && blogs?.length ?
                        blogs?.map((blog, index) => (
                            <BlogCard key={index} blog={blog} />
                        ))
                        :
                        <div>
                            <h1> No Blogs Yet On For This Author.</h1>
                        </div>
                }
            </div>
        </div>
    );
};

export default ProfileBlogs;