"use client"

import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
import logo from "../../assets/p-blog-logo.png";
import signInIcon from "../../assets/sign-in.svg";
import homeIcon from "../../assets/house-door-fill.svg";
import userIcon from "../../assets/user.svg";
import { usePathname } from "next/navigation";
import { auth } from "../../firebase/firebase.config";
import { signOut } from "firebase/auth";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import AvatarMenu from "./navBarSidebar/AvatarLinks";
import { useAuth } from "@/provider/AuthProvider";

const Navbar = () => {

    const pathname = usePathname() ?? "";
    const pathNameTotalArray = pathname.split("/");
    const pathNameArray = pathNameTotalArray.filter((path) => path !== "");
    // 
    const { setUser, user } = useAuth();
    const router = useRouter();
    // small display slider and profile slider -----------
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const profileRef = useRef<HTMLDivElement | null>(null);
    const menuRef = useRef<HTMLDivElement | null>(null);

    // Click outside or scroll to close profile and menu
    const handleCloseProfileAndMenu = () => {
        setIsMenuOpen(false);
        setIsProfileOpen(false);
    };

    // Define a function to toggle the profile
    const toggleProfile = () => {
        setIsProfileOpen((prev) => !prev);
        setIsMenuOpen(false);
        // console.log('toggleProfile:', isProfileOpen);
    };

    // Add click event listener when the profile or mobile menu is open and closed this with click outside
    useEffect(() => {
        // Handle clicks outside the profile function
        const handleClickOutside = (event: MouseEvent) => {
            if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
                if (isProfileOpen) {
                    // console.log('isProfileOPen:');
                    setTimeout(() => {
                        handleCloseProfileAndMenu();
                    }, 300);
                }
            };
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                if (isMenuOpen) {
                    // console.log('isMenuOpen:');
                    setTimeout(() => {
                        handleCloseProfileAndMenu();
                    }, 300);
                }
            };
        };

        // 
        if (isProfileOpen || isMenuOpen) {
            document.addEventListener('mouseup', handleClickOutside);
        } else {
            document.removeEventListener('mouseup', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mouseup', handleClickOutside);
        };
    }, [isProfileOpen, isMenuOpen]);

    useEffect(() => {
        handleCloseProfileAndMenu();
    }, [router]);

    // sign out function
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                setUser(null);
                window.location.href = "/sign-in";
            })
            .catch((error) => {
                // Handle error if needed
            });
    };

    const headerRoutes = [
        {
            name: "My Blog",
            path: `/profile/blog/blog`,
        },
        {
            name: "Add Blog",
            path: `/profile/blog/add-blog`,
        },
        {
            name: "Donation",
            path: `/profile/donation`,
        },
        {
            name: "About",
            path: `/profile/about`,
        },
        {
            name: "Profile",
            path: `/profile/${user?._id}`,
        },
    ];

    // jsx code 
    if (pathNameArray.includes("sign-up") || pathNameArray.includes("sign-in")) {
        return null;
    }
    else {
        return (
            <header
                className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full text-sm py-0 sm:py-0 bg-gray-900"
            >
                <nav
                    className="relative max-w-[85rem] flex flex-wrap basis-full items-center w-full mx-auto sm:flex sm:items-center sm:justify-between px-4 py-1"
                    aria-label="Global"
                >
                    <div className="flex items-center justify-between">
                        <Link
                            className="flex-none text-xl font-semibold"
                            aria-label="Brand"
                            href="/"
                        >
                            <Image
                                src={logo}
                                alt='logo-image'
                                className='h-[2.904rem] sm:h-[4.248rem] w-[9rem] sm:w-[14.05rem] rounded-md'
                            />
                        </Link>
                    </div>

                    {/* login || out */}
                    <div className="flex justify-center items-center my-auto h-full md:gap-x-3.5 ml-auto sm:ml-0 sm:order-3">
                        <Link
                            href="/home"
                            className={`${pathname.includes("home") ? "text-blue-500 underline" : ""} font-medium hover:text-blue-600 px-2 sm:py-5`}
                        >
                            <Image src={homeIcon} alt='home-image-logo' className={`h-7 w-7 ${pathname.includes("home") ? "border-b-4 border-blue-500" : ""}`} />
                        </Link>
                        {!user?.email ? (
                            <>
                                <div className="flex flex-col gap-x-0 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:pl-1">
                                    <Link
                                        className="flex items-center md:gap-x-2 font-semibold hover:text-blue-600 sm:border-l sm:border-white sm:pl-3"
                                        href="/sign-in"
                                    >
                                        <Image src={signInIcon} alt='sign-in-icon' />
                                        SIGN IN
                                    </Link>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="hidden md:flex">
                                    {
                                        headerRoutes.map(({ name, path }, index) => (
                                            <Link
                                                key={index}
                                                href={path}
                                                className={`${pathname.includes(path) ? "text-blue-500 underline" : ""} font-medium hover:text-blue-600 px-2 sm:py-6`}
                                            >
                                                {name}
                                            </Link>
                                        ))
                                    }
                                </div>
                                {/* avatar  toggle */}
                                <div className="flex flex-col items-center justify-center gap-x-0 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:pl-7">
                                    <button
                                        className="flex items-center gap-x-2 font-semibold text-gray-500 hover:text-blue-600 dark:text-gray-400 z-50"
                                        onClick={toggleProfile}
                                    >
                                        <Image
                                            className="bg-white rounded-full h-9 w-9 border" src={user.photoURL || userIcon}
                                            width={48}
                                            height={48}
                                            alt='user-icon'
                                        />
                                    </button>
                                </div>
                            </>
                        )}
                    </div>

                    {
                        // avatar menu show
                        user &&
                        <AvatarMenu
                            handleCloseProfileAndMenu={handleCloseProfileAndMenu}
                            profileRef={profileRef}
                            isProfileOpen={isProfileOpen}
                            displayName={user?.displayName || null}
                            email={user.email!}
                            _id={user._id}
                            handleSignOut={handleSignOut}
                        />
                    }
                </nav>
            </header>
        );
    };
};

export default Navbar;