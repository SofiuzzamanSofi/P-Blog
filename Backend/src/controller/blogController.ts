import express from "express";
import { generateRandomStringId } from "../utils/randomId/randomId";
import { getAllBlogBySearchTextService, getAllBlogService, getAppliedJobService, getOneJobService, getBlogByAuthorService, patchAnsJobService, patchAppliedJobService, patchIsOpenJob1Service, patchIsOpenJob2Service, patchQuestionJobService, postBlogService, deleteBlogByid } from "../service/blogService";
import { AnsTypes, QuestionAnsTypes, getAllBlogBySearchTextTypes } from "interfaceServer/interfaceServer.ts";


// get all jobs 
export const getAllBlogController = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) => {
    try {
        // console.log("hitted. all jobs");
        const getJobData = await getAllBlogService(next)
        if (!getJobData) {
            return res.status(200).json({
                success: false,
                message: `Blog data not found.`,
            });
        } else {
            return res.status(200).json({
                success: true,
                message: "Successfully got all Blogs.",
                data: getJobData,
            });
        };
    } catch (error) {
        next(error);
    };
};

// get all jobs By Search Text
export const getAllBlogBySearchTextController = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) => {
    try {
        const searchData = req.body;

        const query: getAllBlogBySearchTextTypes = {};

        if (searchData?.title) {
            query.title = new RegExp(searchData.title, 'i');
        };

        // Find the MOST RECENT  
        if (searchData?.timestamp === "new") {
            const getRecentJobData = await getAllBlogBySearchTextService(next, query, -1)
            // const getRecentJobData = await JobModel.find(query).sort({ timestamp: -1 });
            if (getRecentJobData.length) {
                return res.status(200).json({
                    success: true,
                    message: "Successfully got all jobs.",
                    data: getRecentJobData,
                });
            }
        }
        // Find the OLDEST 
        if (searchData?.timestamp === "old") {
            const getOldestData = await getAllBlogBySearchTextService(next, query, 1)
            // const getOldestData = await   JobModel.find(query).sort({ timestamp: 1 });
            if (getOldestData.length) {
                return res.status(200).json({
                    success: true,
                    message: "Successfully got all jobs.",
                    data: getOldestData,
                });
            }
        }
        // no f0und anything;
        return res.status(200).json({
            success: false,
            message: `Job data not found.`,
        });
    } catch (error) {
        next(error);
    };
};

// get 1 job by id 
export const getOneJobController = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) => {
    try {
        const id = req.params?.id as string;
        if (!id) {
            return res.status(400).json({
                success: false,
                message: "id is missing in the request",
            });
        }
        else {
            const getJobData = await getOneJobService(next, id);
            if (!getJobData) {
                return res.status(200).json({
                    success: false,
                    message: `Job data not found for the id: ${id}`,
                });
            } else {
                return res.status(200).json({
                    success: true,
                    message: `Successfully found the job By id: ${id}`,
                    data: getJobData,
                });
            };
        };
    } catch (error) {
        next(error);
        console.error("Error fetching job data:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to fetch job data",
        });
    };
};

// post a job 
export const postBlogController = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) => {
    try {
        const handleBlogData = req.body;
        // console.log("handleBlogData", handleBlogData);
        // return
        if (!handleBlogData) {
            return res.status(400).json({
                success: false,
                message: "Body is empty",
            });
        }
        else {
            const createJobData = await postBlogService(next, handleBlogData);
            if (!createJobData) {
                return res.status(400).json({
                    success: false,
                    message: "Failed to save a blog data to the database",
                });
            } else {
                return res.status(201).json({
                    success: true,
                    data: createJobData,
                });
            };
        };
    } catch (error) {
        next(error);
    };
};

