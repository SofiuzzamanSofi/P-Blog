import { FC } from 'react';
import { CgGirl } from "react-icons/cg";
import { TfiGift } from "react-icons/tfi";

interface ProfileAboutOthersProps {
    about: string | undefined;
    othersCuriculam: string | undefined;
};

const ProfileAboutOthers: FC<ProfileAboutOthersProps> = ({ about, othersCuriculam }) => {
    return (
        <div className="my-20">
            <h1 className="text-[28px] font-semibold">Profile</h1>
            <hr className="my-5" />
            <div className="space-y-6">
                <div className="border border-gray-700 p-8 pb-14 rounded-[20px]">
                    <h3 className="text-[26px] font-medium flex items-center gap-3">
                        <CgGirl className="w-10 h-10" /> About Me
                    </h3>
                    <p className="text-[18px] mt-6">
                        {about || "About is comming soon"}
                    </p>
                </div>
                <div className="border border-gray-700 p-8 pb-14 rounded-[20px]">
                    <h3 className="text-[26px] font-medium flex items-center gap-3">
                        <TfiGift className="w-10 h-10" /> Others Curiculam
                    </h3>
                    <p className="text-[18px] mt-6">
                        {othersCuriculam || " Others curiculam is comming soon."}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProfileAboutOthers;