import { UserDataTypes } from '@/typesInterface/types';
import { FC, useState } from 'react';

interface ExperienceAddProps {
    user: UserDataTypes | null;
    setUserReload: React.Dispatch<React.SetStateAction<boolean>>;
    onClose: () => void;
};

const ExperienceAdd: FC<ExperienceAddProps> = ({ user, setUserReload, onClose }) => {

    const [inputFieldsValue, setInputFieldsValue] = useState<string>("");
    const [buttonLoading, setbuttonLoading] = useState<boolean>(false);

    const handleOfferFieldsValue = async () => {
        try {
            const values = {
                about: inputFieldsValue,
            };
            console.log('hitted:');
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

    return (
        <div className="text-black">
            <h1 className="text-center text-xl font-medium">
                Add Experience
            </h1>
            <textarea
                onChange={(e: any) => setInputFieldsValue(e.target.value)}
                // type="text"
                name=""
                id=""
                className=" shadow-[0_0px_10px_rgba(0,0,0,0.15)] hover:shadow-[0_0px_20px_rgba(0,0,0,0.25)] outline-none px-5 py-7 rounded-xl w-full my-6"
                placeholder="About yourself."
                required
                defaultValue={user?.about}
            />
            <form action="">
                <div className=" flex items-start gap-2 border-b pb-4">
                    <div>
                        {/* title  */}
                        <div>
                            <label htmlFor="title">Title</label>
                            <input type="text" placeholder='Jr MERN Stack || FrontEnd  Web Developer' className='px-2 py-1 border border-gray-900 rounded-sm w-full' />
                        </div>
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
            </form>
            <button
                onClick={handleOfferFieldsValue}
                className={
                    inputFieldsValue.length > 10
                        ? "bg-[#00C684] text-center w-full py-4 rounded-full text-xl text-white mb-5"
                        : "bg-gray-300 text-center w-full py-4 rounded-full text-xl text-white mb-5"
                }
                disabled={buttonLoading || inputFieldsValue.length > 10 ? false : true}
            >
                {buttonLoading ? "Loading..." : "Save"}
            </button>
        </div>
    );
};

export default ExperienceAdd;