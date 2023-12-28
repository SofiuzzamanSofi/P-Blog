import { UserDataTypes } from '@/typesInterface/types';
import { FC, FormEvent, useState } from 'react';
import SkillsTag from './SkillsTag';

interface ExperienceAddProps {
    user: UserDataTypes | null;
    setUserReload: React.Dispatch<React.SetStateAction<boolean>>;
    onClose: () => void;
};

const ExperienceAdd: FC<ExperienceAddProps> = ({ user, setUserReload, onClose }) => {

    const [inputFieldsValue, setInputFieldsValue] = useState<string>("");
    const [buttonLoading, setbuttonLoading] = useState<boolean>(false);

    // inputfield value
    const [inputTitle, setInputTitle] = useState<string>("");
    const [inputEmployeType, setInputEmployeType] = useState<string>("");
    const [inputCompanyName, setInputCompanyName] = useState<string>("");
    const [inputCompanyLocation, setInputCompanyLocation] = useState<string>("");
    const [inputCurrentlyWork, setInputCurrentlyWork] = useState<string>("");
    const [inputStartDate, setInputStartDate] = useState<string>("");
    const [inputEndtWork, setInputEndtWork] = useState<string>("");
    const [inputIndustry, setInputIndustry] = useState<string>("");
    const [inputDescription, setInputDescription] = useState<string>("");
    const [inputSkills, setInputSkills] = useState<string>("");
    const [inputSkillsArray, setInputSkillsArray] = useState<string[]>([]);

    const handleOfferFieldsValue = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const experienceData = {
            title: inputTitle,
            employmentType: inputEmployeType,
            companyName: inputCompanyName,
            companyLocation: inputCompanyLocation,
            currentlyWork: inputCurrentlyWork,
            startDate: inputStartDate,
            endDate: inputEndtWork,
            industry: inputIndustry,
            description: inputDescription,
            skillsArray: inputSkillsArray,
        };
        console.log('hitted: experienceData:', experienceData);
        return;
        try {
            const values = {
                about: inputFieldsValue,
            };
            setbuttonLoading(true);


            const res = await fetch(
                `${process.env.NEXT_PUBLIC_SERVER}/user/update-user/${user?.email}`,
                {
                    method: "PUT",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(values),
                }
            );
            const result = await res.json();

            if (result.message === "User updated successfully") {
                setUserReload((prev) => !prev);
                onClose();
                setInputFieldsValue("");
                setbuttonLoading(false);
            }
        } catch (error) {
            setbuttonLoading(false);
        }
    };

    const skillArrayMake = () => {
        // console.log('inputSkills:', inputSkills);
        setInputSkillsArray([...inputSkillsArray, inputSkills]);
        setInputSkills("");
        console.log('inputSkillsArray:', inputSkillsArray);
    };

    const inputClassName = " shadow-[0_0px_10px_rgba(0,0,0,0.15)] hover:shadow-[0_0px_20px_rgba(0,0,0,0.25)] outline-none px-5 py-2 rounded-md w-full"

    return (
        <div className="text-black w-full ">
            <h1 className="text-center text-xl font-medium">
                Add Experience
            </h1>
            <form onSubmit={(e) => handleOfferFieldsValue(e)} className='space-y-4'>
                {/* title  */}
                <div>
                    <label htmlFor="title">
                        Title <span className='text-red-500'>*</span>
                    </label>
                    <input
                        type="text"
                        placeholder='Jr MERN Stack || FrontEnd  Web Developer'
                        required={true}
                        className={inputClassName}
                        value={inputTitle}
                        onChange={(e) => setInputTitle(e.target.value)}
                    />
                </div>
                {/* employment location type  */}
                <div>
                    <label htmlFor="job-location">Job Location type</label>
                    <select className={inputClassName}>
                        <option disabled value="">Please Select</option>
                        <option value="On-Site">On-Site</option>
                        <option value="Hybrid">Hybrid</option>
                        <option value="Remote">Remote</option>
                    </select>
                </div>
                {/* employment type  */}
                <div>
                    <label htmlFor="employment-type">Employment type</label>
                    <select className={inputClassName}>
                        <option disabled value="">Please Select</option>
                        <option value="Full-Time">Full-Time</option>
                        <option value="Part-Time">Part-Time</option>
                        <option value="Self-Employed">Self-Employed</option>
                        <option value="Freelance">Freelance</option>
                        <option value="Contact">Contact</option>
                        <option value="Internship">Internship</option>
                        <option value="Apprenticeship">Apprenticeship</option>
                        <option value="Seasonal">Seasonal</option>
                    </select>
                </div>
                <p className='font-semibold text-sm py-[2px]'>
                    Feb 2023 - Mar 2023 · 2 mos
                </p>
                <br />

                {/* company name  */}
                <div>
                    <label htmlFor="company-name">
                        Company Name <span className='text-red-500'>*</span>
                    </label>
                    <input
                        type="text"
                        placeholder='Ex:Google'
                        required={true}
                        className={inputClassName}
                        value={inputCompanyName}
                        onChange={(e) => setInputCompanyName(e.target.value)}
                    />
                </div>
                {/* company location  */}
                <div>
                    <label htmlFor="company-location">Company Location</label>
                    <input
                        type="text"
                        placeholder='Ex:London, United Kingdom'
                        className={inputClassName}
                        value={inputCompanyLocation}
                        onChange={(e) => setInputCompanyLocation(e.target.value)}
                    />
                </div>
                <br />

                {/* work now or not  */}
                <div className='flex items-center gap-2'>
                    <label htmlFor="current-work"> </label>
                    <input type="checkbox" className="h-6 w-6" /> <p>Currently Working in This Role</p>
                </div>
                {/* start date  */}
                <div>
                    <label htmlFor="company-location" className='block'>
                        Start Date <span className='text-red-500'>*</span>
                    </label>
                    <input type="date" name="" id="" className={inputClassName} />
                </div>
                {/* End date  */}
                <div>
                    <label htmlFor="company-location" className='block'>
                        End Date <span className='text-red-500'>*</span>
                    </label>
                    <input type="date" name="" id="" className={`${inputClassName} text-zinc-200 cursor-not-allowed`} disabled />
                </div>

                {/* company location  */}
                <div>
                    <label htmlFor="industry">Industry </label>
                    <input
                        type="text"
                        placeholder='Technology, Information and Internet'
                        className={inputClassName}
                        value={inputCompanyLocation}
                        onChange={(e) => setInputCompanyLocation(e.target.value)}
                    />
                </div>

                {/* details  */}
                <div>
                    <label htmlFor="company-name">Description</label>

                    <textarea
                        className={inputClassName}
                        placeholder="About yourself."
                        value={inputDescription}
                        onChange={(e) => setInputDescription(e.target.value)}
                    />
                    <p className='text-xs text-right'>{inputDescription.length || 0}/2,000</p>
                </div>
                <br />

                {/* skills  */}
                <div>
                    <label htmlFor="skills" className='block'>Skills</label>

                    <SkillsTag inputSkillsArray={inputSkillsArray} setInputSkillsArray={setInputSkillsArray} />
                    <input
                        type="text"
                        placeholder='Skill (ex:Project Management)'
                        className={inputClassName}
                        value={inputSkills}
                        onChange={(e) => setInputSkills(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {


                                console.log('e.start:', e.key)

                                skillArrayMake();
                                e.stopPropagation();
                                console.log('e.end:', e.key)
                            }
                        }}
                    />
                </div>

                {/* submit button  */}
                <button
                    className={
                        inputFieldsValue.length > 10
                            ? "bg-[#00C684] text-center w-full py-4 rounded-full text-xl text-white mb-5"
                            : "bg-gray-300 text-center w-full py-4 rounded-full text-xl text-white mb-5"
                    }
                    // disabled={buttonLoading || inputFieldsValue.length > 10 ? false : true}
                    type='submit'
                >
                    {buttonLoading ? "Loading..." : "Save"}
                </button>

            </form>
        </div>
    );
};

export default ExperienceAdd;