import { PiLinkSimpleBold } from "react-icons/pi";
import { BiDrink } from "react-icons/bi";
import { FaFacebook, FaYoutube, FaTwitter, FaLinkedinIn, FaGithub, FaInstagram, FaWhatsapp, FaMailBulk, FaBlog } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { MdOutlinePeople } from "react-icons/md";
import { MdCastForEducation, MdOutlineSmokingRooms } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { TfiGift, TfiMenuAlt } from "react-icons/tfi";
import noImageUserIcon from "../../../assets/no_image_user_icon.png";
import { LiaRunningSolid, LiaSortAmountDownAltSolid } from "react-icons/lia";
import { IoEyeOutline } from "react-icons/io5";
import { CgGirl } from "react-icons/cg";
import { GiRecycle, GiTakeMyMoney } from "react-icons/gi";
import { GiPencilRuler } from "react-icons/gi";
import ScrollToTopButton from "../../../components/ScrollToTopButton";
import Link from "next/link";
import Image from "next/image";
import { FC } from "react";
import { BlogDataTypes, UserDataTypes } from "@/typesInterface/types";
import Loading from "@/components/Loading";
import BlogCard from "@/components/BlogCard";
import { getData } from "@/utils/getProfileData";
import ProfilePhotoView from "@/components/profile/ProfilePhotoView";
import ProfileLinkCopy from "@/components/profile/ProfileLinkCopy";
import EditAndDonateLink from "@/components/profile/EditAndDonateLink";

interface PageProps {
    params: { _id: string }
};

