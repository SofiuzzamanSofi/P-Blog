import express from "express";
import mongoose from "mongoose";
import { ExperienceModel } from "../model/experienceSchema";

type NextFunction = express.NextFunction;
type ObjectId = mongoose.Schema.Types.ObjectId;

// edit added 
export const experienceServiceEdit = async (
    next: NextFunction,
    reqData: any,
) => {
    try {
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
        next(error);
    };
};

// create first time
export const experienceServiceCreate = async (
    next: NextFunction,
    reqData: any,
) => {
    try {
        const updateUserExperience = await new ExperienceModel(reqData).save();
        return updateUserExperience;
    } catch (error) {
        next(error);
    };
};


export const getUserExperienceByIdService = async (
    next: NextFunction,
    _id: string,
) => {
    try {
        // console.log('_idfrom service:', _id);
        const updateUserExperience = await ExperienceModel.findById(_id);
        // console.log('experiences-updateUserExperience:', updateUserExperience);
        return updateUserExperience;
    } catch (error) {
        next(error);
    }
};


//delete
//
export const getOneExperienceByIdService = async (
    next: NextFunction,
    userId: string,
    _id: string,
) => {
    try {
        const result = await ExperienceModel.findOneAndUpdate(
            { _id: userId },
            { $pull: { experience: { _id } } }
        );
        console.log('result:', result);
        return result;
    } catch (error) {
        next(error);
    };
};