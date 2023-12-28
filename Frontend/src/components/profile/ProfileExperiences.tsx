import { FC } from 'react';
import { MdAssuredWorkload } from "react-icons/md";
import workImage from "../../assets/work.svg"
import Image from 'next/image';

interface ProfileExperiencesProps {

};

const ProfileExperiences: FC<ProfileExperiencesProps> = ({ }) => {
    return (
        <div className="my-20">
            <div className="flex items-center gap-x-3">
                <MdAssuredWorkload className="h-8 w-8" />
                <h1 className="text-[28px] font-semibold">Experience</h1>
            </div>
            <hr className="my-5" />

            <div className='space-y-6'>
                {
                    [...Array(3).keys()].map(() => (
                        <div className=" flex items-start gap-2 border-b pb-4">
                            <Image src={workImage} alt="work-image-logo" width={48} height={48} />
                            <div>
                                {/* title  */}
                                <h2 className='font-bold hover:underline'>
                                    Jr MERN Stack || FrontEnd  Web Developer
                                </h2>
                                {/* employment location type  */}
                                <p className='font-semibold text-sm py-[2px]'>
                                    Remote
                                </p>
                                {/* employment type  */}
                                <p className='font-semibold text-sm py-[2px]'>
                                    Full Time
                                </p>
                                <p className='font-semibold text-sm py-[2px]'>
                                    Feb 2023 - Mar 2023 · 2 mos
                                </p>
                                <br />

                                {/* company name  */}
                                <p className='font-semibold text-sm py-[2px] hover:underline'>
                                    Prayers connect
                                </p>
                                {/* company location  */}
                                <p>
                                    London, Uk
                                </p>
                                <br />

                                {/* work now or not  */}
                                {/* <div>
                            <input type="checkbox" name="" id="" />
                            <p>I am currently Working in this role</p>
                        </div> */}

                                {/* details  */}
                                <div>
                                    <p className='text-sm'>
                                        Work on large scale project on Node.js and Mongodb, Build cool frontend with Nextjs React and Typescript sometimes use Vite.
                                    </p>
                                </div>
                                <br />

                                {/* skills  */}
                                <div>
                                    <p className='text-sm'>
                                        <span className='font-semibold'>Skills: </span>
                                        <span>
                                            Mongoose · TypeScript · Redux.js · Front-End Development · Full-Stack Development · MongoDB · Express.js · Node.js · React.js · JavaScript
                                        </span>
                                    </p>
                                </div>

                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default ProfileExperiences;