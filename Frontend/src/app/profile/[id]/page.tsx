"use client";

import { PiLinkSimpleBold } from "react-icons/pi";
import { BiDrink, BiEdit } from "react-icons/bi";
import { FaFacebook, FaYoutube, FaTwitter, FaLinkedinIn, FaGithub, FaInstagram, FaWhatsapp, FaMailBulk, FaDonate } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { MdOutlinePeople } from "react-icons/md";
import { MdCastForEducation, MdOutlineSmokingRooms } from "react-icons/md";
import { CiLineHeight, CiLocationOn, CiUser } from "react-icons/ci";
import { BsGift } from "react-icons/bs";
import { TfiGift, TfiMenuAlt } from "react-icons/tfi";
import noImageUserIcon from "../../../assets/no_image_user_icon.png";
import { LiaRunningSolid, LiaSortAmountDownAltSolid } from "react-icons/lia";
import { usePathname } from 'next/navigation';
import { IoEyeOutline } from "react-icons/io5";
import { CgGirl } from "react-icons/cg";
import { GiRecycle, GiTakeMyMoney } from "react-icons/gi";
import { GiPencilRuler } from "react-icons/gi";
import ScrollToTopButton from "../../../components/ScrollToTopButton";

import Link from "next/link";
import { useAuth } from "@/provider/AuthProvider";
import Image from "next/image";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { useEffect, useState } from "react";
import { UserDataTypes } from "@/typesInterface/types";

