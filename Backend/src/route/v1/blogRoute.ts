import express from 'express';
import verifyToken from '../../middleware/verifyToken';
import { postBlogController, getAllJobBySearchTextController, getAllBlogController, getAppliedJobController, getOneJobController, getPostedJobController, patchAnsJobController, patchAppliedJobController, patchIsOpenJobController, patchQuestionJobController } from '../../controller/blogController';

export default (router: express.Router) => {

    // Middleware that applies to all routes below this point
    // router.use(verifyToken);

    router.get("/blog/all-blog", getAllBlogController); // get all jobs 
    router.post("/job/search", getAllJobBySearchTextController); // get all jobs By Search Text
    router.get("/job/:id", getOneJobController); // get 1 job by id 
    router.post("/blog/add-blog", postBlogController); // post a job 
    router.patch("/job/applied-job", patchAppliedJobController); // edit job for applicant: APPLIED
    router.patch("/job/isopen-job", patchIsOpenJobController); // edit job for isOpen or closed 
    router.get("/applied-jobs/:email", getAppliedJobController); // get applied-job by email 
    router.get("/posted-jobs/:email", getPostedJobController); // get posted-job by email 
    router.patch("/job/query", patchQuestionJobController); // edit job for Question
    router.patch("/job/riplay", patchAnsJobController); // edit job for Ans
};