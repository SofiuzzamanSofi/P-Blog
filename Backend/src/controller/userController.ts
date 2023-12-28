import express from "express";
import { createUserService, experienceServiceCreate, experienceServiceEdit, getUserByEmail, getUserByIdService, profilePicChangeService, updateProfileService } from "../service/userService";
import { generateToken } from "../utils/token/generateToken";

// get user first time open on browser
export const getMe = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) => {
    try {
        const email = req.body?.email; // Access the user object from req
        const user = await getUserByEmail(next, email);
        if (!user.email) {
            return res.status(201).json({
                success: false,
                message: `Function called but no user data foundby the email: ${email}`,
                data: { email, }
            });
        } else {
            const { createdAt, updatedAt, __v, ...others } = user.toObject();
            return res.status(200).json({
                success: true,
                message: `Successfully got data by this: ${email}`,
                data: user,
            })
        };
    } catch (error) {
        next(error);
    };
};

// get user by id
export const getUserById = async (
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
        const user = await getUserByIdService(next, _id);
        if (!user.email) {
            return res.status(201).json({
                success: false,
                message: `User not found by id`,
            });
        } else {
            const { createdAt, updatedAt, __v, ...others } = user.toObject();
            return res.status(200).json({
                success: true,
                message: `Successfully got data by this id.`,
                data: user,
            })
        };
    } catch (error) {
        next(error);
    };
};

// signIn social
export const signInWithSocial = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) => {
    try {
        const handleUserData = req.body;
        // console.log("hit- signInWithSocial:");
        if (!handleUserData) {
            return res.status(400).json({
                success: false,
                message: "Missing Information.",
            });
        };
        const user = await getUserByEmail(next, handleUserData.email);
        if (user) {
            return res.status(201).json({
                success: true,
                data: user,
            });
        } else {
            const userCreate = await createUserService(next, handleUserData);
            return res.status(400).json({
                success: true,
                data: userCreate,
            });
        }
    } catch (error) {
        next(error);
    };
};

// 
export const profilePicChange = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) => {
    try {
        const { photoURL, email } = req.body;
        if (!photoURL || !email) {
            return res.status(400).json({
                success: false,
                message: "Missing Information.",
            });
        };
        const user = await profilePicChangeService(next, photoURL, email);
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "pic update failed",
            });
        } else {
            return res.status(201).json({
                success: true,
                message: "User updated successfully",
                data: user,
            });
        }
    } catch (error) {
        next(error);
    };
};

// 
export const updateProfile = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) => {
    try {
        const email = req.params.email;
        const userDetails = req.body;
        if (!userDetails || !email) {
            return res.status(400).json({
                success: false,
                message: "Missing Information.",
            });
        };
        const user = await updateProfileService(next, userDetails, email);
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "pic update failed",
            });
        } else {
            return res.status(201).json({
                success: true,
                message: "User updated successfully",
                data: user,
            });
        }
    } catch (error) {
        next(error);
    };
};

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
        console.log('experienceData:', experienceData);

        if (experienceData.modifiedCount) {
            return res.status(200).json({
                success: true,
                message: "Update Success", // Update Every Time 
            });

        } else {
            console.log('non modify:');
            const experienceDataCreate = await experienceServiceCreate(next, reqData);
            console.log('experienceDataCreate:', experienceDataCreate);
            if (experienceDataCreate) {
                return res.status(404).json({
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