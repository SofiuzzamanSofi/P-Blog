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

            </div>
        </div>
    );
};

export default ProfileExperiences;