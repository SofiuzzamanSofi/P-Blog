import express from "express";
import { createPaymentIntent, payment } from "../../controller/paymentController";

export default (router: express.Router) => {

    // payment intent
    router.post("/payment/create-payment-intent", createPaymentIntent);
    // payment
    router.post("/payment", payment);

};