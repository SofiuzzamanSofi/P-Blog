import { createPaymentIntent, payment } from "../../controller/paymentController";
import express from "express";

export default (router: express.Router) => {

    // payment intent
    router.post("/payment/create-payment-intent", createPaymentIntent);
    // payment
    router.post("/payment", payment);

};