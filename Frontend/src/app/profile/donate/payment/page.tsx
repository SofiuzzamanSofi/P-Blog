"use client";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useSearchParams, useRouter } from "next/navigation";

const stripePromise = loadStripe(
    `${process.env.NEXT_PUBLIC_STRIPE_KEY}`
);

const Page = () => {

    const router = useRouter();
    const searchParams = useSearchParams()
    const price = searchParams.get('price') as string;
    const receiver = searchParams.get('receiver') as string;

    if (!receiver || !price) {
        router.push("/");
    }
    else if (price === "200.00" || price === "100.00" || price === "50.00") {
        return (
            <div className="lg:w-[39%] lg:mx-auto  mx-5">
                <div className="w-full my-10 lg:p-10">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm price={price} receiver={receiver} />
                    </Elements>
                </div>
            </div>
        );
    }
    else {
        router.push("/profile/donate")
    };
};

export default Page;
