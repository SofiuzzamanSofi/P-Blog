import express from "express";
import {
    getMe, signInWithSocial, profilePicChange, updateProfile, getUserById, updateProfileExperience
} from "../../controller/userController";

export default (router: express.Router) => {

    router.post("/user/me", getMe);

    router.patch("/user/by-id", getUserById);

    router.post("/user/signin-social-media", signInWithSocial); // sign GOOGLE FACEBOOK 

    router.put("/user/profile-pic-change", profilePicChange);

    router.patch("/user/update-user/experience", updateProfileExperience);

    router.put("/user/update-user/:email", updateProfile);

};