// edit job for applicant: APPLIED
export const patchAppliedJobController = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) => {
    try {
        const { jobId, userId, userEmail } = req.body;
        // console.log("jobId, userId, userEmail:", jobId, userId, userEmail);
        if (!jobId && !userId && !userEmail) {
            return res.status(400).json({
                success: false,
                message: "userId, jobId, userEmail is missing in the request",
            });
        }
        else {
            const patchJOb = await patchAppliedJobService(next, jobId, userId, userEmail)
            // const patchJOb = await JobModel.            findByIdAndUpdate(
            //     jobId,
            //     {
            //         $push: {
            //             applicants: {
            //                 userId,
            //                 userEmail,
            //             },
            //         },
            //     },
            //     {
            //         new: true,
            //     }
            // );
            if (!patchJOb) {
                return res.status(200).json({
                    success: false,
                    message: `Job data in not EDIT by the jobId: ${jobId}`,
                });
            } else {
                return res.status(200).json({
                    success: true,
                    message: `Successfully EDIT the job by the jobId: ${jobId}`,
                    data: patchJOb,
                });
            };
        };
    } catch (error) {
        next(error);
        console.error("Error fetching job data:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to PATCH job data",
        });
    };
};

// edit job for isOpen or closed
export const patchIsOpenJobController = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) => {
    try {
        const { jobId, isOpen, userId, userEmail } = req.body;

        if (!jobId || !userId || !userEmail) {
            return res.status(400).json({
                success: false,
                message: "userId, jobId, userEmail is missing in the request",
            });
        } else {
            // console.log("jobId isOpen userId userEmail:", jobId, userId, userEmail);
            const jobToUpdate = await patchIsOpenJob1Service(next, jobId, userEmail, isOpen)
            // const jobToUpdate = await JobModel.findOne({
            //     _id: jobId,
            //     email: userEmail,
            //     isOpen,
            // });

            if (!jobToUpdate) {
                return res.status(404).json({
                    success: false,
                    message: `Job not found with jobId: ${jobId}`,
                });
            }
            // if (isOpen === jobToUpdate.isOpen) {
            //     const updatedIsOpen = !jobToUpdate.isOpen;

            //     const patchJob = await patchIsOpenJob2Service(next, jobId, userEmail, updatedIsOpen)
            //     // const patchJob = await JobModel.findOneAndUpdate(
            //     //     {
            //     //         _id: jobId,
            //     //         email: userEmail,
            //     //     },
            //     //     {
            //     //         $set: {
            //     //             isOpen: updatedIsOpen,
            //     //         },
            //     //     },
            //     //     {
            //     //         new: true,
            //     //     }
            //     // );

            //     if (!patchJob) {
            //         return res.status(200).json({
            //             success: false,
            //             message: `Job data was not edited for jobId: ${jobId}`,
            //         });
            //     } else {
            //         return res.status(200).json({
            //             success: true,
            //             message: `Successfully edited the job for jobId: ${jobId}`,
            //             data: patchJob,
            //         });
            //     }
            // }
        }
    } catch (error) {
        next(error);
    };
};

// get applied-jobs by email 
export const getAppliedJobController = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) => {
    try {
        const email = req.params?.email as string;
        if (!email) {
            return res.status(400).json({
                success: false,
                message: "Email is missing in the request",
            });
        }
        else {
            // const query = { "applicants.userEmail": email }
            const getAppliedJobData = await getAppliedJobService(next, email)
            // const getAppliedJobData = await JobModel.find({ "applicants.userEmail": email })
            if (!getAppliedJobData) {
                return res.status(200).json({
                    success: false,
                    message: `Job data not found for the email: ${email}`,
                });
            } else {
                return res.status(200).json({
                    success: true,
                    message: `Successfully found the job By id: ${email}`,
                    data: getAppliedJobData,
                });
            };
        };
    } catch (error) {
        next(error);
    };
};

