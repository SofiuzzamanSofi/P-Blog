import axios from "axios";

export const getData = async (_id: string) => {
    try {
        const userData = await axios.patch(
            `${process.env.NEXT_PUBLIC_SERVER}/user/by-id`,
            { _id },
        );

        if (userData?.data?.success) {

            const user = userData?.data?.data;
            let blog;
            let experience;

            try {
                const response = await axios.get(
                    `${process.env.NEXT_PUBLIC_SERVER}/blog-by-author/${userData?.data?.data?.email}`,
                );
                if (response?.data?.success) {
                    blog = response?.data?.data;
                }
            }
            catch (error) {
            };

            try {
                const experienceData = await axios.patch(
                    `${process.env.NEXT_PUBLIC_SERVER}/user/user-experiences`,
                    { _id },
                );
                if (userData?.data?.success) {
                    experience = experienceData?.data?.data;
                }
            } catch (error) {

            };

            return {
                user,
                blog,
                experience
            };
        };
    } catch (error) {
    };
};