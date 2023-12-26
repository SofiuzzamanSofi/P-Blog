"use client";

import { useAuth } from '@/provider/AuthProvider';
import Link from 'next/link';
import { FC } from 'react';
import { FaDonate } from "react-icons/fa";
import { BiEdit } from "react-icons/bi";

interface EditAndDonateLinkProps {
    _id: string
};

const EditAndDonateLink: FC<EditAndDonateLinkProps> = ({ _id }) => {

    const { user } = useAuth();

    return (
        <>
            {
                user?._id === _id ?
                    <Link
                        href="/profile/about"
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

                user?._id !== _id ?
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
        </>
    );
};

export default EditAndDonateLink;