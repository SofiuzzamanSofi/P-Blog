import express from "express";
import mongoose from "mongoose";
import { ExperienceModel } from "../model/experienceSchema";

type NextFunction = express.NextFunction;
type ObjectId = mongoose.Schema.Types.ObjectId;

//
export const experienceServiceEdit = async (
    next: NextFunction,
    reqData: any,
) => {
    try {
        console.log('reqData:', reqData);
        const updateUserExperience = await ExperienceModel.updateOne(
            { _id: reqData._id },
            {
                $push: {
                    experience: reqData.experience,
                },
            },
            { runValidators: true }
        );
        return updateUserExperience;
    } catch (error) {
        console.error('Error during experienceServiceEdit:', error);
        next(error);
    };
};

//
export const experienceServiceCreate = async (
    next: NextFunction,
    reqData: any,
) => {
    try {
        const updateUserExperience = await new ExperienceModel(reqData).save();
        return updateUserExperience;
    } catch (error) {
        console.log('error:', error);
        next(error);
    };
};

//
export const getUserExperienceByIdService = async (
    next: NextFunction,
    _id: ObjectId | string,
) => {
    try {
        const updateUserExperience = await ExperienceModel.findById(_id);;
        return updateUserExperience;
    } catch (error) {
        console.log('error:', error);
        next(error);
    };
};