import express from 'express';
import verifyToken from '../../middleware/verifyToken';
import { postBlogController, getAllBlogBySearchTextController, getAllBlogController, getAppliedJobController, getOneJobController, getBlogByAuthorController, patchAnsJobController, patchAppliedJobController, patchIsOpenJobController, patchQuestionJobController, deleteBlogById, getBlogById } from '../../controller/blogController';

export default (router: express.Router) => {

    // Middleware that applies to all routes below this point
    // router.use(verifyToken);

    router.post("/blog/add-blog", postBlogController); // post a job 
    router.post("/blog/search", getAllBlogBySearchTextController); // get all jobs By Search Text
    router.get("/blog-by-author/:email", getBlogByAuthorController); // get posted-job by email 
    router.delete("/blog-by-author/:_id", deleteBlogById); // get posted-job by email 
    router.patch("/blog/by-id", getBlogById);

    router.get("/blog/all-blog", getAllBlogController); // get all jobs 
    router.get("/job/:id", getOneJobController); // get 1 job by id 
    router.patch("/job/applied-job", patchAppliedJobController); // edit job for applicant: APPLIED
    router.patch("/job/isopen-job", patchIsOpenJobController); // edit job for isOpen or closed 
    router.get("/applied-jobs/:email", getAppliedJobController); // get applied-job by email 
    router.patch("/job/query", patchQuestionJobController); // edit job for Question
    router.patch("/job/riplay", patchAnsJobController); // edit job for Ans
};