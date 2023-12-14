import express from 'express'
import createRegControllerRoute from "./userRoute"
import createBlogControllerRoute from "./blogRoute"
import createMessageControllerRoute from "./messageRoute"
import createPaymentControllerRoute from "./paymentRoute"

const router = express.Router();

export default (): express.Router => {

    createRegControllerRoute(router);
    createPaymentControllerRoute(router);
    createBlogControllerRoute(router);

    createMessageControllerRoute(router);
    return router;
};