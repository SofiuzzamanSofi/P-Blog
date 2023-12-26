"use client";

import { FC } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import Image from "next/image";

interface ProfilePhotoViewProps {
    photoURL: string;
};

const ProfilePhotoView: FC<ProfilePhotoViewProps> = ({ photoURL }) => {
    return (
        <PhotoProvider>
            <PhotoView src={photoURL!}>
                <Image
                    className="h-64 w-52 border-0 rounded-2xl cursor-pointer"
                    src={photoURL}
                    height={256}
                    width={256}
                    // layout="fill"
                    alt="profile-photo"
                    title="click to fiew full page"
                />
            </PhotoView>
        </PhotoProvider>
    );
};

export default ProfilePhotoView;