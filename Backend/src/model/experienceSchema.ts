import { ExperienceDataTypes } from "interfaceServer/interfaceServer.ts";
import mongoose, { Schema } from "mongoose";

// Create a schema
const experienceSchema = new Schema<ExperienceDataTypes>(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    experience: [
      {
        title: {
          type: String,
          required: true,
        },
        jobLocationType: {
          type: String,
        },
        employmentType: {
          type: String,
        },
        companyName: {
          type: String,
          required: true,
        },
        companyLocation: {
          type: String,
        },
        currentlyWork: {
          type: Boolean,
          required: true,
        },
        startDate: {
          type: String,
          required: true,
        },
        endDate: {
          type: String,

        },
        industry: {
          type: String,
          required: true,
        },
        description: {
          type: String,
        },
        skillsArray: {
          type: [String],
          required: true,
        },
      }
    ],
  },
  {
    timestamps: true,
  }
);

// Create a model
export const ExperienceModel = mongoose.model("Experience", experienceSchema);
