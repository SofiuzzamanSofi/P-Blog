import express from 'express'
import createRegControllerRoute from "./userRoute"
import createBlogControllerRoute from "./blogRoute"
import createPaymentControllerRoute from "./paymentRoute"

const router = express.Router();

export default (): express.Router => {

    createRegControllerRoute(router);
    createPaymentControllerRoute(router);
    createBlogControllerRoute(router);
    return router;
};