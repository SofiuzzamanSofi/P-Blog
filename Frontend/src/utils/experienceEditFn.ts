import { ExperienceDataTypes } from "@/typesInterface/types";
import axios from "axios";

export const experienceEditFn = async (data: ExperienceDataTypes) => {
    try {
        const res = await axios.patch(
            `${process.env.NEXT_PUBLIC_SERVER}/user/update-user/experience`,
            data,
        );
        if (res?.data?.success) {
            return true;
        }
        else {
            return false
        }
    }
    catch (error) {
    };
};