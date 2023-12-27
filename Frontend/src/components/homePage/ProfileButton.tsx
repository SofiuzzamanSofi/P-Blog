"use client"

import { useAuth } from '@/provider/AuthProvider';
import Link from 'next/link';
import { FC } from 'react';

interface ProfileButtonProps {

};

const ProfileButton: FC<ProfileButtonProps> = ({ }) => {

    const { user } = useAuth();

    if (!user) {
        return (
            <Link href="/sign-in" className="px-8 py-3 m-2 text-lg font-semibold rounded bg-gray-900">Sign In</Link>
        );
    }
    else {
        return (
            <Link href={`/profile/${user?._id}`} className="px-8 py-3 m-2 text-lg font-semibold rounded bg-gray-900">My Portfolio</Link>
        );
    }
};

export default ProfileButton;