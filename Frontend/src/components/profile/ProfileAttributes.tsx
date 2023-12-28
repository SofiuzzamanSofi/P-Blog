import { UserDataTypes } from '@/typesInterface/types';
import { TfiMenuAlt } from "react-icons/tfi";
import { CgGirl } from "react-icons/cg";
import { IoEyeOutline } from "react-icons/io5";
import { GiRecycle, GiTakeMyMoney } from "react-icons/gi";
import { GiPencilRuler } from "react-icons/gi";
import { BiDrink } from "react-icons/bi";
import { MdCastForEducation, MdOutlineSmokingRooms } from "react-icons/md";
import { LiaRunningSolid, LiaSortAmountDownAltSolid } from "react-icons/lia";
import { FC } from 'react';

interface ProfileAttributesProps {
    user: UserDataTypes
};

const ProfileAttributes: FC<ProfileAttributesProps> = ({ user }) => {
    return (
        <div className="mt-20 ">
            <div className="flex items-center gap-x-3">
                <TfiMenuAlt className="h-8 w-8" />
                <h1 className="text-[28px] font-semibold">Attributes</h1>
            </div>
            <hr className="my-5" />
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
    );
};

export default ProfileAttributes;