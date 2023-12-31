"use client"

import { useAuth } from '@/provider/AuthProvider';
import { experienceDelFn } from '@/utils/experienceEditFn';
import { usePathname } from 'next/navigation';
import { FC } from 'react';
import toast from 'react-hot-toast';
import { FiTrash } from "react-icons/fi";

interface ProfileExpDelProps {
    _id: string;
};

const ProfileExpDel: FC<ProfileExpDelProps> = ({ _id }) => {

    const { user, setUserReload } = useAuth();
    const pathname = usePathname() ?? "";

    const handleDelete = async () => {
        const res = await experienceDelFn(user?._id, _id);
        if (res) {
            setUserReload((prev) => !prev);
            return toast.success("Delete Success.");
        }
        else {
            return toast.error("Failed to delete.");
        }
    }

    const include = pathname.includes("/profile/about");

    if (include) {
        return (
            <div className='flex justify-end'>
                <FiTrash className="w-7 h-7 cursor-pointer text-red-800 lg:mb-[-1rem]" onClick={handleDelete} />
            </div>
        )
    }
};

export default ProfileExpDel;