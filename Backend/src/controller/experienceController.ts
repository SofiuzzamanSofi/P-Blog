import express from "express";
import { experienceServiceCreate, experienceServiceEdit, getOneExperienceByIdService, getUserExperienceByIdService } from "../service/experienceService";

// 
export const updateProfileExperience = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) => {
    try {
        const reqData = req.body;
        // const _id = reqData._id;
        // const email = reqData.email
        if (!reqData) {
            return res.status(400).json({
                success: false,
                message: "Missing Information.",
            });
        };
        // delete reqData.email;
        // delete reqData._id;

        const experienceData = await experienceServiceEdit(next, reqData);
        // console.log('experienceData:', experienceData);

        if (experienceData.modifiedCount) {
            return res.status(200).json({
                success: true,
                message: "Update Success", // Update Every Time 
            });

        } else {
            console.log('non modify:');
            const experienceDataCreate = await experienceServiceCreate(next, reqData);
            // console.log('experienceDataCreate:', experienceDataCreate);
            if (experienceDataCreate) {
                return res.status(200).json({
                    success: true,
                    message: "Create Success", // Create First Time
                    data: experienceDataCreate,
                });
            } else {
                return res.status(401).json({
                    success: false,
                    message: "Update Create Failed", // Update Create all failed
                });
            }
        }
    } catch (error) {
        next(error);
    };
};

//
// get user by id
export const getUserExperienceById = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) => {
    try {
        const { _id } = req.body
        if (!_id) {
            return res.status(201).json({
                success: false,
                message: `Id not found`,
            });
        };
        const userExperiences = await getUserExperienceByIdService(next, _id);
        if (!userExperiences?.experience?.length) {
            return res.status(201).json({
                success: false,
                message: `userExperiences Not Found`,
            });
        } else {
            return res.status(200).json({
                success: true,
                message: `Successfully got data by this id.`,
                data: userExperiences,
            })
        };
    } catch (error) {
        next(error);
    };
};

//delte 
export const deleteExperienceById = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) => {
    try {
        const userId = req.params?.userId as string;
        const _id = req.params?._id as string;

        if (!userId || !_id) {
            return res.status(400).json({
                success: false,
                message: "Id is missing in the request",
            });
        }
        else {
            const response = await getOneExperienceByIdService(next, userId, _id)
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
