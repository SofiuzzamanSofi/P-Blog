import express from 'express'
import createPaymentControllerRoute from "./paymentRoute"
import createBlogControllerRoute from "./blogRoute"
import createRegControllerRoute from "./userRoute"
import createExperienceControllerRoute from "./experienceRoute"

const router = express.Router();

export default (): express.Router => {

    createPaymentControllerRoute(router);
    createBlogControllerRoute(router);
    createRegControllerRoute(router);
    createExperienceControllerRoute(router);
    return router;
};