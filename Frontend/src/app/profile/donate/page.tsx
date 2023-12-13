"use client";

import img1 from "../../../assets/card-discover-baae17345d2e9aa4926de3ae8b6043658a875ad790d26ffca40a92334c0605b8.webp";
import img2 from "../../../assets/card-jcb-dd36d87d65adbb39aa8ff59d1b9402c55f66ae73e9f336db7ad2f6db94ecbd37.webp";
import img3 from "../../../assets/card-master-98c300190b74e7751384e31f2895eaca8b7025cef3f319b47f2e76e63beee910.webp";
import img4 from "../../../assets/card-visa-db7d5554eef04cd04e0085c42febaff040797b3e0b8f2ac9e3ab6be2d59fc19e.webp";
import { CiCircleCheck } from "react-icons/ci";
import { useRef } from "react";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

const page = () => {

    const router = useRouter();

    const searchParams = useSearchParams()
    const receiver = searchParams.get('receiver');


    // best vaue
    const bestValueCreditAmountRef = useRef<HTMLHeadingElement>(null);
    const bestValuePriceRef = useRef<HTMLParagraphElement>(null);
    // elite
    const eliteCreditAmountRef = useRef<HTMLHeadingElement>(null);
    const elitePriceRef = useRef<HTMLParagraphElement>(null);
    // intorductory
    const introductoryCreditAmountRef = useRef<HTMLHeadingElement>(null);
    const introductoryPriceRef = useRef<HTMLParagraphElement>(null);

    const handleGetValue = (creditAmount: string, price: string) => {
        if (creditAmount && price) {
            router.push(`/profile/donate/payment?price=${price}&receiver=${receiver}`);
        }
    };

    return (
        <div className="relative w-full h-full">
            <div className="absolute hidden w-full bg-gray-50 lg:block h-96" />
            <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-semibold leading-none tracking-tight sm:text-4xl md:mx-auto">
                        Get all the Attention
                    </h2>
                    <p className="text-base md:text-lg">
                        Start Donate to move our socity for the next generation. If you donate I will motivate to innovate new technology and new thing thats helps you, me and all over the worl. So keep donatin. Happy life.
                    </p>
                </div>
                <div className="grid gap-10 lg:grid-cols-3 sm:mx-auto">
                    <div>
                        <div className="p-8 bg-gray-900 rounded text-center">
                            <div className="mb-4 text-center">
                                <p className="text-xl font-medium tracking-wide text-white mb-10 mt-4">
                                    Best Donate
                                </p>
                                <div className="flex items-center justify-center">
                                    <p className="mr-2 text-5xl font-semibold lg:text-6xl text-[#CBB07B]">
                                        $200.00
                                    </p>
                                </div>
                            </div>
                            <div className="border-b-2 w-24 mx-auto my-6" />
                            <div className="flex gap-x-2 justify-center"> <h4
                                ref={bestValueCreditAmountRef}
                                className="text-[22px] font-[500] text-[#CBB07B]"
                            >
                                2000
                            </h4>
                                <span className="text-[22px] font-[500] text-[#CBB07B]">WELLCOME</span></div>
                            <div className="flex gap-x-1 text-gray-400 mt-3 justify-center">
                                $
                                <p ref={bestValuePriceRef} className="text-[14px]  mb-14">
                                    200.00
                                </p>
                            </div>
                            <button
                                onClick={() =>
                                    handleGetValue(
                                        bestValueCreditAmountRef.current?.textContent?.trim() || "",
                                        bestValuePriceRef.current?.textContent?.trim() || ""
                                    )
                                }
                                type="submit"
                                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-[#CBB07B] focus:shadow-outline focus:outline-none"
                            >
                                Donate
                            </button>
                        </div>
                        <div className="w-11/12 h-2 mx-auto bg-gray-900 rounded-b opacity-75" />
                        <div className="w-10/12 h-2 mx-auto bg-gray-900 rounded-b opacity-50" />
                        <div className="w-9/12 h-2 mx-auto bg-gray-900 rounded-b opacity-25" />
                    </div>
                    <div>
                        <div className="p-8 bg-gray-900 rounded text-center">
                            <div className="mb-4 text-center">
                                <p className="text-xl font-medium tracking-wide text-white mb-10 mt-4">
                                    Elite
                                </p>
                                <div className="flex items-center justify-center">
                                    <p className="mr-2 text-5xl font-semibold lg:text-6xl text-[#CBB07B]">
                                        $100.00
                                    </p>
                                </div>
                            </div>
                            <div className="border-b-2 w-24 mx-auto my-6" />
                            <div className="flex justify-center gap-x-2">
                                <h4
                                    ref={eliteCreditAmountRef}
                                    className="text-[22px] font-[500] text-[#CBB07B]"
                                >
                                    1000
                                </h4>
                                <span className="text-[22px] font-[500] text-[#CBB07B]">WELLCOME</span>
                            </div>
                            <div className="flex gap-x-1 text-gray-400 mt-3 justify-center">
                                $
                                <p ref={elitePriceRef} className="text-[14px] mb-14">
                                    100.00
                                </p>
                            </div>

                            <button
                                onClick={() =>
                                    handleGetValue(
                                        eliteCreditAmountRef.current?.textContent?.trim() || "",
                                        elitePriceRef.current?.textContent?.trim() || ""
                                    )
                                }
                                type="submit"
                                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-[#CBB07B] focus:shadow-outline focus:outline-none"
                            >
                                Donate
                            </button>
                            {/* </Link> */}
                        </div>
                        <div className="w-11/12 h-2 mx-auto bg-gray-900 rounded-b opacity-75" />
                        <div className="w-10/12 h-2 mx-auto bg-gray-900 rounded-b opacity-50" />
                        <div className="w-9/12 h-2 mx-auto bg-gray-900 rounded-b opacity-25" />
                    </div>
                    <div>
                        <div className="p-8 bg-gray-900 rounded text-center">
                            <div className="mb-4 text-center">
                                <p className="text-xl font-medium tracking-wide text-white mb-10 mt-4">
                                    Introductory
                                </p>
                                <div className="flex items-center justify-center">
                                    <p className="mr-2 text-5xl font-semibold lg:text-6xl text-[#CBB07B]">
                                        $50.00
                                    </p>
                                </div>
                            </div>
                            <div className="border-b-2 w-24 mx-auto my-6" />
                            <div className="flex justify-center gap-x-2">
                                <h4
                                    ref={introductoryCreditAmountRef}
                                    className="text-[22px] font-[500] text-[#CBB07B]"
                                >
                                    500
                                </h4>
                                <span className="text-[22px] font-[500] text-[#CBB07B]"> WELLCOME</span>
                            </div>
                            <div className="flex gap-x-1 text-gray-400 mt-3 justify-center">
                                $
                                <p
                                    ref={introductoryPriceRef}
                                    className="text-[14px] mb-14"
                                >
                                    50.00
                                </p>
                            </div>

                            {/* <Link to="/buy-credits/payment"> */}
                            <button
                                onClick={() =>
                                    handleGetValue(
                                        introductoryCreditAmountRef.current?.textContent?.trim() ||
                                        "",
                                        introductoryPriceRef.current?.textContent?.trim() || ""
                                    )
                                }
                                type="submit"
                                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-[#CBB07B] focus:shadow-outline focus:outline-none"
                            >
                                Donate
                            </button>
                            {/* </Link> */}
                        </div>
                        <div className="w-11/12 h-2 mx-auto bg-gray-900 rounded-b opacity-75" />
                        <div className="w-10/12 h-2 mx-auto bg-gray-900 rounded-b opacity-50" />
                        <div className="w-9/12 h-2 mx-auto bg-gray-900 rounded-b opacity-25" />
                    </div>
                </div>

                <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-md mt-10">
                    <h4 className="text-center text-[28px] font-[600] mb-10">
                        We Keep It Simple
                    </h4>
                    <ul className="grid grid-cols-2 gap-4 lg:w-[70%] mx-auto">
                        <li className="flex justify-start items-start gap-2 font-medium">
                            {" "}
                            <CiCircleCheck className="text-green-600 w-6 h-6" />
                            Simple tap and donate
                        </li>
                        <li className="flex justify-start items-start gap-2 font-medium">
                            {" "}
                            <CiCircleCheck className="text-green-600 w-6 h-6" />
                            Control what you want to donate
                        </li>
                        <li className="flex justify-start items-start gap-2 font-medium">
                            {" "}
                            <CiCircleCheck className="text-green-600 w-6 h-6" />
                            Discreet billing
                        </li>
                        <li className="flex justify-start items-start gap-2 font-medium">
                            {" "}
                            <CiCircleCheck className="text-green-600 w-6 h-6" />
                            Prices are in USD
                        </li>
                        <li className="flex justify-start items-start gap-2 font-medium">
                            {" "}
                            <CiCircleCheck className="text-green-600 w-6 h-6" />
                            Helps us to make innovate new and better for the socity
                        </li>
                    </ul>
                </div>
            </div>
            <footer className="flex justify-center items-center gap-32 border-t-2 py-6">
                <button>
                    <Image className="w-16" src={img4} alt="" />
                </button>
                <button>
                    <Image className="w-16" src={img3} alt="" />
                </button>
                <button>
                    <Image className="w-16" src={img1} alt="" />
                </button>
                <button>
                    <Image className="w-16" src={img2} alt="" />
                </button>
            </footer>
        </div>
    );
};

export default page;