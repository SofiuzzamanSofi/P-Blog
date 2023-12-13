"use client";

import { AiOutlineLike } from "react-icons/ai";
import { BiDrink, BiEdit } from "react-icons/bi";
import { MdCastForEducation, MdOutlineSmokingRooms } from "react-icons/md";
import { CiLineHeight, CiLocationOn, CiUser } from "react-icons/ci";
import { BsGift } from "react-icons/bs";
import { TfiGift, TfiMenuAlt } from "react-icons/tfi";
import noImageUserIcon from "../../../assets/no_image_user_icon.png";
import { LiaRunningSolid, LiaSortAmountDownAltSolid } from "react-icons/lia";
// import { FavoriteContext } from "../../Context/FavoriteContext";
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

const page = () => {
    //
    const { user } = useAuth();
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


                        <Link
                            href="/profile/edit"
                            className="flex justify-center font-medium gap-x-2 shadow-[0_0px_15px_rgba(0,0,0,0.15)] hover:opacity-90 transform py-5 rounded-full my-5 w-11/12 text-gray-600 text-xl"
                        >
                            <BiEdit
                                className="h-8 w-8"
                            />
                            <span>Edit profile</span>
                        </Link>
                    </div>
                </div>
                <div className="col-span-9 sm:ml-10 lg:ml-24">
                    <div className="flex justify-between w-full">
                        <h1 className="text-[32px] font-semibold">{user?.displayName}</h1>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold mb-4">
                            {user?.des1 ? (
                                user?.des1
                            ) : (
                                <span className="text-[14px] font-[300] text-gray-400">
                                    No Intro yeat.
                                </span>
                            )}
                        </h2>
                    </div>
                    <div className="flex justify-start items-center gap-1">
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
                                    {"About is comming soon"}
                                </p>
                            </div>
                            <div className="bg-[#f9f9f984] p-8 pb-14 rounded-[20px]">
                                <h3 className="text-[26px] font-medium flex items-center gap-3">
                                    <TfiGift className="w-10 h-10" /> Others Curiculam
                                </h3>
                                <p className="text-[18px] mt-6">
                                    {" Others curiculam is impty."}
                                </p>
                            </div>
                            <div className="bg-[#f9f9f984] p-8 pb-14 rounded-[20px]">
                                <h3 className="text-[26px] font-medium flex items-center gap-3">
                                    <AiOutlineLike className="w-10 h-10" /> Interests
                                </h3>
                                <p className="text-[18px] mt-6">
                                    {" Interest may be revil later."}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 ">
                        <div className="flex items-center gap-x-3">
                            <TfiMenuAlt className="h-8 w-8" />
                            <h1 className="text-[28px] font-semibold">Attributes</h1>
                        </div>
                        <div className="grid md:grid-cols-2 gap-x-10 gap-y-6 my-10">
                            <div className="flex justify-between border-b w-full py-4 px-2 rounded-md">
                                <div className="flex justify-start items-center gap-3">
                                    <BsGift className="w-6 h-6" />
                                    <span> Age </span>
                                </div>
                                <span className="text-[18px] font-medium text-[#3757b9]">
                                    {user?.age ? user?.age : "None"}
                                </span>
                            </div>
                            <div className="flex justify-between border-b w-full py-4 px-2 rounded-md">
                                <div className="flex justify-start items-center gap-3">
                                    <CiLineHeight className="w-6 h-6" />
                                    <span> HEIGHT</span>
                                </div>
                                <span className="text-[18px] font-medium text-[#3757b9]">
                                    {user?.height ? user?.height : "None"}
                                </span>
                            </div>
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
                                    <CiUser className="w-6 h-6" />
                                    <span> ETHNICITY</span>
                                </div>
                                <span className="text-[18px] font-medium text-[#3757b9]">
                                    {user?.ethnicity ? user?.ethnicity : "None"}
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
