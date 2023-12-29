import { FC } from 'react';
import { MdAssuredWorkload } from "react-icons/md";
import workImage from "../../assets/work.svg"
import Image from 'next/image';
import { ExperienceDataTypes } from '@/typesInterface/types';
import { formatDate } from '@/utils/date/dateShow';

interface ProfileExperiencesProps {
    experience: ExperienceDataTypes
};

const ProfileExperiences: FC<ProfileExperiencesProps> = ({ experience }) => {

    return (
        <div className="my-20">
            <div className="flex items-center gap-x-3">
                <MdAssuredWorkload className="h-8 w-8" />
                <h1 className="text-[28px] font-semibold">Experience</h1>
            </div>
            <hr className="my-5" />

            <div className='space-y-6'>
                {
                    experience.experience &&
                    experience.experience.map((experienc, index) => (
                        <div className=" flex items-start gap-2 border-b pb-4" key={index}>
                            <Image src={workImage} alt="work-image-logo" width={48} height={48} />
                            <div>
                                {/* title  */}
                                <h2 className='font-bold hover:underline'>
                                    {experienc.title}
                                </h2>
                                {/* employment location type  */}
                                <p className='font-semibold text-sm py-[2px]'>
                                    {experienc.jobLocationType}
                                </p>
                                {/* employment type  */}
                                <p className='font-semibold text-sm py-[2px]'>
                                    {experienc.employmentType}
                                </p>
                                <br />

                                {/* work now or not  */}
                                {
                                    experienc.currentlyWork &&
                                    <div className='flex items-center gap-2'>
                                        <input type="checkbox" className="h-5 w-5" defaultChecked
                                        /> <p>Currently Working in This Role</p>
                                    </div>
                                }
                                <p className='font-semibold text-sm py-[2px]'>
                                    {/* Feb 2023 - Mar 2023 · 2 mos */}
                                    {formatDate(experienc.startDate)}
                                    <span className='mx-1'>-</span>
                                    {
                                        !experienc.currentlyWork &&
                                        formatDate(experienc.endDate)
                                    }
                                </p>
                                <br />

                                {/* company name  */}
                                <p className='font-semibold text-sm py-[2px] hover:underline'>
                                    {experienc.companyName}
                                </p>
                                {/* company Industry  */}
                                <p>
                                    {experienc.industry}
                                </p>
                                {/* company location  */}
                                <p>
                                    {experienc.companyLocation}
                                </p>
                                <br />



                                {/* details || description  */}
                                <div>
                                    <p className='text-sm'>
                                        {experienc.description}
                                    </p>
                                </div>
                                <br />

                                {/* skills  */}
                                <div>
                                    <p className='font-semibold'>Skills: </p>
                                    <div className='text-sm mx-[-.5rem]'>
                                        {experienc.skillsArray.map((skill, index) => <button key={index} className='mx-2'>{skill}</button>)}
                                    </div>
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