import Link from 'next/link';
import { FC } from 'react';

interface AvatarMenuProps {
    handleCloseProfileAndMenu: () => void;
    profileRef: React.RefObject<HTMLDivElement | null>;
    isProfileOpen: boolean;
    displayName: string | null;
    email: string;
    _id: string;
    handleSignOut: () => void;
}

const AvatarMenu: FC<AvatarMenuProps> = ({
    handleCloseProfileAndMenu,
    profileRef,
    isProfileOpen,
    displayName,
    email,
    _id,
    handleSignOut,
}: AvatarMenuProps) => {

    const navClassName = "flex items-center gap-x-3.5 p-2 rounded-md text-sm hover:bg-gray-900 focus:ring-2 focus:ring-blue-500 text-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300"

    return (
        <div>
            {/* avater show all time  */}
            <div
                onMouseUpCapture={handleCloseProfileAndMenu}
                ref={profileRef as React.RefObject<HTMLDivElement>}
                className={`py-4 px-8 rounded-lg shadow-md  absolute
                        top-[3.5rem] md:top-[5.25rem] right-[0.0625rem] z-30 ${isProfileOpen ? "translate-y-0" : "translate-y-[-500px]"} duration-1000 transition-all bg-gray-900 border border-gray-700`}
            >
                <div className={`${navClassName} cursor-auto`}>
                    <div>
                        <p >{displayName ? `${displayName}` : "No Name found, Update your name pls"}</p>
                        <p >{email}</p>
                    </div>
                </ div>
                <Link href={`/profile/${_id}`} className={`${navClassName}`}>
                    Profile
                </ Link>
                <Link href="/dashboard" className={`${navClassName}`}>
                    Dashboard
                </ Link>
                <Link href="" className={`${navClassName} cursor-not-allowed`}>
                    Others Comming
                </ Link>
                <Link href="" className={`${navClassName} cursor-not-allowed`}>
                    Settings
                </ Link>
                <br />
                <button onClick={handleSignOut} className="flex w-full items-center justify-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-white bg-red-700 ">
                    Sign out
                </ button>
            </div>
        </div>
    );
};

export default AvatarMenu;