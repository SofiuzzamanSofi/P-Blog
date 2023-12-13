import express from "express";
import mongoose from "mongoose";
import { UserDataTypes } from "../interfaceServer/interfaceServer.ts";
import { UserModel } from "../model/userSchema";

type NextFunction = express.NextFunction;
type ObjectId = mongoose.Schema.Types.ObjectId;

//
export const getUserByEmail = async (
    next: NextFunction,
    email: string,
) => {
    try {
        const user = await UserModel.findOne({ email });
        return user;
    } catch (error) {
        next(error);
    };
};

//
export const createUserService = async (
    next: NextFunction,
    handleUserData: UserDataTypes
) => {
    try {
        const user = await new UserModel(handleUserData).save();
        return user;
    } catch (error) {
        next(error);
    };
};

//
export const profilePicChangeService = async (
    next: NextFunction,
    photoURL: string,
    email: string,
) => {
    try {
        const updateUser = await UserModel.updateOne(
            { email: email },
            {
                $set: {
                    photoURL: photoURL,
                },
            },
            { runValidators: true }
        );
        return updateUser;
    } catch (error) {
        next(error);
    };
};

//
export const updateProfileService = async (
    next: NextFunction,
    userDetails: any,
    email: string,
) => {
    try {
        const updateUser = await UserModel.updateOne(
            { email: email },
            { $set: userDetails },
            { runValidators: true }
        );
        return updateUser;
    } catch (error) {
        next(error);
    };
};





















//
export const updateUserByEmail = async (
    next: NextFunction,
    handleUserData: UserDataTypes
) => {
    try {
        const user = await UserModel.findOneAndUpdate(
            { email: handleUserData.email },
            { $set: handleUserData },
            { runValidators: true, new: true },
        );
        // console.log('user on update service:', user);
        return user;
    } catch (error) {
        next(error);
    };
};

// get user by id
export const getUserByIdService = async (
    next: NextFunction,
    id: ObjectId | string,
) => {
    try {
        const user = await UserModel.findById(id);
        return user;
    } catch (error) {
        next(error);
    };
};