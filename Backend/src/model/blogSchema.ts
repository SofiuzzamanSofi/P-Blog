import { JobDataTypes } from "../interfaceServer/interfaceServer.ts.js";
import mongoose from "mongoose";

//create a schema
const blogSchema = new mongoose.Schema<JobDataTypes>({
    email: {
        type: "string",
        required: false,
    },
    photoURLs: {
        type: ["string"],
        required: false,
    },
    title: {
        type: "string",
        required: false,
    },
    details: {
        type: "string",
        required: false,
    },

    tags: {
        type: ["string"],
        required: false,
    },
    // applicants: {
    //     type: [mongoose.Schema.Types.Mixed],
    //     required: false,
    // },
    applicants: [
        {
            userId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
                required: false,
            },
            userEmail: {
                type: "string",
                required: false,
            },
        }
    ],
    // questionAns: {
    //     type: [mongoose.Schema.Types.Mixed],
    //     required: false,
    // },
    questionAns: [
        {
            userId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
                require: false,
            },
            userEmail: {
                type: "string",
                require: false,
            },
            questionId: {
                type: "string",
                require: false,
            },
            question: {
                time: {
                    type: Date,
                    default: new Date(),
                    required: false,
                },
                questionString: {
                    type: "string",
                    required: false,
                },
            },
            ans: [
                {
                    time: {
                        type: Date,
                        default: new Date(),
                        required: false,
                    },
                    ansString: {
                        type: "string",
                        required: false,
                    },
                }
            ]
        }
    ],
    timestamp: {
        type: Date,
        default: Date.now,
    }
},
    {
        timestamps: true, // for time save by default
    }
);

// Create a modal
export const BlogModel = mongoose.model("Blog", blogSchema);