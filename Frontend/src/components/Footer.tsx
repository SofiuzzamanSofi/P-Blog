import { FC } from 'react';

interface FooterProps {

};

const Footer: FC<FooterProps> = ({ }) => {
    return (
        <div className='text-center text-xs bg-gray-800 py-4'>
            <p>Developed by : Software Team, Sofi Tech Bangladesh.</p>
            <p>Copyright © 1983-2023  Sofi Tech Bangladesh PLC</p>
        </div>
    );
};

export default Footer;