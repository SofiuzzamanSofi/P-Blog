import { UserDataTypes } from '@/typesInterface/types';
import { FC } from 'react';
import { FaWhatsapp, FaMailBulk } from "react-icons/fa";
import { MdOutlinePeople } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

interface ProfileNameLocationProps {
    user: UserDataTypes
};

const ProfileNameLocation: FC<ProfileNameLocationProps> = ({ user }) => {
    return (
        <>
            <div className="flex justify-between w-full">
                <h1 className="text-[32px] font-semibold text-center w-full">{user?.displayName}</h1>
            </div>
            <div className="pb-6">
                <p className="font-semibold text-center w-full hover:underline">Jr MERN Stack || FrontEnd || Full Stack Web Developer</p>
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
                <div className="w-3 h-3 bg-[#18bb9d99] rounded-full mx-1 hidden" />
                <span className="text-[16px] font-[500] text-[#18bb9d99] hidden">
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
        </>
    );
};

export default ProfileNameLocation;