const page = () => {

    //
    const [user, setUser] = useState<UserDataTypes | null>(null);
    //
    const { user: runningUser } = useAuth();
    const pathname = usePathname()
    const _id = pathname?.split("/")[2] as string;

    useEffect(() => {
        try {
            const getData = async () => {
                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_SERVER}/user/by-id`,
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
                    setUser(result?.data);
                }
            }
            getData();

        } catch (error) {

        }
    }, [])

    return (
        <div className="my-10 sm:my-20">
            <div className="sm:grid grid-cols-12 px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-6">
                <div className="col-span-3">
                    <div className="sticky top-20">
                        {
                            user?.photoURL
                                ?
                                <PhotoProvider>
                                    <PhotoView src={user?.photoURL!}>
                                        <Image
                                            className="h-64 w-52 border-0 rounded-2xl cursor-pointer"
                                            src={user?.photoURL}
                                            height={256}
                                            width={256}
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


                        {
                            runningUser?._id === _id ?
                                <Link
                                    href="/profile/edit"
                                    className="flex justify-center md:justify-start font-medium gap-x-2 shadow-[0_0px_15px_rgba(0,0,0,0.15)] hover:opacity-90 transform py-5 rounded-full my-5 w-11/12 text-xl"
                                >
                                    <BiEdit
                                        className="h-8 w-8"
                                    />
                                    <span>Edit profile</span>
                                </Link>
                                :
                                ""
                        }
                        {
                            // runningUser?._id === _id ?
                            runningUser?._id !== _id ?
                                <Link
                                    href={`/profile/donate?receiver=${_id}`}
                                    className="flex justify-center md:justify-start font-medium gap-x-2 shadow-[0_0px_15px_rgba(0,0,0,0.15)] hover:opacity-90 transform py-5 rounded-full my-5 w-11/12 text-xl gap-4"
                                >
                                    <FaDonate
                                        className="h-8 w-8"
                                    />
                                    <span>Donate</span>
                                </Link>
                                :
                                ""
                        }
                    </div>
                </div>
                <div className="col-span-9 sm:ml-10 lg:ml-24">
                    <div className="flex justify-between w-full">
                        <h1 className="text-[32px] font-semibold">{user?.displayName}</h1>
                    </div>
                    <div>
                        <p className="ext-[16px] font-medium flex gap-2">
                            <FaMailBulk className="w-6 h-6" />
                            {user?.email}
                        </p>
                    </div>
                    <div>
                        <p className="ext-[16px] font-medium flex gap-2 py-2">
                            <FaWhatsapp className="w-6 h-6" />
                            {user?.whatsapp}
                        </p>
                    </div>
                    <div>
                        <p className="ext-[16px] font-medium flex gap-2">
                            <MdOutlinePeople className="w-6 h-6" />
                            {user?.gender}
                        </p>
                    </div>
                    <div className="flex justify-start items-center gap-1 pt-2">
                        <div className="w-3 h-3 bg-[#18bb9d99] rounded-full mx-1" />
                        <span className="text-[16px] font-[500] text-[#18bb9d99]">
                            Online
                        </span>
                    </div>
                    <div className="mt-3 flex justify-start items-end gap-1">
                        <CiLocationOn className="h-6 w-6" />
                        {user?.location ? (
                            <p className="text-[16px] font-medium">{user?.location}</p>
                        ) : (
                            <span className="text-[14px] font-[300] text-gray-400">
                                Location comming soon.
                            </span>
                        )}
                    </div>

                    <div className="my-20">
                        <h1 className="text-[28px] font-semibold">Profile</h1>
                        <hr className="my-5" />
                        <div className="space-y-6">
                            <div className="bg-[#f9f9f984] p-8 pb-14 rounded-[20px]">
                                <h3 className="text-[26px] font-medium flex items-center gap-3">
                                    <CgGirl className="w-10 h-10" /> About
                                </h3>
                                <p className="text-[18px] mt-6">
                                    {user?.about || "About is comming soon"}
                                </p>
                            </div>
                            <div className="bg-[#f9f9f984] p-8 pb-14 rounded-[20px]">
                                <h3 className="text-[26px] font-medium flex items-center gap-3">
                                    <TfiGift className="w-10 h-10" /> Others Curiculam
                                </h3>
                                <p className="text-[18px] mt-6">
                                    {user?.othersCuriculam || " Others curiculam is comming soon."}
                                </p>
                            </div>
                        </div>
                    </div>

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
                    <hr />
                    <div className="mt-10 ">
                        <div className="flex items-center gap-x-3">
                            <TfiMenuAlt className="h-8 w-8" />
                            <h1 className="text-[28px] font-semibold">Attributes</h1>
                        </div>
                        <div className="grid md:grid-cols-2 gap-x-10 gap-y-6 my-10">
                            <div className="flex justify-between border-b w-full py-4 px-2 rounded-md">
                                <div className="flex justify-start items-center gap-3">
                                    <LiaRunningSolid className="w-6 h-6" />
                                    <span> BODY TYPE </span>
                                </div>
                                <span className="text-[18px] font-medium text-[#3757b9]">
                                    {user?.bodyType ? user?.bodyType : "None"}
                                </span>
                            </div>
                            <div className="flex justify-between border-b w-full py-4 px-2 rounded-md">
                                <div className="flex justify-start items-center gap-3">
                                    <CgGirl className="w-6 h-6" />
                                    <span> HAIR COLOR </span>
                                </div>
                                <span className="text-[18px] font-medium text-[#3757b9]">
                                    {user?.hair_color ? user?.hair_color : "None"}
                                </span>
                            </div>
                            <div className="flex justify-between border-b w-full py-4 px-2 rounded-md">
                                <div className="flex justify-start items-center gap-3">
                                    <IoEyeOutline className="w-6 h-6" />
                                    <span> EYE COLOR</span>
                                </div>
                                <span className="text-[18px] font-medium text-[#3757b9]">
                                    {user?.eye_color ? user?.eye_color : "None"}
                                </span>
                            </div>
                            <div className="flex justify-between border-b w-full py-4 px-2 rounded-md">
                                <div className="flex justify-start items-center gap-3">
                                    <GiRecycle className="w-6 h-6" />
                                    <span> PIERCINGS </span>
                                </div>
                                <span className="text-[18px] font-medium text-[#3757b9]">
                                    {user?.piercings ? user?.piercings : "None"}
                                </span>
                            </div>
                            <div className="flex justify-between border-b w-full py-4 px-2 rounded-md">
                                <div className="flex justify-start items-center gap-3">
                                    <GiPencilRuler className="w-6 h-6" />
                                    <span> TATTOOS</span>
                                </div>
                                <span className="text-[18px] font-medium text-[#3757b9]">
                                    {user?.tattoos ? user?.tattoos : "None"}
                                </span>
                            </div>
                            <div className="flex justify-between border-b w-full py-4 px-2 rounded-md">
                                <div className="flex justify-start items-center gap-3">
                                    <MdOutlineSmokingRooms className="w-6 h-6" />
                                    <span> SMOKES </span>
                                </div>
                                <span className="text-[18px] font-medium text-[#3757b9]">
                                    {user?.smoking ? user?.smoking : "None"}
                                </span>
                            </div>
                            <div className="flex justify-between border-b w-full py-4 px-2 rounded-md">
                                <div className="flex justify-start items-center gap-3">
                                    <BiDrink className="w-6 h-6" />
                                    <span> DRINKS</span>
                                </div>
                                <span className="text-[18px] font-medium text-[#3757b9]">
                                    {user?.drinking ? user?.drinking : "None"}
                                </span>
                            </div>
                            <div className="flex justify-between border-b w-full py-4 px-2 rounded-md">
                                <div className="flex justify-start items-center gap-3">
                                    <MdCastForEducation className="w-6 h-6" />
                                    <span> EDUCATION </span>
                                </div>
                                <span className="text-[18px] font-medium text-[#3757b9]">
                                    {user?.education ? user?.education : "None"}
                                </span>
                            </div>
                            <div className="flex justify-between border-b w-full py-4 px-2 rounded-md">
                                <div className="flex justify-start items-center gap-3">
                                    <GiTakeMyMoney className="w-6 h-6" />
                                    <span> YEARLY INCOME</span>
                                </div>
                                <span className="text-[18px] font-medium text-[#3757b9]">
                                    {user?.yearly_income ? user?.yearly_income : "None"}
                                </span>
                            </div>
                            <div className="flex justify-between border-b w-full py-4 px-2 rounded-md">
                                <div className="flex justify-start items-center gap-3">
                                    <LiaSortAmountDownAltSolid className="w-6 h-6" />
                                    <span> NET WORTH </span>
                                </div>
                                <span className="text-[18px] font-medium text-[#3757b9]">
                                    {user?.net_worth ? user?.net_worth : "None"}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <center>
                <ScrollToTopButton />
            </center>
        </div>
    );
};

export default page;
