import { FC } from 'react';

interface sidebarProps {

};

const sidebar: FC<sidebarProps> = ({ }) => {
    return (
        <div
            className="hidden md:block w-64"
        >
            sidebar
        </div>
    );
};

export default sidebar;