// get posted-jobs by email 
export const getBlogByAuthorController = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) => {
    try {
        const email = req.params?.email as string;
        console.log('email:', email);
        if (!email) {
            return res.status(400).json({
                success: false,
                message: "Email is missing in the request",
            });
        }
        else {
            const getPostedBlogData = await getBlogByAuthorService(next, email)
            if (!getPostedBlogData) {
                return res.status(200).json({
                    success: false,
                    message: `Blog data not found for the email: ${email}`,
                });
            } else {
                return res.status(200).json({
                    success: true,
                    message: `Successfully found the Blog By id: ${email}`,
                    data: getPostedBlogData,
                });
            };
        };
    } catch (error) {
        next(error);
    };
};
// get posted-jobs by email 
export const deleteBlogById = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) => {
    try {
        const _id = req.params?._id as string;

        if (!_id) {
            return res.status(400).json({
                success: false,
                message: "Id is missing in the request",
            });
        }
        else {
            const response = await deleteBlogByid(next, _id)
            if (!response) {
                return res.status(200).json({
                    success: false,
                    message: `Blog data not found for the id`,
                });
            } else {
                return res.status(200).json({
                    success: true,
                    message: `Successfully found the Blog and delete By id`,
                    data: response,
                });
            };
        };
    } catch (error) {
        next(error);
    };
};

// edit job for Question
export const patchQuestionJobController = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) => {
    try {
        const { jobId, userId, userEmail, question } = req.body;
        if (!jobId || !userId || !userEmail || !question) {
            return res.status(400).json({
                success: false,
                message: "jobId, userId, userEmail, and question are required in the request body",
            });
        }
        else {
            const questionAns: QuestionAnsTypes = {
                userId,
                userEmail,
                questionId: generateRandomStringId(24),
                question: {
                    time: new Date(),
                    questionString: question,
                },
            };
            // console.log("questionAns:", questionAns);
            const updateJobforQuestion = await patchQuestionJobService(next, jobId, questionAns);
            // const updateJobforQuestion = await JobModel.findByIdAndUpdate(
            //     jobId,
            //     {
            //         $push: {
            //             questionAns,
            //         },
            //     },
            //     {
            //         new: true,
            //     },
            // );
            if (!updateJobforQuestion) {
                return res.status(400).json({
                    success: false,
                    message: `Job with jobId: ${jobId} not found or not updated for question`,
                });
            }
            else {
                return res.status(200).json({
                    success: true,
                    message: `Successfully added question to job with jobId: ${jobId}`,
                    data: updateJobforQuestion,
                });
            };
        };
    } catch (error) {
        next(error);
    };
};

// edit job for Ans
export const patchAnsJobController = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) => {
    try {
        const { jobId, questionId, userEmail, riplay } = req.body;
        // console.log("jobId, questionId, userEmail, riplay :", jobId, questionId, userEmail, riplay);
        if (!jobId || !questionId || !userEmail || !riplay) {
            return res.status(400).json({
                success: false,
                message: "userId, jobId, userEmail is missing in the request",
            });
        }
        else {
            const ans: AnsTypes = {
                time: new Date(),
                ansString: riplay,
            };
            // console.log("ANS DATA:", ans, jobId, questionId, userEmail, riplay);
            const updateJObforAns = await patchAnsJobService(next, jobId, userEmail, questionId, ans)
            // const updateJObforAns = await JobModel.findOneAndUpdate(
            //     {
            //         _id: jobId,
            //         email: userEmail,
            //         "questionAns.questionId": questionId,
            //     },
            //     {
            //         $push: {
            //             "questionAns.$.ans": ans,
            //         }
            //     },
            //     {
            //         new: true,
            //     },
            // );
            if (!updateJObforAns) {
                return res.status(200).json({
                    success: false,
                    message: `Job data in not EDIT by the jobId: ${jobId}`,
                });
            } else {
                return res.status(200).json({
                    success: true,
                    message: `Successfully EDIT the job by the jobId: ${jobId}`,
                    data: updateJObforAns,
                });
            };
        };
    } catch (error) {
        next(error);
    };
};