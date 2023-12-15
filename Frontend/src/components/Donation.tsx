import { useAuth } from '@/provider/AuthProvider';
import moment from 'moment';
import { FC } from 'react';
import Loading from './Loading';

interface DonationProps {

};

const Donation: FC<DonationProps> = ({ }) => {

    // auth-user
    const { user, loading } = useAuth();

    if (!user?.email && !loading) {
        return <Loading />
    }
    else if (!user?.email && loading) {
        <Loading />
        // return window.location.href = "/sign-in";
    }
    else if (!user?.email && !loading) {
        return window.location.href = "/sign-in";
    }

    if (user?.email) {
        return (
            <div>
                <div>
                    <p>Total Receive Donation: $ {user?.donateDetails?.totalReceiveAmount}</p>
                </div>
                {
                    user?.donateDetails?.totalReceiveAmount ?
                        <table className="table-fixed border rounded-lg my-5 p-5 scroll-x-auto">
                            <thead className='border'>
                                <tr>
                                    <th >NO</th>
                                    <th>Date</th>
                                    <th>Receive Email</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    user?.donateDetails?.receivers?.map((data, index) => (
                                        <tr key={index} className='border border-slate-600'>
                                            <td className='border border-slate-600'>{index + 1}</td>
                                            <td className='border border-slate-600'>{moment(data.time).format('D MMMM, YYYY, h:mm:ss A z')}</td>
                                            <td className='border border-slate-600'>{data.useremail}</td>
                                            <td className='border border-slate-600 text-right'>{data.amount}</td>
                                        </tr>
                                    ))
                                }

                            </tbody>
                        </table>
                        :
                        ""
                }
                <br />
                <br />

                <div>
                    <p>Total Send Donation: $ {user?.donateDetails?.totalSendAmount}</p>
                    {
                        user?.donateDetails?.totalSendAmount ?
                            <table className="table-fixed border rounded-lg my-5 p-5 scroll-x-auto">
                                <thead className='border'>
                                    <tr>
                                        <th >NO</th>
                                        <th>Date</th>
                                        <th>Sender Email</th>
                                        <th>Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        user?.donateDetails?.senders?.map((data, index) => (
                                            <tr key={index} className='border border-slate-600'>
                                                <td className='border border-slate-600'>{index + 1}</td>
                                                <td className='border border-slate-600'>{moment(data.time).format('D MMMM, YYYY, h:mm:ss A z')}</td>
                                                <td className='border border-slate-600'>{data.useremail}</td>
                                                <td className='border border-slate-600 text-right'>{data.amount}</td>
                                            </tr>
                                        ))
                                    }

                                </tbody>
                            </table>
                            :
                            ""
                    }
                </div>
            </div>
        );
    };
};

export default Donation;