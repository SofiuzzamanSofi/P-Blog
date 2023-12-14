import Link from 'next/link';
import { FC } from 'react';
import { TiDocumentAdd } from "react-icons/ti";

interface BlogProps {

};

const Blog: FC<BlogProps> = ({ }) => {
    return (
        <div>
            <div className='flex justify-between items-center'>
                <h3 className='text-xl'> Blog</h3>
                <Link
                    href="/profile/add-blog"
                    className="flex justify-center md:justify-start font-medium gap-x-2 shadow-[0_0px_15px_rgba(0,0,0,0.15)] hover:opacity-90 transform py-5 rounded-full my-5 text-xl"
                >
                    <TiDocumentAdd
                        className="h-8 w-8"
                    />
                    <span>Add Blog</span>
                </Link>
            </div>
        </div>
    );
};

export default Blog;