import { FaWhatsapp, FaMailBulk } from "react-icons/fa";
import { MdOutlinePeople } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import noImageUserIcon from "../../../assets/no_image_user_icon.png";
import ScrollToTopButton from "../../../components/shared/ScrollToTopButton";
import Link from "next/link";
import Image from "next/image";
import { FC } from "react";
import { BlogDataTypes, UserDataTypes } from "@/typesInterface/types";
import { getData } from "@/utils/getProfileData";
import ProfilePhotoView from "@/components/profile/ProfilePhotoView";
import ProfileLinkCopy from "@/components/profile/ProfileLinkCopy";
import EditAndDonateLink from "@/components/profile/EditAndDonateLink";
import ProfileAboutOthers from "@/components/profile/ProfileAboutOthers";
import ProfileLinks from "@/components/profile/ProfileLinks";
import ProfileBlogs from "@/components/profile/ProfileBlogs";
import ProfileAttributes from "@/components/profile/ProfileAttributes";

interface PageProps {
    params: { _id: string }
};

const Page: FC<PageProps> = async ({ params: { _id } }) => {

    let user: UserDataTypes;
    let blogs: BlogDataTypes[] | null;

    const data = await getData(_id);
    user = data?.user;
    blogs = data?.blog;

    if (!user?.email) {
        return (
            <div className='flex justify-center items-center'>
                <div className="text-center">
                    <h1 className='font-bold'>No User Found</h1>
                    <h1 className='text-xs'>Your Link May Be Broken</h1>
                    <br />
                    <Link href="/" className='btn bg-slate-100 text-black py-4 px-10 rounded-md'>
                        Home
                    </Link>
                </div>
            </div>
        );
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

                        {/* Links  */}
                        <ProfileLinks user={user} />

                        {/* about and others  */}
                        <ProfileAboutOthers about={user?.about} othersCuriculam={user?.othersCuriculam} />

                        {/* Blogs  */}
                        <ProfileBlogs blogs={blogs} />

                        {/* Attributes  */}
                        <ProfileAttributes user={user} />

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