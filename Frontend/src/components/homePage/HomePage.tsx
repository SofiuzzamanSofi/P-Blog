import Link from 'next/link';
import { FC } from 'react';
import Subscribe from './Subscribe';
import ProfileButton from './ProfileButton';
import desertImage from "../../assets/desert-image.jpg"
import dogImage from "../../assets/dog.jpg"
import stadiumImage from "../../assets/stadium.jpg"
import aiImage from "../../assets/ai.jpg"
import emailImage from "../../assets/email.gif"
import Image from 'next/image';
import EmailSend from './EmailSend';

interface HomePageProps {

};

const HomePage: FC<HomePageProps> = ({ }) => {
    return (
        <div className="space-y-12">

            <section>
                <div className="container flex flex-col items-center px-4 py-8 mx-auto text-center md:px-10 lg:px-32 xl:max-w-3xl">
                    <h1 className="text-4xl font-bold leading-none sm:text-5xl">P-Blog is a
                        <span className="text-violet-400"> Business Portfolio </span>Website
                    </h1>
                    <p className="px-8 mt-8 mb-12 text-lg">Make your own identity with P-Blog portfolio. Share your portfolio just one click. Share your work or idea to others with blog or post.</p>
                    <div className="flex flex-wrap justify-center">
                        <ProfileButton />
                        <Link href="/blogs" className="px-8 py-3 m-2 text-lg border rounded text-gray-50 border-gray-700 hover:bg-gray-900">All Blogs</Link>
                    </div>
                </div>
            </section>
            <section className="p-6 bg-gray-800 text-gray-100">
                <div className="container grid justify-center grid-cols-2 mx-auto text-center lg:grid-cols-3">
                    <div className="flex flex-col justify-start m-2 lg:m-6">
                        <p className="text-4xl font-bold leading-none lg:text-6xl">50K+</p>
                        <p className="text-sm sm:text-base">Blogs</p>
                    </div>
                    <div className="flex flex-col justify-start m-2 lg:m-6">
                        <p className="text-4xl font-bold leading-none lg:text-6xl">10K+</p>
                        <p className="text-sm sm:text-base">Profile</p>
                    </div>
                    <div className="flex flex-col justify-start m-2 lg:m-6">
                        <p className="text-4xl font-bold leading-none lg:text-6xl">3</p>
                        <p className="text-sm sm:text-base">Published books</p>
                    </div>
                    <div className="flex flex-col justify-start m-2 lg:m-6">
                        <p className="text-4xl font-bold leading-none lg:text-6xl">80K+</p>
                        <p className="text-sm sm:text-base">Comments</p>
                    </div>
                    <div className="flex flex-col justify-start m-2 lg:m-6">
                        <p className="text-4xl font-bold leading-none lg:text-6xl">100K+</p>
                        <p className="text-sm sm:text-base">Expressions</p>
                    </div>
                    <div className="flex flex-col justify-start m-2 lg:m-6">
                        <p className="text-4xl font-bold leading-none lg:text-6xl">10+</p>
                        <p className="text-sm sm:text-base">Workshops World wide</p>
                    </div>
                </div>
            </section>
            <section className="py-8">
                <div className="container mx-auto">
                    <div className="p-4 mx-auto text-center md:px-10 lg:px-32 xl:max-w-3xl">
                        <h2 className="text-2xl font-bold leading-none sm:text-4xl">What can we offer to you?</h2>
                        <p className="px-8 my-4">
                            P-Blog serves as a dynamic online showcase, highlighting a company's products, services, and achievements. It provides a professional and accessible platform for potential clients and partners to explore the company's expertise, accomplishments, and contact information. With a well-designed portfolio website, businesses can effectively establish their online presence and make a compelling impression on visitors.
                        </p>
                    </div>
                    <div className="grid grid-cols-5 p-4 md:p-8">
                        <div className="flex justify-center px-4 col-span-full md:col-span-1 md:flex-col md:justify-start md:items-start">
                            <button className="p-2 border-b-2 md:border-l-2 md:border-b-0 md:py-3 border-gray-300 text-gray-400">Profile</button>
                            <button className="px-2 py-1 border-b-2 md:border-l-2 md:border-b-0 md:py-3 border-violet-400 text-gray-50">Posts</button>
                            <button className="px-2 py-1 border-b-2 md:border-l-2 md:border-b-0 md:py-3 border-gray-300 text-gray-400">Comments</button>
                            <button className="px-2 py-1 border-b-2 md:border-l-2 md:border-b-0 md:py-3 border-gray-300 text-gray-400">Impressions</button>
                            <button className="px-2 py-1 border-b-2 md:border-l-2 md:border-b-0 md:py-3 border-gray-300 text-gray-400">Community</button>
                        </div>
                        <div className="grid gap-12 py-4 text-center sm:grid-cols-2 col-span-full md:col-span-4 md:text-left">
                            <div className="flex flex-col items-center justify-center space-y-3 md:justify-start md:items-start">
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-violet-400">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                                </svg>
                                <h5 className="text-xl font-semibold">Why shoul you use it</h5>
                                <p>P-Blog makes a strong Identity for every users to verify their business.</p>
                            </div>
                            <div className="flex flex-col items-center justify-center space-y-3 md:justify-start md:items-start">
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-violet-400">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path>
                                </svg>
                                <h5 className="text-xl font-semibold">Simple to use.</h5>
                                <p>Just sign in and showcase your work space to others.</p>
                            </div>
                            <div className="flex flex-col items-center justify-center space-y-3 md:justify-start md:items-start">
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-violet-400">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path>
                                </svg>
                                <h5 className="text-xl font-semibold">One click to share to all over the world</h5>
                                <p>Every users have unique identity url so click copy and shae. So easy.</p>
                            </div>
                            <div className="flex flex-col items-center justify-center space-y-3 md:justify-start md:items-start">
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-violet-400">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                </svg>
                                <h5 className="text-xl font-semibold">Unlimited bloging</h5>
                                <p>Share your ideo or filling or busines releted info to other and read others to enrich your own life.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-6 bg-gray-800 text-gray-50">
                <div className="container flex flex-col justify-center p-4 mx-auto space-y-8 md:p-10 lg:space-y-0 lg:space-x-12 lg:justify-between lg:flex-row">
                    <div className="flex flex-col space-y-4 text-center lg:text-left">
                        <h1 className="text-5xl font-bold leading-none">Get free weekly tips</h1>
                        <p className="text-lg">Subscribe to my weekly newsletter to find out about the latest and greatest news about just about everything!</p>
                    </div>
                    <div className="flex flex-row items-center self-center justify-center flex-shrink-0 shadow-md lg:justify-end">
                        <div className="flex flex-row">
                            <Subscribe />

                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container max-w-6xl p-6 space-y-6 sm:space-y-12">
                    <Link href={`/profile/blog/658b1a432dcd426080a85988`} className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-gray-900">
                        <Image src={desertImage} alt="Website Design System" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-500" />
                        <div className="p-6 space-y-2 lg:col-span-5">
                            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">How to Survive on Desert</h3>
                            <span className="text-xs text-gray-400">December 26, 2023</span>
                            <p>1. Make sure you have sufficient food rations and water. 2. One gallon of water...</p>
                        </div>
                    </Link>
                    <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        <Link href={`/profile/blog/658b23c1ef8fe31f4a47453e`} className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-900">
                            <Image src={dogImage} alt='dog-image' role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" />
                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">A Clever Dog</h3>
                                <span className="text-xs text-gray-400">January 21, 2023</span>
                                <p>Once upon a time, there was a rich moneylender in a village. His name was Seth Karam Chand. One day, a kind and a generous man named Sunder Singh came to Seth Karam Chand to take a loan.</p>
                            </div>
                        </Link>
                        <Link href={`/profile/blog/658b25b198b950beb5e862a6`} className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-900">
                            <Image src={stadiumImage} alt='stadium-image' role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" />
                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Moin-ul-Haq Stadium</h3>
                                <span className="text-xs text-gray-400">November 21, 2023</span>
                                <p>Moin-ul-Haq Stadium is a multi-purpose stadium in Patna, Bihar, India. It has a capacity of 25,000 people and is used for cricket and association football. The stadium has hosted...</p>
                            </div>
                        </Link>
                        <Link href={`/profile/blog/658b267798b950beb5e862b2`} className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-900">
                            <Image src={aiImage} alt='ai-image' role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" />
                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Artificial intelligence AI</h3>
                                <span className="text-xs text-gray-400">November 28, 2022</span>
                                <p>Artificial intelligence (AI) is the intelligence of machines or software, as opposed to the intelligence of humans or animals. It is a field of study in computer science which develops and studies intelligent machines...</p>
                            </div>
                        </Link>
                    </div>
                    <div className="flex justify-center">
                        <Link href="/blogs" className="px-6 py-3 text-sm rounded-md hover:underline bg-gray-900 text-gray-400">Show All Blogs ...</Link>
                    </div>
                </div>
            </section>

            <section>
                <div className="container px-6 py-12 mx-auto">
                    <div className="grid items-center gap-4 xl:grid-cols-5">
                        <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
                            <h2 className="text-4xl font-bold">Duo assum utroque appetere an</h2>
                            <p className="text-gray-400">Pri ex magna scaevola moderatius. Nullam accommodare no vix, est ei diceret alienum, et sit cetero malorum. Et sea iudico consequat, est sanctus adipisci ex.</p>
                        </div>
                        <div className="p-6 xl:col-span-3">
                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="grid content-center gap-4">
                                    <div className="p-6 rounded shadow-md bg-gray-900">
                                        <p>An audire commodo habemus cum. Ne sed corrumpit repudiandae. Tota aliquip democritum pro in, nec democritum intellegam ne. Propriae volutpat dissentiet ea sit, nec at lorem inani tritani, an ius populo perfecto vituperatoribus. Eu cum case modus salutandi, ut eum vocent sensibus reprehendunt.</p>
                                        <div className="flex items-center mt-4 space-x-4">
                                            <img src="https://source.unsplash.com/51x51/?portrait" alt="" className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500" />
                                            <div>
                                                <p className="text-lg font-semibold">Leroy Jenkins</p>
                                                <p className="text-sm text-gray-400">CTO of Company Co.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6 rounded shadow-md bg-gray-900">
                                        <p>Sit wisi sapientem ut, pri civibus temporibus voluptatibus et, ius cu hinc fabulas. Nam meliore minimum et, regione convenire cum id. Ex pro eros mucius consectetuer, pro magna nulla nonumy ne, eam putent iudicabit consulatu cu.</p>
                                        <div className="flex items-center mt-4 space-x-4">
                                            <img src="https://source.unsplash.com/52x52/?portrait" alt="" className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500" />
                                            <div>
                                                <p className="text-lg font-semibold">Leroy Jenkins</p>
                                                <p className="text-sm text-gray-400">CTO of Company Co.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid content-center gap-4">
                                    <div className="p-6 rounded shadow-md bg-gray-900">
                                        <p>Putant omnium elaboraret per ut. Id dicta tritani nominavi quo, mea id justo errem elaboraret. Agam mollis scripserit ea his, ut nec postea verear persecuti. Ea noster senserit eam, ferri omittantur ei nec. Id mel solet libris efficiantur, commune explicari et eos. Case movet ad est, sed tota vocent appetere ea.</p>
                                        <div className="flex items-center mt-4 space-x-4">
                                            <img src="https://source.unsplash.com/53x53/?portrait" alt="" className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500" />
                                            <div>
                                                <p className="text-lg font-semibold">Leroy Jenkins</p>
                                                <p className="text-sm text-gray-400">CTO of Company Co.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6 rounded shadow-md bg-gray-900">
                                        <p>Te omnes virtute volutpat sed. Ei esse eros interesset vel, ei populo denique ocurreret vix, eu cum pertinax mandamus vituperatoribus. Solum nihil luptatum per ex, ei amet viderer eos. Ea illum labitur mnesarchum pro. Eius meis salutandi ei nam, alterum expetenda et nec. Expetenda intellegat at eum, per mazim sanctus honestatis ad. Ei noluisse invenire vix. Te ancillae patrioque qui, probo bonorum vivendum ex vim.</p>
                                        <div className="flex items-center mt-4 space-x-4">
                                            <img src="https://source.unsplash.com/54x54/?portrait" alt="" className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500" />
                                            <div>
                                                <p className="text-lg font-semibold">Leroy Jenkins</p>
                                                <p className="text-sm text-gray-400">CTO of Company Co.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32">
                <div className="flex flex-col justify-between">
                    <div className="space-y-2">
                        <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's talk!</h2>
                        <div className="text-gray-400">Vivamus in nisl metus? Phasellus.</div>
                    </div>
                    <Image src={emailImage} alt="Contact our customer support" className="p-6 h-52 md:h-64 rounded-3xl" />
                </div>
                <EmailSend />
            </div>

        </div>
    );
};

export default HomePage;