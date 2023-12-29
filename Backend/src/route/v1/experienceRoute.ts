import { deleteExperienceById, getUserExperienceById, updateProfileExperience } from "../../controller/experienceController";
import express from "express";

export default (router: express.Router) => {

    router.patch("/user/update-user/experience", updateProfileExperience);

    router.patch("/user/user-experiences", getUserExperienceById); //get 

    router.delete("/user/user-experiences/delete/:userId/:_id", deleteExperienceById); // delete posted-job by email 

};