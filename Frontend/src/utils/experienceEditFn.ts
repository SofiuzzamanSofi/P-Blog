import { ExperienceDataForResponseTypes } from "@/typesInterface/types";
import axios from "axios";

export const experienceEditFn = async (data: ExperienceDataForResponseTypes) => {
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

//
export const experienceDelFn = async (_id: string) => {
    console.log('_id:', _id);
    try {
        const res = await axios.delete(
            `${process.env.NEXT_PUBLIC_SERVER}/user/user-experiences/delete/${_id}`,
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

//
export const experienceGetFn = async (_id: string) => {
    console.log('_id:', _id);
    try {
        const experienceData = await axios.patch(
            `${process.env.NEXT_PUBLIC_SERVER}/user/user-experiences`,
            { _id },
        );
        return experienceData?.data;
    }
    catch (error) {
    };
};