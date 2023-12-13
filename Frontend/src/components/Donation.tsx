import { useAuth } from '@/provider/AuthProvider';
import { FC } from 'react';

interface DonationProps {

};

const Donation: FC<DonationProps> = ({ }) => {

    // auth-user
    const { user, setUser } = useAuth();

    return (
        <div>
            <div>
                <p>Total Receive Donation: $ {user?.donateDetails?.totalReceiveAmount}</p>
            </div>
            <div>
                <p>Total Send Donation: $ {user?.donateDetails?.totalSendAmount}</p>
            </div>
        </div>
    );
};

export default Donation;