"use client";

import { useState } from "react";
import About from "../../../components/About";
import Blog from "../../../components/Blog";
import { useAuth } from "@/provider/AuthProvider";

const page = () => {

    const [activeTab, setActiveTab] = useState("About");

    // auth-user
    // const { user, setUser } = useAuth();

    const handleTabClick = (tabName: string) => {
        setActiveTab(tabName);
    };

    // const setUserTab = (tabName: string) => {
    //     setUser(user);
    //     setActiveTab(tabName);
    // };

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
                            Blog
                        </li>
                    </ul>
                </div>
                <div className="px-4 py-6 lg:py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-6">

                    {activeTab === "About" && (
                        <About
                        // user={user} setUserTab={setUserTab}
                        />
                    )}
                    {activeTab === "Blog" && (
                        <Blog
                        // user={user}
                        // setUser={setUser}
                        // setUserReload={setUserReload}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default page;