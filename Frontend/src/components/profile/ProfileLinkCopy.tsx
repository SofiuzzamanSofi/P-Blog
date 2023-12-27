"use client";

import { FaCreativeCommonsShare } from "react-icons/fa";
import { FC } from 'react';
import toast from "react-hot-toast";

interface ProfileLinkCopyProps {
    _id: string
};

const ProfileLinkCopy: FC<ProfileLinkCopyProps> = ({ _id }) => {

    const handleCopyToClipBoard = () => {
        navigator.clipboard.writeText(`${window.location.origin}/profile/${_id}`)
        toast.success("Profile link copy success")
    };

    return (
        <FaCreativeCommonsShare className="h-6 w-6 md:h-8 md:w-8 cursor-pointer" title="Copy link to clipboard" onClick={handleCopyToClipBoard} />
    );
};

export default ProfileLinkCopy;