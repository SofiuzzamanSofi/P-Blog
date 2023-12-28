import { FC } from 'react';

interface SkillsTagProps {
    inputSkillsArray: string[];
    setInputSkillsArray: React.Dispatch<React.SetStateAction<string[]>>;
};

const SkillsTag: FC<SkillsTagProps> = ({ inputSkillsArray, setInputSkillsArray }) => {

    const deleteSkills = (index: number) => {
        const newSkillsArray = [...inputSkillsArray];
        newSkillsArray.splice(index, 1);
        setInputSkillsArray(newSkillsArray);
    };

    return (
        <div>
            {
                inputSkillsArray.length > 0 &&
                <div className='py-2'>
                    {inputSkillsArray.length > 0 && (
                        <div className='py-2'>
                            {inputSkillsArray.map((skill, index) => (
                                <p key={index} className='px-2 py-1 bg-[#3ec296] m-2 inline-block rounded-md'>
                                    <span className='pr-2'>{skill}</span>
                                    <span
                                        className='font-semibold text-xl pl-2 hover:cursor-pointer text-red-700'
                                        onClick={() => deleteSkills(index)}
                                    >
                                        x
                                    </span>
                                </p>
                            ))}
                        </div>
                    )}
                </div>
            }
        </div>
    );
};

export default SkillsTag;