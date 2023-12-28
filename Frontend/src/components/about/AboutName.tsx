import { UserDataTypes } from '@/typesInterface/types';
import Link from 'next/link';
import { FC } from 'react';
import {
    MdCastForEducation,
    MdFavorite,
    MdModeEdit,
    MdOutlineSmokingRooms,
    MdVerified,
} from "react-icons/md";

interface AboutNameProps {
    user: UserDataTypes
};

const AboutName: FC<AboutNameProps> = ({ user }) => {
    return (
        <>
            <div className="my-10 ">
                <h1 className="text-[24px] font-medium">{user?.displayName}</h1>
                <h6 className="text-[12px] text-sm">{user?.gender}</h6>
                <Link
                    href={`/profile/${user?._id}`}
                >
                    <button className="shadow-[0_0px_10px_rgba(0,0,0,0.15)] rounded-lg px-3 py-1 text-[13px] my-4 border">
                        View Profile
                    </button>
                </Link>
                <div className="flex justify-between items-center gap-4 p-0">
                    <progress
                        className="progress progress-success w-full bg-[#f1f1f180]"
                        value={
                            user ?
                                "100"
                                :
                                "100"
                        }
                        max="100"
                    ></progress>
                </div>
                <p className="text-[12px] mt-2">
                    Profile: 100
                </p>
            </div>
            <div className="bg-[#F2FCF9] text-black rounded-lg p-6">
                <div className="flex items-center justify-between">
                    <p className="text-[18px] font-medium">Verified</p>
                    <MdVerified className="w-6 h-6 text-[#18BB9C]" />
                </div>
                <p className="text-[14px] my-5">
                    Thanks for being with P-Blog. Keep hard work with smartness.
                </p>
                <button
                    className="shadow-[0_0px_10px_rgba(0,0,0,0.15)] rounded-lg px-6 py-3 text-[13px] bg-white"
                    disabled
                >

                    Verified
                </button>
            </div>
        </>
    );
};

export default AboutName;