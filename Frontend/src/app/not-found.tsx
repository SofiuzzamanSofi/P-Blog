import Link from 'next/link';
import { FC } from 'react';

interface NotFoundProps {

};

const NotFound: FC<NotFoundProps> = ({ }) => {
    return (
        <div className='flex justify-center items-center'>
            <div className='text-center'>
                <h1 className='font-bold'>Page Not Found || 404</h1>
                <br />
                <Link href="/" className='btn bg-slate-100 text-black py-4 px-10 rounded-md'>
                    Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;