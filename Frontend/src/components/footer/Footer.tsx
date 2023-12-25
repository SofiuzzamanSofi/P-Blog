"use client";

import { FC } from 'react';
import { usePathname } from "next/navigation";

interface FooterProps {

};

const Footer: FC<FooterProps> = ({ }) => {

    const pathname = usePathname() ?? "";

    // jsx code 
    if (pathname.includes("sign-up") || pathname.includes("sign-in")) {
        return null;
    }

    return (
        <div className='text-center text-xs bg-gray-900 py-4'>
            <p>Developed by : Software Team, Sofi Tech Bangladesh.</p>
            <p>Copyright © 1983-2023  Sofi Tech Bangladesh PLC</p>
        </div>
    );
};

export default Footer;