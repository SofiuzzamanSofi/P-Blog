import { getMe, getUserByEmailController, updateUserWithRole, signInWithSocial, profilePicChange, updateProfile } from "../../controller/userController";
import express from "express";

export default (router: express.Router) => {

    router.post("/user/me", getMe);

    router.post("/user/signin-social-media", signInWithSocial); // sign GOOGLE FACEBOOK 

    router.put("/user/profile-pic-change", profilePicChange);

    router.put("/user/register/putNew/:email", updateProfile);


    router.put("/user/registration", updateUserWithRole); // // edit user with  role and other info

    // router.get("/user/applicant/:email", verifyToken, authorization("Candidate", "Employer"), getUserByEmailController); // get a APPLICANT/user by email
    router.get("/user/applicant/:email", getUserByEmailController); // get a APPLICANT/user by email

};