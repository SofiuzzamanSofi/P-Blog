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
  heading: {
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
  gender: {
    type: "string",
    required: false,
  },
  about: {
    type: "string",
    required: false,
  },
  othersCuriculam: {
    type: "string",
    required: false,
  },

  // links
  whatsapp: { type: String },
  website: { type: String },
  github: { type: String },
  linkedin: { type: String },
  youtube: { type: String },
  facebook: { type: String },
  twitter: { type: String },
  instagram: { type: String },

  // physical
  bodyType: { type: String },
  hair_color: { type: String },
  eye_color: { type: String },
  piercings: { type: String },
  tattoos: { type: String },
  height: { type: String },

  // life style
  drinking: { type: String },
  yearly_income: { type: String },
  smoking: { type: String },
  net_worth: { type: String },
  education: { type: String },

  // donate payment
  donateDetails: {
    totalSendAmount: { type: Number, default: 0 },
    totalReceiveAmount: { type: Number, default: 0 },
    senders: [
      {
        userId: { type: String },
        useremail: { type: String },
        firstName: { type: String },
        lastName: { type: String },
        email: { type: String },
        country: { type: String },
        postalCode: { type: String },
        amount: { type: Number },
        transactionId: { type: String },
        time: { type: Date, default: Date.now }
      }
    ],
    receivers: [
      {
        userId: { type: String },
        useremail: { type: String },
        firstName: { type: String },
        lastName: { type: String },
        email: { type: String },
        country: { type: String },
        postalCode: { type: String },
        amount: { type: Number },
        transactionId: { type: String },
        time: { type: Date, default: Date.now }
      }
    ],
  },


  role: {
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