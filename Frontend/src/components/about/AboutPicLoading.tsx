import { FC } from 'react';

interface AboutPicLoadingProps {

};

const AboutPicLoading: FC<AboutPicLoadingProps> = ({ }) => {
    return (
        <div
            className="w-full h-72 shadow-[0_0px_10px_rgba(0,0,0,0.15)] hover:shadow-[0_0px_20px_rgba(0,0,0,0.26)] rounded-xl flex justify-center items-center"
        >
            <div className="h-full w-full flex justify-center items-center">
                <span className="loading loading-bars loading-lg"></span>
            </div>
        </div>
    );
};

export default AboutPicLoading;