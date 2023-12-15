import express from "express";
import mongoose from "mongoose";
import { BlogModel } from "../model/blogSchema";
import { AnsTypes, BlogDataTypes, QuestionAnsTypes, getAllBlogBySearchTextTypes } from "../interfaceServer/interfaceServer.ts";

type NextFunction = express.NextFunction;
type ObjectId = mongoose.Schema.Types.ObjectId;

//
export const getAllBlogBySearchTextService = async (
    next: NextFunction,
    query: getAllBlogBySearchTextTypes,
    assendingDessending: any
) => {
    try {
        const blogs = await BlogModel.find(query)
            .sort({ timestamp: assendingDessending });
        return blogs;
    } catch (error) {
        next(error);
    };
};

//
export const getOneBlogByIdService = async (
    next: NextFunction,
    id: string,
) => {
    try {
        const blog = await BlogModel.findById(id);
        return blog;
    } catch (error) {
        next(error);
    };
};

//
export const postBlogService = async (
    next: NextFunction,
    handleJobData: BlogDataTypes,
) => {
    try {
        const blogs = await new BlogModel(handleJobData).save();
        return blogs;
    } catch (error) {
        next(error);
    };
};

//
export const getBlogByAuthorService = async (
    next: NextFunction,
    email: string,
) => {
    try {
        const blog = await BlogModel.find({ email })
            .sort({ timestamp: -1 });
        return blog;
    } catch (error) {
        next(error);
    };
};

//
export const deleteBlogByid = async (
    next: NextFunction,
    _id: string,
) => {
    try {
        const blog = await BlogModel.findByIdAndDelete({ _id })
        return blog;
    } catch (error) {
        next(error);
    };
};

//
export const patchQuestionBlogService = async (
    next: NextFunction,
    blogId: ObjectId,
    questionAns: QuestionAnsTypes,
) => {
    try {
        const blog = await BlogModel.findByIdAndUpdate(
            blogId,
            {
                $push: {
                    questionAns,
                },
            },
            {
                new: true,
            },
        );
        return blog;
    } catch (error) {
        next(error);
    };
};

//
export const patchAnsBlogService = async (
    next: NextFunction,
    blogId: ObjectId,
    userEmail: string,
    questionId: string,
    ans: AnsTypes,
) => {
    try {
        const blog = await BlogModel.findOneAndUpdate(
            {
                _id: blogId,
                email: userEmail,
                "questionAns.questionId": questionId,
            },
            {
                $push: {
                    "questionAns.$.ans": ans,
                }
            },
            {
                new: true,
            },
        );
        return blog;
    } catch (error) {
        next(error);
    };
};
