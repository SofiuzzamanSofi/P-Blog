import express from 'express';
import {
    postBlogController,
    getAllBlogBySearchTextController,
    getBlogByAuthorController,
    patchAnsBlogController,
    patchQuestionBlogController,
    deleteBlogById,
    getBlogById
} from '../../controller/blogController';

export default (router: express.Router) => {

    router.post("/blog/add-blog", postBlogController); // post a job 
    router.post("/blog/search", getAllBlogBySearchTextController); // get all jobs By Search Text
    router.get("/blog-by-author/:email", getBlogByAuthorController); // get posted-job by email 
    router.delete("/blog-by-author/:_id", deleteBlogById); // get posted-job by email 
    router.patch("/blog/by-id", getBlogById);
    router.patch("/blog/query", patchQuestionBlogController); // edit blog for Question
    router.patch("/blog/riplay", patchAnsBlogController); // edit job for Ans
};