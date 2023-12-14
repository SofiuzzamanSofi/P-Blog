"use client";

import { useAuth } from '@/provider/AuthProvider';
import { BlogDataTypes } from '@/typesInterface/types';
import axios from 'axios';
import Image from 'next/image'
import { useEffect, useState } from 'react';

export default function Home() {

  //
  const [blog, setBlog] = useState<BlogDataTypes | null>(null);
  //
  const { user: runningUser } = useAuth();
  // const pathname = usePathname()
  // const _id = pathname?.split("/")[2] as string;

  useEffect(() => {
    try {
      const getData = async () => {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER}/blog/all-blog`,
        );
        console.log('response.data:', response.data);
        if (response?.data?.success) {
          setBlog(response?.data?.data)
        };
      }
      getData();

    } catch (error) {
    }
  }, []);

  return (
    <main >
      This is home page.
    </main>
  )
}
