import Link from 'next/link';
import { FC } from 'react';

interface NotFoundProps {

};

const NotFound: FC<NotFoundProps> = ({ }) => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div>
                <h1 className='font-bold'>Page Not Found</h1>
                <br />
                <Link href="/" className='btn bg-slate-100 text-black py-5 px-10 rounded-md'>
                    Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;