import express from "express";
import mongoose from "mongoose";
import { BlogModel } from "../model/blogSchema";
import { AnsTypes, JobDataTypes, QuestionAnsTypes, getAllBlogBySearchTextTypes } from "../interfaceServer/interfaceServer.ts";

type NextFunction = express.NextFunction;
type ObjectId = mongoose.Schema.Types.ObjectId;

export const getAllBlogService = async (
    next: NextFunction
) => {
    try {
        const blogs = await BlogModel.find();
        return blogs;
    } catch (error) {
        next(error);
    };
};

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

export const postBlogService = async (
    next: NextFunction,
    handleJobData: JobDataTypes,
) => {
    try {
        const blogs = await new BlogModel(handleJobData).save();
        return blogs;
    } catch (error) {
        next(error);
    };
};

export const patchAppliedJobService = async (
    next: NextFunction,
    jobId: ObjectId,
    userId: ObjectId,
    userEmail: string,
) => {
    try {
        const jobs = await BlogModel.findByIdAndUpdate(
            jobId,
            {
                $push: {
                    applicants: {
                        userId,
                        userEmail,
                    },
                },
            },
            {
                new: true,
            }
        );
        return jobs;
    } catch (error) {
        next(error);
    };
};

export const patchIsOpenJob1Service = async (
    next: NextFunction,
    jobId: ObjectId,
    userEmail: string,
    isOpen: boolean,
) => {
    try {
        const jobs = await BlogModel.findOne({
            _id: jobId,
            email: userEmail,
            isOpen,
        });
        return jobs;
    } catch (error) {
        next(error);
    };
};

export const patchIsOpenJob2Service = async (
    next: NextFunction,
    jobId: ObjectId,
    userEmail: string,
    updatedIsOpen: boolean,
) => {
    try {
        const jobs = await BlogModel.findOneAndUpdate(
            {
                _id: jobId,
                email: userEmail,
            },
            {
                $set: {
                    isOpen: updatedIsOpen,
                },
            },
            {
                new: true,
            }
        );
        return jobs;
    } catch (error) {
        next(error);
    };
};

export const getAppliedJobService = async (
    next: NextFunction,
    email: string,
) => {
    try {
        const jobs = await BlogModel.find({ "applicants.userEmail": email })
        return jobs;
    } catch (error) {
        next(error);
    };
};

export const getBlogByAuthorService = async (
    next: NextFunction,
    email: string,
) => {
    try {
        const blog = await BlogModel.find({ email })
        return blog;
    } catch (error) {
        next(error);
    };
};

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

export const patchQuestionJobService = async (
    next: NextFunction,
    jobId: ObjectId,
    questionAns: QuestionAnsTypes,
) => {
    try {
        const jobs = await BlogModel.findByIdAndUpdate(
            jobId,
            {
                $push: {
                    questionAns,
                },
            },
            {
                new: true,
            },
        );
        return jobs;
    } catch (error) {
        next(error);
    };
};

export const patchAnsJobService = async (
    next: NextFunction,
    jobId: ObjectId,
    userEmail: string,
    questionId: string,
    ans: AnsTypes,
) => {
    try {
        const jobs = await BlogModel.findOneAndUpdate(
            {
                _id: jobId,
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
        return jobs;
    } catch (error) {
        next(error);
    };
};
