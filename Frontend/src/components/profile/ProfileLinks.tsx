import Link from 'next/link';
import { FC } from 'react';
import { PiLinkSimpleBold } from "react-icons/pi";
import { FaFacebook, FaYoutube, FaTwitter, FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { UserDataTypes } from '@/typesInterface/types';
import { TbWorldWww } from "react-icons/tb";

interface ProfileLinksProps {
    user: UserDataTypes
};

const ProfileLinks: FC<ProfileLinksProps> = ({ user }) => {
    return (
        <div className="mt-10 ">
            <div className="flex items-center gap-x-3">
                <PiLinkSimpleBold className="h-8 w-8" />
                <h1 className="text-[28px] font-semibold">Links</h1>
            </div>
            <div className="grid md:grid-cols-2 gap-x-10 gap-y-6 my-10">
                {
                    user?.website ?
                        <div className="flex justify-between w-full py-4 px-2 rounded-md">
                            <div className="flex justify-start items-center gap-3">
                                <span>Website: </span>
                                <Link href={user?.website} target="_blank" rel="noopener noreferrer">
                                    <TbWorldWww className="w-6 h-6 text-blue-800" />
                                </Link>
                            </div>
                        </div>
                        :
                        ""
                }
                {
                    user?.github ?
                        <div className="flex justify-between w-full py-4 px-2 rounded-md">
                            <div className="flex justify-start items-center gap-3">
                                <span>Github: </span>
                                <Link href={user?.github} target="_blank" rel="noopener noreferrer">
                                    <FaGithub className="w-6 h-6 text-blue-800" />
                                </Link>
                            </div>
                        </div>
                        :
                        ""
                }
                {
                    user?.linkedin ?
                        <div className="flex justify-between w-full py-4 px-2 rounded-md">
                            <div className="flex justify-start items-center gap-3">
                                <span>Linkedin: </span>
                                <Link href={user?.linkedin} target="_blank" rel="noopener noreferrer">
                                    <FaLinkedinIn className="w-6 h-6 text-blue-800" />
                                </Link>
                            </div>
                        </div>
                        :
                        ""
                }
                {
                    user?.youtube ?
                        <div className="flex justify-between w-full py-4 px-2 rounded-md">
                            <div className="flex justify-start items-center gap-3">
                                <span>Youtube: </span>
                                <Link href={user?.youtube} target="_blank" rel="noopener noreferrer">
                                    <FaYoutube className="w-6 h-6 text-blue-800" />
                                </Link>
                            </div>
                        </div>
                        :
                        ""
                }
                {
                    user?.facebook ?
                        <div className="flex justify-between w-full py-4 px-2 rounded-md">
                            <div className="flex justify-start items-center gap-3">
                                <span>Facebook: </span>
                                <Link href={user?.facebook} target="_blank" rel="noopener noreferrer">
                                    <FaFacebook className="w-6 h-6 text-blue-800" />
                                </Link>
                            </div>
                        </div>
                        :
                        ""
                }
                {
                    user?.twitter ?
                        <div className="flex justify-between w-full py-4 px-2 rounded-md">
                            <div className="flex justify-start items-center gap-3">
                                <span>Twitter: </span>
                                <Link href={user?.twitter} target="_blank" rel="noopener noreferrer">
                                    <FaTwitter className="w-6 h-6 text-blue-800" />
                                </Link>
                            </div>
                        </div>
                        :
                        ""
                }
                {
                    user?.instagram ?
                        <div className="flex justify-between w-full py-4 px-2 rounded-md">
                            <div className="flex justify-start items-center gap-3">
                                <span>Instagram: </span>
                                <Link href={user?.instagram} target="_blank" rel="noopener noreferrer">
                                    <FaInstagram className="w-6 h-6 text-blue-800" />
                                </Link>
                            </div>
                        </div>
                        :
                        ""
                }
            </div>
        </div>
    );
};

export default ProfileLinks;