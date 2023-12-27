"use client";

import { FaLink } from "react-icons/fa";
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
        <FaLink className="h-4 w-4 md:h-6 md:w-6 cursor-pointer" title="Copy link to clipboard" onClick={handleCopyToClipBoard} />
    );
};

export default ProfileLinkCopy;