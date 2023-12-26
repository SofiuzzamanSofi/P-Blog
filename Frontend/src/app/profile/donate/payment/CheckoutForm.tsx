import { useAuth } from "@/provider/AuthProvider";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const CheckoutForm = ({ price, receiver }: any) => {

  // reload auth-context-provider
  const { setUserReload, user } = useAuth();
  const router = useRouter();

  // disable button when processing
  const [processing, setProcessing] = useState(false);
  // card info
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [postalCode, setPostalCode] = useState("");
  // transacrion id and error
  const [transactionId, setTransactionId] = useState("");
  const [success, setSuccess] = useState("");
  const [cardError, setCardError] = useState("");
  //card item from stripe
  const elements = useElements();
  const stripe = useStripe();
  const [clientSecret, setClientSecret] = useState("");
  // const navigate = useNavigate();

  useEffect(() => {
    try {
      const items = {
        price: parseInt(price),
      };
      fetch(`${process.env.NEXT_PUBLIC_SERVER}/payment/create-payment-intent`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items }),
      })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret));
    } catch (error) {
      toast.error("Stripe-Payment is busy now");
      router.push("/profile/donate")
      return
    }
  }, [price, router]);

  // payment success and save on database.
  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (!user?.email) {
      window.location.href = "/sign-in";
      return;
    };

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // const { error, paymentMethod }: any = await stripe.createPaymentMethod({
    const { error }: any = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      // setCardError(error.message);
      //    console.log("[error]", error);
    } else {
      setCardError("");
      //    console.log("[PaymentMethod]", paymentMethod);
    }
    setSuccess("");
    setProcessing(true);
    const { paymentIntent, error: confirmError }: any =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: email,
          },
        },
      });
    if (confirmError) {
      setCardError(confirmError.message);
      return;
    }

    if (paymentIntent.status === "succeeded") {
      const payment = {
        receiver,
        sender: user?._id,
        firstName: firstName,
        lastName: lastName,
        email: email,
        country: country,
        postalCode: postalCode,
        amount: parseInt(price),
        transactionId: paymentIntent.id,
      };

      fetch(`${process.env.NEXT_PUBLIC_SERVER}/payment`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          // 'authorization': `bearer ${token}`,
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.message === "Donate successful") {
            toast.success(`Congrats ! Your Donate completed. trx-id: ${paymentIntent.id}`);
            setUserReload((prev) => !prev); // reload user on Auth-provider-context
            setTransactionId(paymentIntent.id);
            // navigate("/");
            window.location.href = "/";
          }
        });
    }
    setProcessing(false);
    //    console.log(paymentIntent);
  };

  return (
    <div>
      <div>
        <h1 className="text-2xl lg:text-4xl">Complete Donate Pls</h1>
      </div>
      <div className="border border-neutral-300 shadow rounded-lg px-6 py-7 my-8">
        <h2 className="text-[21.5px] font-medium text-[#CBB07B]">
          Credit Donate
        </h2>
        <h3 className="text-lg pt-3">
          A one-time charge of $ <span>{price}</span>
        </h3>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="lg:flex justify-between gap-x-3">
          <div className="w-full">
            <h1>First Name</h1>
            <input
              onChange={(e: any) => setFirstName(e.target.value)}
              className="border-2 outline-none px-3 py-5 rounded-lg w-full text-black"
              type="text"
              name=""
              id=""
            />
          </div>
          <div className="w-full mt-5 lg:mt-0">
            <h1>Last Name</h1>
            <input
              onChange={(e: any) => setLastName(e.target.value)}
              className="border-2 outline-none px-3 py-5 rounded-lg w-full text-black"
              type="text"
              name=""
              id=""
            />
          </div>
        </div>

        <CardElement
          className="border-2  mt-5 outline-none px-3 py-5 rounded-lg w-full"
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div className="my-5">
          <input
            onChange={(e: any) => setEmail(e.target.value)}
            type="email"
            className="border-2 outline-none py-5 px-3 rounded-lg w-full text-black"
            placeholder="Enter your email"
          />
        </div>
        <div className="flex justify-between gap-x-3">
          <div className="w-full">
            <h1>Zip / Postal Code</h1>
            <input
              onChange={(e: any) => setPostalCode(e.target.value)}
              className="border-2 outline-none px-3 py-5 rounded-lg w-full text-black"
              type="text"
              name=""
              id=""
            />
          </div>
          <div className="w-full">
            <h1>Country</h1>
            <input
              onChange={(e: any) => setCountry(e.target.value)}
              className="border-2 outline-none px-3 py-5 rounded-lg w-full text-black"
              type="text"
              name=""
              id=""
            />
          </div>
        </div>
        <div className="my-6">
          <p className="text-sm text-gray-600">
            By completing this transaction you certify that you are 18 years or
            older, agree to the Privacy Policy of this purchase and have read
            our Terms and Conditions of this purchase including any recurring
            terms described above.
          </p>
        </div>
        <button
          className="bg-[#00DE93] w-full text-white py-4 rounded-lg text-xl mt-5"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Confirm Purchase
        </button>
      </form>
      <div>
        {success && (
          <div>
            <h5 className="text-primary">{success}</h5>
            <h5>
              Your transaction Id :
              <span className="font-bold text-primary">{transactionId}</span>
            </h5>
          </div>
        )}
      </div>
      <p className="text-red-500">{cardError}</p>
    </div>
  );
};

export default CheckoutForm;
