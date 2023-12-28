import { updateProfileExperience } from "../../controller/experienceController";
import express from "express";

export default (router: express.Router) => {

    router.patch("/user/update-user/experience", updateProfileExperience);

};