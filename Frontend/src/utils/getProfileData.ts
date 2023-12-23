import axios from "axios";

export const getData = async (_id: string) => {
    try {
        const userData = await axios.patch(
            `${process.env.NEXT_PUBLIC_SERVER}/user/by-id`,
            { _id },
        );

        if (userData?.data?.success) {
            try {
                const response = await axios.get(
                    `${process.env.NEXT_PUBLIC_SERVER}/blog-by-author/${userData?.data?.data?.email}`,
                );

                // return
                if (response?.data?.success) {
                    return { user: userData?.data?.data, blog: response?.data?.data };
                }
                else {
                    return { user: userData?.data?.data };
                };
            }
            catch (error) {
            };
        };
    } catch (error) {
    };
};