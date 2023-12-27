import { FC } from 'react'
import loadingImage from "../../assets/p-blog-logo.png";
import Image from 'next/image';

interface LoadingProps {

};

const Loading: FC<LoadingProps> = ({ }) => {

    return (
        <div className='absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center'>
            <div id="dot-loader">
                <div className="lds-ellipsis">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default Loading;