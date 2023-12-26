"use client";

import { useState } from "react";

import Link from "next/link";
import About from "@/components/about/About";
import Blog from "@/components/blog/Blog";
import Donation from "@/components/donation/Donation";

const Page = () => {

    const [activeTab, setActiveTab] = useState("About");

    const handleTabClick = (tabName: string) => {
        setActiveTab(tabName);
    };

    return (
        <div className="my-8">
            <div className="">
                <h1 className="text-[34px] font-semibold px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-6">
                    Profile
                </h1>
                <div className="border-b-2 border-gray-300 text-gray-500 text-[21px] font-medium">
                    <ul className="flex justify-start items-center gap-10 px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-6">
                        <li
                            className={`py-5 cursor-pointer hover:text-gray-700 border-b-2 ${activeTab === "About"
                                ? "border-red-500 text-gray-700"
                                : "border-transparent"
                                }`}
                            onClick={() => handleTabClick("About")}
                        >
                            About
                        </li>
                        <li
                            className={`py-5 cursor-pointer hover:text-gray-700 border-b-2 ${activeTab === "Blog"
                                ? "border-red-500 text-gray-700"
                                : "border-transparent"
                                }`}
                            onClick={() => handleTabClick("Blog")}
                        >
                            <Link href="/profile/blog">
                                Blog
                            </Link>
                        </li>
                        <li
                            className={`py-5 cursor-pointer hover:text-gray-700 border-b-2 ${activeTab === "Donation"
                                ? "border-red-500 text-gray-700"
                                : "border-transparent"
                                }`}
                            onClick={() => handleTabClick("Donation")}
                        >
                            <Link href="/profile/donation">
                                Donation
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="px-4 py-6 lg:py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-6">

                    {activeTab === "About" && (
                        <About />
                    )}
                    {activeTab === "Blog" && (
                        <Blog />
                    )}
                    {activeTab === "Donation" && (
                        <Donation />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Page;