"use client";

import React from "react";
import moment from 'moment';
import Link from "next/link";
import { BlogDataTypes } from "@/typesInterface/types";

interface BlogCardProps {
  blog: BlogDataTypes
};

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {

  return (
    <Link
      href={`/profile/blog/${blog._id}`}
      className='border border-gray-300 dark:border-gray-700 shadow-xl p-5 rounded-md dark:hover:text-slate-300'
    >
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
    </Link>
  );
};

export default BlogCard;