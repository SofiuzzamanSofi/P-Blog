"use client"

import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
import logo from "../assets/p-blog-logo.png";
import toggleIcon from "../assets/toggle-icon.svg";
import signInIcon from "../assets/sign-in.svg";
import userIcon from "../assets/user.svg";
import { BiSearchAlt } from "react-icons/bi";
import { usePathname } from "next/navigation";
import { auth } from "../../firebase/firebase.config";
// import { useDispatch, useSelector } from "react-redux";
// import { AppDispatch, RootState } from "../redux/store";
import { onAuthStateChanged, signOut } from "firebase/auth";
// import { getMe, signOutUser, } from "../redux/features/auth/authSlice";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import AvatarMenu from "./navBarSidebar/AvatarLinks";
import NavLinks from "./navBarSidebar/NavLinks";
import { useAuth } from "@/provider/AuthProvider";


const Navbar = () => {

    const pathname = usePathname() ?? "";
    const pathNameTotalArray = pathname.split("/");
    const pathNameArray = pathNameTotalArray.filter((path) => path !== "");
    // 
    const { setUser, user } = useAuth();

    // const user = useSelector((state: RootState) => state.auth.user);
    // const dispatch: AppDispatch = useDispatch();
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
    // Define a function to toggle the profile
    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
        setIsProfileOpen(false);
        // console.log('toggleMenu:', isMenuOpen);
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
            name: "Profile",
            path: `/profile/${user?._id}`,
        },
        {
            name: "Blogs",
            path: "/blogs",
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
                    <div className="flex items-center justify-between border">
                        <Link
                            className="flex-none text-xl font-semibold"
                            aria-label="Brand"
                            href="/"
                        >
                            <Image
                                src={logo}
                                alt='logo-image'
                                className='h-[2.904rem] sm:h-[4.248rem] w-[10.164rem] sm:w-[14.05rem] rounded-md'
                            />
                        </Link>
                    </div>

                    {/* login || out */}
                    <div className="flex justify-center items-center my-auto h-full gap-x-3.5 ml-auto sm:ml-0 sm:order-3 border">
                        {!user?.email ? (
                            <>
                                <div className="flex flex-col gap-x-0 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:pl-7">
                                    <Link
                                        className="flex items-center gap-x-2 font-semibold text-gray-500 hover:text-blue-600 sm:border-l sm:border-gray-300 sm:my-6 sm:pl-6 dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500"
                                        href="/sign-in"
                                    >
                                        <Image className="" src={signInIcon} alt='sign-in-icon' />
                                        SIGN IN
                                    </Link>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="hidden md:flex flex-col gap-x-0 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:pl-7">
                                    {
                                        headerRoutes.map(({ name, path }, index) => (
                                            <Link
                                                key={index}
                                                href={path}
                                                className={`${pathname.includes("upcommint....") ? "text-blue-500 dark:text-blue-500" : ""} text-gray-500  dark:text-gray-400 font-medium hover:text-blue-600 px-6 sm:py-6 sm:px-0  dark:hover:text-blue-500 `}
                                            >
                                                {name}
                                            </Link>
                                        ))
                                    }
                                </div>
                                {/* avatar  toggle */}
                                <div className="flex flex-col items-center justify-center gap-x-0 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:pl-7">
                                    <button
                                        className="flex items-center gap-x-2 font-semibold text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500 z-50"
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
                                {/* mobile menu toggle */}
                                {/* <div className="md:hidden flex flex-col items-center justify-center gap-x-0 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0">
                                    <button
                                        className="p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-black shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:focus:ring-offset-gray-800"
                                        onClick={toggleMenu}
                                    >
                                        <Image className="hs-overlay-open:hidden w-4 h-4 dark:text-white" src={toggleIcon} alt='toggle-icon' />
                                    </button>
                                </div> */}
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

                    {/* mobile menu show  */}
                    <div className="md:hidden">
                        <div
                            // onMouseUpCapture={handleCloseProfileAndMenu}
                            ref={menuRef}
                            id="docs-sidebar"
                            className={`${isMenuOpen ? "translate-x-0" : "translate-x-[-3000px]"} transition-all duration-500 transform fixed top-0 left-0 bottom-0 z-[60] w-60 border-r p-1 md:p-4 overflow-y-auto scrollbar-y dark:scrollbar-y lg:block lg:translate-x-0 lg:right-auto lg:bottom-0 bg-gray-800 border-gray-700`}
                        >
                            <div className="px-6 flex items-center justify-between gap-2">
                                <Link className="flex-none text-xl font-semibold dark:text-white" href="/" aria-label="Brand">
                                    <Image
                                        src={logo}
                                        alt='logo-image'
                                        className='h-[2.904rem] w-[10.164rem] rounded-md'
                                    />
                                </Link>
                                <button
                                    className="shadow-lg bg-gray-100 dark:bg-gray-900 text-black dark:text-white border dark:border-gray-700 rounded-lg p-2"
                                    title="closed-side-bar"
                                    onClick={handleCloseProfileAndMenu}
                                >
                                    X
                                </button>
                            </div>
                            <NavLinks />
                        </div>
                    </div>
                </nav>
            </header>
        );
    };
};

export default Navbar;