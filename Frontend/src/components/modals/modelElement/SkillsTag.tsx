import { FC } from 'react';

interface SkillsTagProps {
    inputSkillsArray: string[];
};

const SkillsTag: FC<SkillsTagProps> = ({ inputSkillsArray }) => {

    const deleteSkills = () => {
        console.log("hello")
    }
    return (
        <div>
            {
                inputSkillsArray.length > 0 &&
                <div className='flex gap-2'>
                    {
                        inputSkillsArray.map((skill) => (
                            <p className='p-2 bg-[#3ec296] mx-1 inline-block rounded-lg'>
                                <span className='pr-2'>{skill}</span>
                                <span className='font-semibold text-xl pl-2 hover:cursor-pointer text-red-700' onClick={() => deleteSkills()}>x</span>
                            </p>
                        ))
                    }
                </div>
            }
        </div>
    );
};

export default SkillsTag;