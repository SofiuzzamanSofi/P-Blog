import noImageUserIcon from "../../../assets/no_image_user_icon.png";
import ScrollToTopButton from "../../../components/shared/ScrollToTopButton";
import Link from "next/link";
import Image from "next/image";
import { FC } from "react";
import { BlogDataTypes, ExperienceDataTypes, UserDataTypes } from "@/typesInterface/types";
import { getData } from "@/utils/getProfileData";
import ProfilePhotoView from "@/components/profile/ProfilePhotoView";
import ProfileLinkCopy from "@/components/profile/ProfileLinkCopy";
import EditAndDonateLink from "@/components/profile/EditAndDonateLink";
import ProfileAboutOthers from "@/components/profile/ProfileAboutOthers";
import ProfileLinks from "@/components/profile/ProfileLinks";
import ProfileBlogs from "@/components/profile/ProfileBlogs";
import ProfileAttributes from "@/components/profile/ProfileAttributes";
import ProfileWork from "@/components/profile/ProfileExperiences";
import ProfileNameLocation from "@/components/profile/ProfileNameLocation";

interface PageProps {
    params: { _id: string }
};

const Page: FC<PageProps> = async ({ params: { _id } }) => {

    // let user: UserDataTypes;
    // let blogs: BlogDataTypes[] | null;


    const data = await getData(_id);
    const user: UserDataTypes = data?.user;
    const blogs: BlogDataTypes[] = data?.blog;
    const experience: ExperienceDataTypes = data?.experience;

    if (!user?.email) {
        return (
            <div className='flex justify-center items-center min-h-[calc(100vh-8.8rem)]'>
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
            // <section
            //     className="border mx-[-1rem] bg-cover bg-no-repeat bg-center"
            //     style={{ backgroundImage: `url('${user.photoURL || noImageUserIcon}')` }}
            // >
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

                        {/* profile Name location  */}
                        <ProfileNameLocation user={user} />

                        {/* works  */}
                        <ProfileWork />

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