const Page: FC<PageProps> = async ({ params: { _id } }) => {

    let user: UserDataTypes;
    let blogs: BlogDataTypes[] | null;

    const data = await getData(_id);
    user = data?.user;
    blogs = data?.blog;

    // try {
    //     const constasync = async () => {
    //         const data = await getData(_id);
    //         console.log('data:', data);
    //         // setUser(data?.user);
    //         // setBlogs(data?.blog);
    //     user = data?.user;
    //     blogs = data?.blog;
    //     }
    //    await constasync();
    // } catch (error) {
    //     // setisLoading(false);
    // }

    if (!user?.email) {
        return <Loading />
    }
    else {
        return (
            <div className="my-10 sm:my-20">
                <div className="flex justify-end">
                    <ProfileLinkCopy
                        _id={_id}
                    />
                </div>
                <div className="sm:grid grid-cols-12 px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-6">
                    <div className="col-span-3">
                        <div className="sticky top-20">
                            {
                                user?.photoURL
                                    ?
                                    <ProfilePhotoView
                                        photoURL={user.photoURL}
                                    />
                                    :
                                    <Image
                                        className="h-64 w-52 border-0 rounded-2xl"
                                        src={noImageUserIcon}
                                        height={256}
                                        width={256}
                                        // layout="fill"
                                        alt="profile-photo"
                                    />
                            }

                            <EditAndDonateLink
                                _id={_id}
                            />
                        </div>
                    </div>
                    <div className="col-span-9 sm:ml-10 lg:ml-24">
                        <div className="flex justify-between w-full">
                            <h1 className="text-[32px] font-semibold">{user?.displayName}</h1>
                        </div>
                        <div>
                            <p className="ext-[16px] font-medium flex gap-2">
                                <FaMailBulk className="w-6 h-6" />
                                {user?.email}
                            </p>
                        </div>
                        <div>
                            <p className="ext-[16px] font-medium flex gap-2 py-2">
                                <FaWhatsapp className="w-6 h-6" />
                                {user?.whatsapp}
                            </p>
                        </div>
                        <div>
                            <p className="ext-[16px] font-medium flex gap-2">
                                <MdOutlinePeople className="w-6 h-6" />
                                {user?.gender}
                            </p>
                        </div>
                        <div className="flex justify-start items-center gap-1 pt-2">
                            <div className="w-3 h-3 bg-[#18bb9d99] rounded-full mx-1 hidden" />
                            <span className="text-[16px] font-[500] text-[#18bb9d99] hidden">
                                Online
                            </span>
                        </div>
                        <div className="mt-3 flex justify-start items-end gap-1">
                            <CiLocationOn className="h-6 w-6" />
                            {user?.location ? (
                                <p className="text-[16px] font-medium">{user?.location}</p>
                            ) : (
                                <span className="text-[14px] font-[300] text-gray-400">
                                    Location comming soon.
                                </span>
                            )}
                        </div>

                        <div className="my-20">
                            <h1 className="text-[28px] font-semibold">Profile</h1>
                            <hr className="my-5" />
                            <div className="space-y-6">
                                <div className="bg-[#f9f9f984] p-8 pb-14 rounded-[20px]">
                                    <h3 className="text-[26px] font-medium flex items-center gap-3">
                                        <CgGirl className="w-10 h-10" /> About
                                    </h3>
                                    <p className="text-[18px] mt-6">
                                        {user?.about || "About is comming soon"}
                                    </p>
                                </div>
                                <div className="bg-[#f9f9f984] p-8 pb-14 rounded-[20px]">
                                    <h3 className="text-[26px] font-medium flex items-center gap-3">
                                        <TfiGift className="w-10 h-10" /> Others Curiculam
                                    </h3>
                                    <p className="text-[18px] mt-6">
                                        {user?.othersCuriculam || " Others curiculam is comming soon."}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Links  */}
                        <div className="mt-10 ">
                            <div className="flex items-center gap-x-3">
                                <PiLinkSimpleBold className="h-8 w-8" />
                                <h1 className="text-[28px] font-semibold">Links</h1>
                            </div>
                            <div className="grid md:grid-cols-2 gap-x-10 gap-y-6 my-10">
                                {
                                    user?.website ?
                                        <div className="flex justify-between w-full py-4 px-2 rounded-md">
                                            <div className="flex justify-start items-center gap-3">
                                                <span>Website: </span>
                                                <Link href={user?.website} target="_blank" rel="noopener noreferrer">
                                                    <TbWorldWww className="w-6 h-6 text-blue-800" />
                                                </Link>
                                            </div>
                                        </div>
                                        :
                                        ""
                                }
                                {
                                    user?.github ?
                                        <div className="flex justify-between w-full py-4 px-2 rounded-md">
                                            <div className="flex justify-start items-center gap-3">
                                                <span>Github: </span>
                                                <Link href={user?.github} target="_blank" rel="noopener noreferrer">
                                                    <FaGithub className="w-6 h-6 text-blue-800" />
                                                </Link>
                                            </div>
                                        </div>
                                        :
                                        ""
                                }
                                {
                                    user?.linkedin ?
                                        <div className="flex justify-between w-full py-4 px-2 rounded-md">
                                            <div className="flex justify-start items-center gap-3">
                                                <span>Linkedin: </span>
                                                <Link href={user?.linkedin} target="_blank" rel="noopener noreferrer">
                                                    <FaLinkedinIn className="w-6 h-6 text-blue-800" />
                                                </Link>
                                            </div>
                                        </div>
                                        :
                                        ""
                                }
                                {
                                    user?.youtube ?
                                        <div className="flex justify-between w-full py-4 px-2 rounded-md">
                                            <div className="flex justify-start items-center gap-3">
                                                <span>Youtube: </span>
                                                <Link href={user?.youtube} target="_blank" rel="noopener noreferrer">
                                                    <FaYoutube className="w-6 h-6 text-blue-800" />
                                                </Link>
                                            </div>
                                        </div>
                                        :
                                        ""
                                }
                                {
                                    user?.facebook ?
                                        <div className="flex justify-between w-full py-4 px-2 rounded-md">
                                            <div className="flex justify-start items-center gap-3">
                                                <span>Facebook: </span>
                                                <Link href={user?.facebook} target="_blank" rel="noopener noreferrer">
                                                    <FaFacebook className="w-6 h-6 text-blue-800" />
                                                </Link>
                                            </div>
                                        </div>
                                        :
                                        ""
                                }
                                {
                                    user?.twitter ?
                                        <div className="flex justify-between w-full py-4 px-2 rounded-md">
                                            <div className="flex justify-start items-center gap-3">
                                                <span>Twitter: </span>
                                                <Link href={user?.twitter} target="_blank" rel="noopener noreferrer">
                                                    <FaTwitter className="w-6 h-6 text-blue-800" />
                                                </Link>
                                            </div>
                                        </div>
                                        :
                                        ""
                                }
                                {
                                    user?.instagram ?
                                        <div className="flex justify-between w-full py-4 px-2 rounded-md">
                                            <div className="flex justify-start items-center gap-3">
                                                <span>Instagram: </span>
                                                <Link href={user?.instagram} target="_blank" rel="noopener noreferrer">
                                                    <FaInstagram className="w-6 h-6 text-blue-800" />
                                                </Link>
                                            </div>
                                        </div>
                                        :
                                        ""
                                }
                            </div>
                        </div>

                        {/* Blogs  */}
                        <br />
                        <hr />
                        <div className="mt-10 ">
                            <div className="flex items-center gap-x-3">
                                <FaBlog className="h-8 w-8" />
                                <h1 className="text-[28px] font-semibold">Blogs</h1>
                            </div>
                            <div
                                className='grid gap-4 my-10'
                            >
                                {
                                    blogs && blogs?.length ?
                                        blogs?.map((blog, index) => (
                                            <BlogCard key={index} blog={blog} />
                                        ))
                                        :
                                        <div>
                                            <h1> No Blogs Yet On For This Author.</h1>
                                        </div>
                                }
                            </div>
                        </div>

                        {/* Attributes  */}
                        <br />
                        <hr />
                        <div className="mt-10 ">
                            <div className="flex items-center gap-x-3">
                                <TfiMenuAlt className="h-8 w-8" />
                                <h1 className="text-[28px] font-semibold">Attributes</h1>
                            </div>
                            <div className="grid md:grid-cols-2 gap-x-10 gap-y-6 my-10">
                                <div className="flex justify-between border-b w-full py-4 px-2 rounded-md">
                                    <div className="flex justify-start items-center gap-3">
                                        <LiaRunningSolid className="w-6 h-6" />
                                        <span> BODY TYPE </span>
                                    </div>
                                    <span className="text-[18px] font-medium text-[#3757b9]">
                                        {user?.bodyType ? user?.bodyType : "None"}
                                    </span>
                                </div>
                                <div className="flex justify-between border-b w-full py-4 px-2 rounded-md">
                                    <div className="flex justify-start items-center gap-3">
                                        <CgGirl className="w-6 h-6" />
                                        <span> HAIR COLOR </span>
                                    </div>
                                    <span className="text-[18px] font-medium text-[#3757b9]">
                                        {user?.hair_color ? user?.hair_color : "None"}
                                    </span>
                                </div>
                                <div className="flex justify-between border-b w-full py-4 px-2 rounded-md">
                                    <div className="flex justify-start items-center gap-3">
                                        <IoEyeOutline className="w-6 h-6" />
                                        <span> EYE COLOR</span>
                                    </div>
                                    <span className="text-[18px] font-medium text-[#3757b9]">
                                        {user?.eye_color ? user?.eye_color : "None"}
                                    </span>
                                </div>
                                <div className="flex justify-between border-b w-full py-4 px-2 rounded-md">
                                    <div className="flex justify-start items-center gap-3">
                                        <GiRecycle className="w-6 h-6" />
                                        <span> PIERCINGS </span>
                                    </div>
                                    <span className="text-[18px] font-medium text-[#3757b9]">
                                        {user?.piercings ? user?.piercings : "None"}
                                    </span>
                                </div>
                                <div className="flex justify-between border-b w-full py-4 px-2 rounded-md">
                                    <div className="flex justify-start items-center gap-3">
                                        <GiPencilRuler className="w-6 h-6" />
                                        <span> TATTOOS</span>
                                    </div>
                                    <span className="text-[18px] font-medium text-[#3757b9]">
                                        {user?.tattoos ? user?.tattoos : "None"}
                                    </span>
                                </div>
                                <div className="flex justify-between border-b w-full py-4 px-2 rounded-md">
                                    <div className="flex justify-start items-center gap-3">
                                        <MdOutlineSmokingRooms className="w-6 h-6" />
                                        <span> SMOKES </span>
                                    </div>
                                    <span className="text-[18px] font-medium text-[#3757b9]">
                                        {user?.smoking ? user?.smoking : "None"}
                                    </span>
                                </div>
                                <div className="flex justify-between border-b w-full py-4 px-2 rounded-md">
                                    <div className="flex justify-start items-center gap-3">
                                        <BiDrink className="w-6 h-6" />
                                        <span> DRINKS</span>
                                    </div>
                                    <span className="text-[18px] font-medium text-[#3757b9]">
                                        {user?.drinking ? user?.drinking : "None"}
                                    </span>
                                </div>
                                <div className="flex justify-between border-b w-full py-4 px-2 rounded-md">
                                    <div className="flex justify-start items-center gap-3">
                                        <MdCastForEducation className="w-6 h-6" />
                                        <span> EDUCATION </span>
                                    </div>
                                    <span className="text-[18px] font-medium text-[#3757b9]">
                                        {user?.education ? user?.education : "None"}
                                    </span>
                                </div>
                                <div className="flex justify-between border-b w-full py-4 px-2 rounded-md">
                                    <div className="flex justify-start items-center gap-3">
                                        <GiTakeMyMoney className="w-6 h-6" />
                                        <span> YEARLY INCOME</span>
                                    </div>
                                    <span className="text-[18px] font-medium text-[#3757b9]">
                                        {user?.yearly_income ? user?.yearly_income : "None"}
                                    </span>
                                </div>
                                <div className="flex justify-between border-b w-full py-4 px-2 rounded-md">
                                    <div className="flex justify-start items-center gap-3">
                                        <LiaSortAmountDownAltSolid className="w-6 h-6" />
                                        <span> NET WORTH </span>
                                    </div>
                                    <span className="text-[18px] font-medium text-[#3757b9]">
                                        {user?.net_worth ? user?.net_worth : "None"}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <center>
                    <ScrollToTopButton />
                </center>
            </div>
        );
    }
};

export default Page;