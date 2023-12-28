"use client";

import { useAuth } from '@/provider/AuthProvider';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import noImageUserIcon from "../../assets/no_image_user_icon.png";
import Loading from '../shared/Loading';

interface sidebarProps {

};

const sidebar: FC<sidebarProps> = ({ }) => {

    const { user, loading } = useAuth();

    if (loading) {
        <Loading />
    }
    else {
        return (
            <div className="hidden md:block min-w-[16rem] w-64 my-20">
                {
                    !user ?
                        <div className='my-20 flex justify-center items-center'>
                            <Link href="/sign-in" className="hover:text-blue-500 px-8 py-3 m-2 text-lg font-semibold rounded bg-gray-900">Sign In</Link>
                        </div>
                        :
                        <>
                            <aside className='border border-gray-300'>
                                <div>
                                    <div className='h-12 bg-[#020028]'>

                                    </div>
                                    <div className='flex justify-center items-center mt-[-2.1rem]'>
                                        {
                                            user?.photoURL
                                                ?
                                                <PhotoProvider>
                                                    <PhotoView src={user?.photoURL!}>
                                                        <Image
                                                            className="rounded-full cursor-pointer border-2 p-[1px]"
                                                            src={user?.photoURL}
                                                            height={58}
                                                            width={58}
                                                            // layout="fill"
                                                            alt="profile-photo"
                                                            title="click to fiew full page"
                                                        />
                                                    </PhotoView>
                                                </PhotoProvider>
                                                :
                                                <Image
                                                    className="h-64 w-52 border-0 rounded-2xl"
                                                    src={noImageUserIcon}
                                                    height={256}
                                                    width={256}
                                                    // layout="fill"
                                                    alt="profile-photo"
                                                />
                                        }
                                    </div>
                                    <div className='my-4 text-center'>
                                        <Link href={`/profile/${user._id}`}
                                            className='hover:underline'
                                        >
                                            {user?.displayName}
                                        </Link>
                                        <p className='text-xs'>Front-End Developer</p>
                                    </div>
                                    <div className='my-4 text-xs p-2'>
                                        <div className='flex justify-between items-center'>
                                            <p>Who's viewed your profile</p>
                                            <p>102</p>
                                        </div>
                                        <div className='flex justify-between items-center'>
                                            <p>Connections
                                            </p>
                                            <p>
                                                452
                                            </p>
                                        </div>
                                        <div className='flex justify-between items-center'>
                                            <p >
                                                Grow your network
                                            </p>
                                        </div>
                                        <div className='mt-6 text-center'>
                                            <p>Access exclusive tools & insights</p>
                                            <p>■ Try Premium Free for 1 Month</p>
                                        </div>
                                    </div>
                                </div>
                            </aside>
                            <aside className='mt-2 border border-gray-300'>
                                <div>
                                    <div className='my-4 p-2 space-y-3'>
                                        <div>
                                            <p className='text-sm'>Recent</p>
                                            <div className='flex justify-between items-center text-xs py-1'>
                                                <p>Comming Soon...</p>
                                            </div>
                                        </div>
                                        <div>
                                            <p className='text-sm'>Groups</p>
                                            <div className='flex justify-between items-center text-xs py-1'>
                                                <p>Comming Soon...</p>
                                            </div>
                                        </div>
                                        <div>
                                            <p className='text-sm'>Followed Hashtags</p>
                                            <div className='flex justify-between items-center text-xs py-1'>
                                                <p>Comming Soon...</p>
                                            </div>
                                        </div>

                                    </div>
                                    <div className='mt-14'>
                                        <p className='text-sm text-center py-4 border-t'>Discover more</p>
                                    </div>
                                </div>
                            </aside>
                        </>
                }
            </div>
        );
    };
};

export default sidebar;