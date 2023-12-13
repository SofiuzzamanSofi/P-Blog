import express from "express";
import { createUserService, getUserByEmail, getUserByIdService, profilePicChangeService, updateProfileService, updateUserByEmail } from "../service/userService";
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

// edit user with  role and other info
export const updateUserWithRole = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) => {
    try {
        const handleUserData = req.body;
        // console.log("hit- updateUserWithRole:");
        if (!handleUserData) {
            return res.status(400).json({
                success: false,
                message: "Body is empty line 12",
            });
        };
        const user = await updateUserByEmail(next, handleUserData);
        if (!user) {
            return res.status(400).json({
                success: false,
                message: `Function called but User not set on Db `,
            });
        } else {
            return res.status(201).json({
                success: true,
                data: user,
            });
        }
    } catch (error) {
        next(error);
    };
};

// get a user by email 
export const getUserByEmailController = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) => {
    try {
        const email = req.params?.email as string;
        //  console.log("hit- getUserByEmailController:");
        if (!email) {
            return res.status(400).json({
                success: false,
                message: "Body is empty line 12",
            });
        };
        const user = await getUserByEmail(next, email);
        if (!user) {
            return res.status(201).json({
                success: false,
                message: `Function called but no user data foundby the email: ${email}`,
                data: { email, }
            });
        } else {
            return res.status(201).send({
                success: true,
                message: `Successfully got data by this: ${email}`,
                data: user,
            })
        };
    } catch (error) {
        next(error);
    };
};