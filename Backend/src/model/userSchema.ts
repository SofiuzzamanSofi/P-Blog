import { UserDataTypes } from "../interfaceServer/interfaceServer.ts.js";
import mongoose from "mongoose";

//create a schema
const userSchema = new mongoose.Schema<UserDataTypes>({
  email: {
    type: "string",
    required: true,
    unique: true,
  },
  displayName: {
    type: "string",
    required: false,
  },
  emailVerified: {
    type: "boolean",
    required: true,
  },
  photoURL: {
    type: "string",
    required: false,
  },
  location: {
    type: "string",
    required: false,
  },


  role: {
    type: "string",
    required: false,
  },
  gender: {
    type: "string",
    required: false,
  },
  country: {
    type: "string",
    required: false,
  },
  address: {
    type: "string",
    required: false,
  },
  city: {
    type: "string",
    required: false,
  },
  postcode: {
    type: "string",
    required: false,
  },
  companyName: {
    type: "string",
    required: false,
  },
  companyCategory: {
    type: "string",
    required: false,
  },
  employeeRange: {
    type: "string",
    required: false,
  },
  roleInCompany: {
    type: "string",
    required: false,
  },
  term: {
    type: Boolean,
    required: false,
  },
},
  {
    timestamps: true, // for time save by default
  }
);

// Create a modal
export const UserModel = mongoose.model("User", userSchema);