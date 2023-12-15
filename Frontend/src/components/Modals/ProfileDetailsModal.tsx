"use client";

import { useState } from "react";
import useProfileDetailsModal from "../Hooks/useProfileDetailsModal";
import ProfileModal from "./ProfileModal";
import Modal from "./Modall";
import { BiSearch } from "react-icons/bi";
import { useAuth } from "@/provider/AuthProvider";

const ProfileDetailsModal = ({ getValueType }: any) => {

  // authh 
  const { user, setUserReload } = useAuth();
  const email = user?.email;

  const profileDetailsModal = useProfileDetailsModal();
  const [inputFieldsValue, setInputFieldsValue] = useState<string>("");
  const [taglineValue, setTaglineValue] = useState<string>("");
  const [locationValue, setLocationValue] = useState<string>("");

  const [link, setLink] = useState<string>("");

  // link saved on database
  const handleLinkChange = async () => {

    let values;
    if (getValueType === "whatsapp") {
      values = {
        whatsapp: link,
      };
    }
    else if (getValueType === "website") {
      values = {
        website: link,
      };
    }
    else if (getValueType === "github") {
      values = {
        github: link,
      };
    }
    else if (getValueType === "linkedin") {
      values = {
        linkedin: link,
      };
    }
    else if (getValueType === "youtube") {
      values = {
        youtube: link,
      };
    }
    else if (getValueType === "facebook") {
      values = {
        facebook: link,
      };
    }
    else if (getValueType === "twitter") {
      values = {
        twitter: link,
      };
    }
    else if (getValueType === "instagram") {
      values = {
        instagram: link,
      };
    }
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER}/user/update-user/${email}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(values),
      }
    );
    const result = await res.json();
    if (result.message === "User updated successfully") {
      setUserReload((prev) => !prev);
      setLink("");
      profileDetailsModal.onClose();
    }
  };

  const handleBodyTypeClick = async (e: React.MouseEvent<HTMLLIElement>) => {
    if (e.currentTarget.textContent) {
      const values = {
        bodyType: e.currentTarget.textContent,
      };
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER}/user/update-user/${email}`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );
      const result = await res.json();
      if (result.message === "User updated successfully") {
        profileDetailsModal.onClose();
        setUserReload((prev) => !prev);
      }
    }
  };

  const handleHairColorClick = async (e: React.MouseEvent<HTMLLIElement>) => {
    if (e.currentTarget.textContent) {
      const values = {
        hair_color: e.currentTarget.textContent,
      };
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER}/user/update-user/${email}`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );
      const result = await res.json();
      if (result.message === "User updated successfully") {
        setUserReload((prev) => !prev);
        profileDetailsModal.onClose();
      }
    }
  };

  const handleEyeColorClick = async (e: React.MouseEvent<HTMLLIElement>) => {
    if (e.currentTarget.textContent) {
      const values = {
        eye_color: e.currentTarget.textContent,
      };
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER}/user/update-user/${email}`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );
      const result = await res.json();
      if (result.message === "User updated successfully") {
        setUserReload((prev) => !prev);
        profileDetailsModal.onClose();
      }
    }
  };

  const handlePiercingsClick = async (e: React.MouseEvent<HTMLLIElement>) => {
    if (e.currentTarget.textContent) {
      const values = {
        piercings: e.currentTarget.textContent,
      };
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER}/user/update-user/${email}`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );
      const result = await res.json();
      if (result.message === "User updated successfully") {
        setUserReload((prev) => !prev);
        profileDetailsModal.onClose();
      }
    }
  };

  const handleTattoosClick = async (e: React.MouseEvent<HTMLLIElement>) => {
    if (e.currentTarget.textContent) {
      const values = {
        tattoos: e.currentTarget.textContent,
      };
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER}/user/update-user/${email}`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );
      const result = await res.json();
      if (result.message === "User updated successfully") {
        setUserReload((prev) => !prev);
        profileDetailsModal.onClose();
      }
    }
  };

  const handleDrinkingClick = async (e: React.MouseEvent<HTMLLIElement>) => {
    if (e.currentTarget.textContent) {
      const values = {
        drinking: e.currentTarget.textContent,
      };
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER}/user/update-user/${email}`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );
      const result = await res.json();
      if (result.message === "User updated successfully") {
        setUserReload((prev) => !prev);
        profileDetailsModal.onClose();
      }
    }
  };

  const handleSmokingClick = async (e: React.MouseEvent<HTMLLIElement>) => {
    if (e.currentTarget.textContent) {
      const values = {
        smoking: e.currentTarget.textContent,
      };
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER}/user/update-user/${email}`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );
      const result = await res.json();
      if (result.message === "User updated successfully") {
        setUserReload((prev) => !prev);
        profileDetailsModal.onClose();
      }
    }
  };

  const handleYearlyIncomeClick = async (
    e: React.MouseEvent<HTMLLIElement>
  ) => {
    if (e.currentTarget.textContent) {
      const values = {
        yearly_income: e.currentTarget.textContent,
      };
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER}/user/update-user/${email}`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );
      const result = await res.json();
      if (result.message === "User updated successfully") {
        setUserReload((prev) => !prev);
        profileDetailsModal.onClose();
      }
    }
  };

  const handleNetWorthClick = async (e: React.MouseEvent<HTMLLIElement>) => {
    if (e.currentTarget.textContent) {
      const values = {
        net_worth: e.currentTarget.textContent,
      };
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER}/user/update-user/${email}`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );
      const result = await res.json();
      if (result.message === "User updated successfully") {
        setUserReload((prev) => !prev);
        profileDetailsModal.onClose();
      }
    }
  };

  const handleEducationClick = async (e: React.MouseEvent<HTMLLIElement>) => {
    if (e.currentTarget.textContent) {
      const values = {
        education: e.currentTarget.textContent,
      };
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER}/user/update-user/${email}`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );
      const result = await res.json();
      if (result.message === "User updated successfully") {
        setUserReload((prev) => !prev);
        profileDetailsModal.onClose();
      }
    }
  };

  const handleOfferFieldsValue = async () => {
    const values = {
      about: inputFieldsValue,
    };
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER}/user/update-user/${email}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(values),
      }
    );
    const result = await res.json();

    if (result.message === "User updated successfully") {
      setUserReload((prev) => !prev);
      profileDetailsModal.onClose();
      setInputFieldsValue("");
    }
  };

  const handleOthersCuriculamValue = async () => {
    const values = {
      othersCuriculam: taglineValue,
    };
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER}/user/update-user/${email}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(values),
      }
    );
    const result = await res.json();
    if (result.message === "User updated successfully") {
      setUserReload((prev) => !prev);
      profileDetailsModal.onClose();

      setTaglineValue("");
    }
  };

  const handleLocationFieldsValue = async () => {
    const values = {
      location: locationValue,
    };
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER}/user/update-user/${email}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(values),
      }
    );
    const result = await res.json();
    if (result.message === "User updated successfully") {
      setUserReload((prev) => !prev);
      profileDetailsModal.onClose();
      setTaglineValue("");
    }
    // if (result.message === "User updated successfully" && !user?.location) {
    //   profileDetailsModal.onClose();
    //   setUserReload((prev) => !prev);
    //   
    // }
  };

  const handleGenderClick = async (e: React.MouseEvent<HTMLLIElement>) => {
    if (e.currentTarget.textContent) {
      const values = {
        gender: e.currentTarget.textContent,
      };
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER}/user/update-user/${email}`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );
      const result = await res.json();
      if (result.message === "User updated successfully") {
        profileDetailsModal.onClose();
        setUserReload((prev) => !prev);
      }
      // if (result.message === "User updated successfully" && !user?.gender) {
      //   profileDetailsModal.onClose();
      //   setUserReload((prev) => !prev);
      //   
      // }
    }
  };

  // content
  let bodyContent;
  if (getValueType === "Body Type") {
    bodyContent = (
      <div className="max-h-[70vh] overflow-y-auto text-black">
        <h1 className="text-2xl font-medium text-center py-6">
          What is your body type?
        </h1>
        <ul>
          <li
            onClick={handleBodyTypeClick}
            className={
              user?.bodyType === "Slim"
                ? "text-center py-4 my-3 text-xl cursor-pointer rounded-full border bg-gray-700 text-white"
                : "text-center py-4 my-3 text-xl cursor-pointer rounded-full border"
            }
          >
            Slim
          </li>
          <li
            onClick={handleBodyTypeClick}
            className={
              user?.bodyType === "Fit"
                ? "text-center py-4 my-3 text-xl cursor-pointer rounded-full border bg-gray-700 text-white"
                : "text-center py-4 my-3 text-xl cursor-pointer rounded-full border"
            }
          >
            Fit
          </li>
          <li
            onClick={handleBodyTypeClick}
            className={
              user?.bodyType === "Muscular"
                ? "text-center py-4 my-3 text-xl cursor-pointer rounded-full border bg-gray-700 text-white"
                : "text-center py-4 my-3 text-xl cursor-pointer rounded-full border"
            }
          >
            Muscular
          </li>
          <li
            onClick={handleBodyTypeClick}
            className={
              user?.bodyType === "Average"
                ? "text-center py-4 my-3 text-xl cursor-pointer rounded-full border bg-gray-700 text-white"
                : "text-center py-4 my-3 text-xl cursor-pointer rounded-full border"
            }
          >
            Average
          </li>
          <li
            onClick={handleBodyTypeClick}
            className={
              user?.bodyType === "Curvy"
                ? "text-center py-4 my-3 text-xl cursor-pointer rounded-full border bg-gray-700 text-white"
                : "text-center py-4 my-3 text-xl cursor-pointer rounded-full border"
            }
          >
            Curvy
          </li>
          <li
            onClick={handleBodyTypeClick}
            className={
              user?.bodyType === "A few extra pounds"
                ? "text-center py-4 my-3 text-xl cursor-pointer rounded-full border bg-gray-700 text-white"
                : "text-center py-4 my-3 text-xl cursor-pointer rounded-full border"
            }
          >
            A few extra pounds
          </li>
          <li
            onClick={handleBodyTypeClick}
            className={
              user?.bodyType === "Full figured"
                ? "text-center py-4 my-3 text-xl cursor-pointer rounded-full border bg-gray-700 text-white"
                : "text-center py-4 my-3 text-xl cursor-pointer rounded-full border"
            }
          >
            Full figured
          </li>
          <li
            onClick={profileDetailsModal.onClose}
            className="text-center py-4 my-3 text-xl cursor-pointer rounded-full border"
          >
            Skip
          </li>
        </ul>
      </div>
    );
  }
  if (getValueType === "Hair Color") {
    bodyContent = (
      <div className="max-h-[70vh] overflow-y-auto text-black">
        <h1 className="text-2xl font-medium text-center py-6">
          What’s your hair color?
        </h1>
        <ul>
          <li
            onClick={handleHairColorClick}
            className={
              user?.hair_color === "Black"
                ? "text-center py-4 my-3 text-xl cursor-pointer rounded-full border bg-gray-700 text-white"
                : "text-center py-4 my-3 text-xl cursor-pointer rounded-full border"
            }
          >
            Black
          </li>
          <li
            onClick={handleHairColorClick}
            className={
              user?.hair_color === "Blonde"
                ? "text-center py-4 my-3 text-xl cursor-pointer rounded-full border bg-gray-700 text-white"
                : "text-center py-4 my-3 text-xl cursor-pointer rounded-full border"
            }
          >
            Blonde
          </li>
          <li
            onClick={handleHairColorClick}
            className={
              user?.hair_color === "Light Brown"
                ? "text-center py-4 my-3 text-xl cursor-pointer rounded-full border bg-gray-700 text-white"
                : "text-center py-4 my-3 text-xl cursor-pointer rounded-full border"
            }
          >
            Light Brown
          </li>
          <li
            onClick={handleHairColorClick}
            className={
              user?.hair_color === "Dark Brown"
                ? "text-center py-4 my-3 text-xl cursor-pointer rounded-full border bg-gray-700 text-white"
                : "text-center py-4 my-3 text-xl cursor-pointer rounded-full border"
            }
          >
            Dark Brown
          </li>
          <li
            onClick={handleHairColorClick}
            className={
              user?.hair_color === "Red"
                ? "text-center py-4 my-3 text-xl cursor-pointer rounded-full border bg-gray-700 text-white"
                : "text-center py-4 my-3 text-xl cursor-pointer rounded-full border"
            }
          >
            Red
          </li>
          <li
            onClick={handleHairColorClick}
            className={
              user?.hair_color === "Other"
                ? "text-center py-4 my-3 text-xl cursor-pointer rounded-full border bg-gray-700 text-white"
                : "text-center py-4 my-3 text-xl cursor-pointer rounded-full border"
            }
          >
            Other
          </li>
          <li
            onClick={profileDetailsModal.onClose}
            className="text-center py-4 my-3 text-xl cursor-pointer rounded-full border"
          >
            Skip
          </li>
        </ul>
      </div>
    );
  }
  if (getValueType === "Eye Color") {
    bodyContent = (
      <div className="max-h-[70vh] overflow-y-auto text-black">
        <h1 className="text-2xl font-medium text-center py-6">
          What’s your eye color?
        </h1>
        <ul>
          <li
            onClick={handleEyeColorClick}
            className={
              user?.eye_color === "Black"
                ? "text-center py-4 my-3 text-xl cursor-pointer rounded-full border bg-gray-700 text-white"
                : "text-center py-4 my-3 text-xl cursor-pointer rounded-full border"
            }
          >
            Black
          </li>
          <li
            onClick={handleEyeColorClick}
            className={
              user?.eye_color === "Blue"
                ? "text-center py-4 my-3 text-xl cursor-pointer rounded-full border bg-gray-700 text-white"
                : "text-center py-4 my-3 text-xl cursor-pointer rounded-full border"
            }
          >
            Blue
          </li>
          <li
            onClick={handleEyeColorClick}
            className={
              user?.eye_color === "Brown"
                ? "text-center py-4 my-3 text-xl cursor-pointer rounded-full border bg-gray-700 text-white"
                : "text-center py-4 my-3 text-xl cursor-pointer rounded-full border"
            }
          >
            Brown
          </li>
          <li
            onClick={handleEyeColorClick}
            className={
              user?.eye_color === "Gray"
                ? "text-center py-4 my-3 text-xl cursor-pointer rounded-full border bg-gray-700 text-white"
                : "text-center py-4 my-3 text-xl cursor-pointer rounded-full border"
            }
          >
            {" "}
            Gray
          </li>
          <li
            onClick={handleEyeColorClick}
            className={
              user?.eye_color === "Green"
                ? "text-center py-4 my-3 text-xl cursor-pointer rounded-full border bg-gray-700 text-white"
                : "text-center py-4 my-3 text-xl cursor-pointer rounded-full border"
            }
          >
            Green
          </li>
          <li
            onClick={handleEyeColorClick}
            className={
              user?.eye_color === "Hazel"
                ? "text-center py-4 my-3 text-xl cursor-pointer rounded-full border bg-gray-700 text-white"
                : "text-center py-4 my-3 text-xl cursor-pointer rounded-full border"
            }
          >
            Hazel
          </li>
          <li
            onClick={handleEyeColorClick}
            className={
              user?.eye_color === "Other"
                ? "text-center py-4 my-3 text-xl cursor-pointer rounded-full border bg-gray-700 text-white"
                : "text-center py-4 my-3 text-xl cursor-pointer rounded-full border"
            }
          >
            Other
          </li>
          <li
            onClick={profileDetailsModal.onClose}
            className="text-center py-4 my-3 text-xl cursor-pointer rounded-full border"
          >
            Skip
          </li>
        </ul>
      </div>
    );
  }
  if (getValueType === "Piercings") {
    bodyContent = (
      <div className="max-h-[70vh] overflow-y-auto text-black">
        <h1 className="text-2xl font-medium text-center py-6">
          Have any piercings?
        </h1>
        <ul>
          <li
            onClick={handlePiercingsClick}
            className={
              user?.piercings === "None"
                ? "text-center py-4 my-3 text-xl cursor-pointer rounded-full border bg-gray-700 text-white"
                : "text-center py-4 my-3 text-xl cursor-pointer rounded-full border"
            }
          >
            None
          </li>
          <li
            onClick={handlePiercingsClick}
            className={
              user?.piercings === "Just ears"
                ? "text-center py-4 my-3 text-xl cursor-pointer rounded-full border bg-gray-700 text-white"
                : "text-center py-4 my-3 text-xl cursor-pointer rounded-full border"
            }
          >
            Just ears
          </li>
          <li
            onClick={handlePiercingsClick}
            className={
              user?.piercings === "A few"
                ? "text-center py-4 my-3 text-xl cursor-pointer rounded-full border bg-gray-700 text-white"
                : "text-center py-4 my-3 text-xl cursor-pointer rounded-full border"
            }
          >
            A few
          </li>
          <li
            onClick={handlePiercingsClick}
            className={
              user?.piercings === "Many"
                ? "text-center py-4 my-3 text-xl cursor-pointer rounded-full border bg-gray-700 text-white"
                : "text-center py-4 my-3 text-xl cursor-pointer rounded-full border"
            }
          >
            Many
          </li>
          <li
            onClick={handlePiercingsClick}
            className={
              user?.piercings === "Covered"
                ? "text-center py-4 my-3 text-xl cursor-pointer rounded-full border bg-gray-700 text-white"
                : "text-center py-4 my-3 text-xl cursor-pointer rounded-full border"
            }
          >
            Covered
          </li>

          <li
            onClick={profileDetailsModal.onClose}
            className="text-center py-4 my-3 text-xl cursor-pointer rounded-full border"
          >
            Skip
          </li>
        </ul>
      </div>
    );
  }
  if (getValueType === "Tattoos") {
    bodyContent = (
      <div className="max-h-[70vh] overflow-y-auto text-black">
        <h1 className="text-2xl font-medium text-center py-6">
          Have any tattoos?
        </h1>
        <ul>
          <li
            onClick={handleTattoosClick}
            className={
              user?.tattoos === "None"
                ? "text-center py-4 my-3 text-xl cursor-pointer rounded-full border bg-gray-700 text-white"
                : "text-center py-4 my-3 text-xl cursor-pointer rounded-full border"
            }
          >
            None
          </li>

          <li
            onClick={handleTattoosClick}
            className={
              user?.tattoos === "A few"
                ? "text-center py-4 my-3 text-xl cursor-pointer rounded-full border bg-gray-700 text-white"
                : "text-center py-4 my-3 text-xl cursor-pointer rounded-full border"
            }
          >
            A few
          </li>
          <li
            onClick={handleTattoosClick}
            className={
              user?.tattoos === "Many"
                ? "text-center py-4 my-3 text-xl cursor-pointer rounded-full border bg-gray-700 text-white"
                : "text-center py-4 my-3 text-xl cursor-pointer rounded-full border"
            }
          >
            Many
          </li>
          <li
            onClick={handleTattoosClick}
            className={
              user?.tattoos === "Covered"
                ? "text-center py-4 my-3 text-xl cursor-pointer rounded-full border bg-gray-700 text-white"
                : "text-center py-4 my-3 text-xl cursor-pointer rounded-full border"
            }
          >
            Covered
          </li>

          <li
            onClick={profileDetailsModal.onClose}
            className="text-center py-4 my-3 text-xl cursor-pointer rounded-full border"
          >
            Skip
          </li>
        </ul>
      </div>
    );
  }
  if (getValueType === "Drinking") {
    bodyContent = (
      <div className="h-[26rem] overflow-y-auto text-black">
        <h1 className="text-2xl font-medium text-center py-6">Do you drink?</h1>
        <ul>
          <li
            onClick={handleDrinkingClick}
            className={
              user?.drinking === "No"
                ? "text-center py-4 my-3 text-xl cursor-pointer rounded-full border bg-gray-700 text-white"
                : "text-center py-4 my-3 text-xl cursor-pointer rounded-full border"
            }
          >
            No
          </li>

          <li
            onClick={handleDrinkingClick}
            className={
              user?.drinking === "Socially"
                ? "text-center py-4 my-3 text-xl cursor-pointer rounded-full border bg-gray-700 text-white"
                : "text-center py-4 my-3 text-xl cursor-pointer rounded-full border"
            }
          >
            Socially
          </li>
          <li
            onClick={handleDrinkingClick}
            className={
              user?.drinking === "Regularly"
                ? "text-center py-4 my-3 text-xl cursor-pointer rounded-full border bg-gray-700 text-white"
                : "text-center py-4 my-3 text-xl cursor-pointer rounded-full border"
            }
          >
            Regularly
          </li>

          <li
            onClick={profileDetailsModal.onClose}
            className="text-center py-4 my-3 text-xl cursor-pointer rounded-full border"
          >
            Skip
          </li>
        </ul>
      </div>
    );
  }
  if (getValueType === "Yearly Income") {
    bodyContent = (
      <div className="max-h-[70vh] overflow-y-auto text-black">
        <h1 className="text-2xl font-medium text-center py-6">
          What’s your yearly income?
        </h1>
        <ul>
          <li
            onClick={handleYearlyIncomeClick}
            className={
              user?.yearly_income === "Rather not say"
                ? "text-center py-4 my-3 text-xl cursor-pointer rounded-full border bg-gray-700 text-white"
                : "text-center py-4 my-3 text-xl cursor-pointer rounded-full border"
            }
          >
            Rather not say
          </li>

          <li
            onClick={handleYearlyIncomeClick}
            className={
              user?.yearly_income === "Under $100k"
                ? "text-center py-4 my-3 text-xl cursor-pointer rounded-full border bg-gray-700 text-white"
                : "text-center py-4 my-3 text-xl cursor-pointer rounded-full border"
            }
          >
            Under $100k
          </li>
          <li
            onClick={handleYearlyIncomeClick}
            className={
              user?.yearly_income === "$100k-$250k"
                ? "text-center py-4 my-3 text-xl cursor-pointer rounded-full border bg-gray-700 text-white"
                : "text-center py-4 my-3 text-xl cursor-pointer rounded-full border"
            }
          >
            $100k-$250k
          </li>

          <li
            onClick={handleYearlyIncomeClick}
            className={
              user?.yearly_income === "$250k-$500k"
                ? "text-center py-4 my-3 text-xl cursor-pointer rounded-full border bg-gray-700 text-white"
                : "text-center py-4 my-3 text-xl cursor-pointer rounded-full border"
            }
          >
            $250k-$500k
          </li>
          <li
            onClick={handleYearlyIncomeClick}
            className={
              user?.yearly_income === "$500k-$1M"
                ? "text-center py-4 my-3 text-xl cursor-pointer rounded-full border bg-gray-700 text-white"
                : "text-center py-4 my-3 text-xl cursor-pointer rounded-full border"
            }
          >
            $500k-$1M
          </li>
          <li
            onClick={handleYearlyIncomeClick}
            className={
              user?.yearly_income === "Over $1M"
                ? "text-center py-4 my-3 text-xl cursor-pointer rounded-full border bg-gray-700 text-white"
                : "text-center py-4 my-3 text-xl cursor-pointer rounded-full border"
            }
          >
            Over $1M
          </li>

          <li
            onClick={profileDetailsModal.onClose}
            className="text-center py-4 my-3 text-xl cursor-pointer rounded-full border"
          >
            Skip
          </li>
        </ul>
      </div>
    );
  }
  if (getValueType === "Smoking") {
    bodyContent = (
      <div className="h-[26rem] overflow-y-auto text-black">
        <h1 className="text-2xl font-medium text-center py-6">Do you smoke?</h1>
        <ul>
          <li
            onClick={handleSmokingClick}
            className={
              user?.smoking === "No"
                ? "text-center py-4 my-3 text-xl cursor-pointer rounded-full border bg-gray-700 text-white"
                : "text-center py-4 my-3 text-xl cursor-pointer rounded-full border"
            }
          >
            No
          </li>

          <li
            onClick={handleSmokingClick}
            className={
              user?.smoking === "Occasionally"
                ? "text-center py-4 my-3 text-xl cursor-pointer rounded-full border bg-gray-700 text-white"
                : "text-center py-4 my-3 text-xl cursor-pointer rounded-full border"
            }
          >
            Occasionally
          </li>
          <li
            onClick={handleSmokingClick}
            className={
              user?.smoking === "Regularly"
                ? "text-center py-4 my-3 text-xl cursor-pointer rounded-full border bg-gray-700 text-white"
                : "text-center py-4 my-3 text-xl cursor-pointer rounded-full border"
            }
          >
            Regularly
          </li>

          <li
            onClick={profileDetailsModal.onClose}
            className="text-center py-4 my-3 text-xl cursor-pointer rounded-full border"
          >
            Skip
          </li>
        </ul>
      </div>
    );
  }
  if (getValueType === "Net Worth") {
    bodyContent = (
      <div className="max-h-[70vh] overflow-y-auto text-black">
        <h1 className="text-2xl font-medium text-center py-6">
          What’s your net worth?
        </h1>
        <ul>
          <li
            onClick={handleNetWorthClick}
            className={
              user?.net_worth === "Rather not say"
                ? "text-center py-4 my-3 text-xl cursor-pointer rounded-full border bg-gray-700 text-white"
                : "text-center py-4 my-3 text-xl cursor-pointer rounded-full border"
            }
          >
            Rather not say
          </li>

          <li
            onClick={handleNetWorthClick}
            className={
              user?.net_worth === "Under $500k"
                ? "text-center py-4 my-3 text-xl cursor-pointer rounded-full border bg-gray-700 text-white"
                : "text-center py-4 my-3 text-xl cursor-pointer rounded-full border"
            }
          >
            Under $500k
          </li>

          <li
            onClick={handleNetWorthClick}
            className={
              user?.net_worth === "$500k-$1M"
                ? "text-center py-4 my-3 text-xl cursor-pointer rounded-full border bg-gray-700 text-white"
                : "text-center py-4 my-3 text-xl cursor-pointer rounded-full border"
            }
          >
            $500k-$1M
          </li>
          <li
            onClick={handleNetWorthClick}
            className={
              user?.net_worth === "$1M-$10M"
                ? "text-center py-4 my-3 text-xl cursor-pointer rounded-full border bg-gray-700 text-white"
                : "text-center py-4 my-3 text-xl cursor-pointer rounded-full border"
            }
          >
            $1M-$10M
          </li>
          <li
            onClick={handleNetWorthClick}
            className={
              user?.net_worth === "Over $10M"
                ? "text-center py-4 my-3 text-xl cursor-pointer rounded-full border bg-gray-700 text-white"
                : "text-center py-4 my-3 text-xl cursor-pointer rounded-full border"
            }
          >
            Over $10M
          </li>

          <li
            onClick={profileDetailsModal.onClose}
            className="text-center py-4 my-3 text-xl cursor-pointer rounded-full border"
          >
            Skip
          </li>
        </ul>
      </div>
    );
  }
  if (getValueType === "Education") {
    bodyContent = (
      <div className="max-h-[70vh] overflow-y-auto text-black">
        <h1 className="text-2xl font-medium text-center py-6">
          What’s your education level?
        </h1>
        <ul>
          <li
            onClick={handleEducationClick}
            className={
              user?.education === "High School"
                ? "text-center py-4 my-3 text-xl cursor-pointer rounded-full border bg-gray-700 text-white"
                : "text-center py-4 my-3 text-xl cursor-pointer rounded-full border"
            }
          >
            High School
          </li>

          <li
            onClick={handleEducationClick}
            className={
              user?.education === "Some College"
                ? "text-center py-4 my-3 text-xl cursor-pointer rounded-full border bg-gray-700 text-white"
                : "text-center py-4 my-3 text-xl cursor-pointer rounded-full border"
            }
          >
            Some College
          </li>

          <li
            onClick={handleEducationClick}
            className={
              user?.education === "Associate Degree"
                ? "text-center py-4 my-3 text-xl cursor-pointer rounded-full border bg-gray-700 text-white"
                : "text-center py-4 my-3 text-xl cursor-pointer rounded-full border"
            }
          >
            Associate Degree
          </li>
          <li
            onClick={handleEducationClick}
            className={
              user?.education === "Bachelor Degree"
                ? "text-center py-4 my-3 text-xl cursor-pointer rounded-full border bg-gray-700 text-white"
                : "text-center py-4 my-3 text-xl cursor-pointer rounded-full border"
            }
          >
            Bachelor Degree
          </li>
          <li
            onClick={handleEducationClick}
            className={
              user?.education === "Graduate Degree"
                ? "text-center py-4 my-3 text-xl cursor-pointer rounded-full border bg-gray-700 text-white"
                : "text-center py-4 my-3 text-xl cursor-pointer rounded-full border"
            }
          >
            Graduate Degree
          </li>
          <li
            onClick={handleEducationClick}
            className={
              user?.education === "PhD / Post-Doctoral"
                ? "text-center py-4 my-3 text-xl cursor-pointer rounded-full border bg-gray-700 text-white"
                : "text-center py-4 my-3 text-xl cursor-pointer rounded-full border"
            }
          >
            PhD / Post-Doctoral
          </li>

          <li
            onClick={profileDetailsModal.onClose}
            className="text-center py-4 my-3 text-xl cursor-pointer rounded-full border"
          >
            Skip
          </li>
        </ul>
      </div>
    );
  }
  if (getValueType === "about") {
    bodyContent = (
      <div className="text-black">
        <h1 className="text-center text-xl font-medium">
          Tell me about yourself
        </h1>
        <textarea
          onChange={(e: any) => setInputFieldsValue(e.target.value)}
          // type="text"
          name=""
          id=""
          className=" shadow-[0_0px_10px_rgba(0,0,0,0.15)] hover:shadow-[0_0px_20px_rgba(0,0,0,0.25)] outline-none px-5 py-7 rounded-xl w-full my-6"
          placeholder="About yourself."
          required
          defaultValue={user?.about}
        />
        <button
          onClick={handleOfferFieldsValue}
          className={
            inputFieldsValue.length > 10
              ? "bg-[#00C684] text-center w-full py-4 rounded-full text-xl text-white mb-5"
              : "bg-gray-300 text-center w-full py-4 rounded-full text-xl text-white mb-5"
          }
          disabled={inputFieldsValue.length > 10 ? false : true}
        >
          Save
        </button>
      </div>
    );
  }
  if (getValueType === "othersCuriculam") {
    bodyContent = (
      <div className="text-black">
        <h1 className="text-center text-xl font-medium">
          What’s your Others Curiculam
        </h1>
        <textarea
          onChange={(e: any) => setTaglineValue(e.target.value)}

          name=""
          id=""
          className=" shadow-[0_0px_10px_rgba(0,0,0,0.15)] hover:shadow-[0_0px_20px_rgba(0,0,0,0.25)] outline-none px-5 py-4 rounded-xl w-full my-6"
          placeholder="Write a few words to tempt"
          required
          defaultValue={user?.othersCuriculam}
        />
        <button
          onClick={handleOthersCuriculamValue}
          className={
            taglineValue.length > 10
              ? "bg-[#00C684] text-center w-full py-4 rounded-full text-xl text-white mb-5"
              : "bg-gray-300 text-center w-full py-4 rounded-full text-xl text-white mb-5"
          }
          disabled={taglineValue.length > 10 ? false : true}
        >
          Save
        </button>
      </div>
    );
  }
  if (
    getValueType === "whatsapp" ||
    getValueType === "website" ||
    getValueType === "github" ||
    getValueType === "linkedin" ||
    getValueType === "youtube" ||
    getValueType === "facebook" ||
    getValueType === "twitter" ||
    getValueType === "instagram"
  ) {
    bodyContent = (
      <div className="text-black">
        <h1 className="text-center text-xl font-medium capitalize">
          {getValueType} pls:
        </h1>
        <input
          onChange={(e: any) => setLink(e.target.value)}
          type={getValueType === "whatsapp" ? "number" : "text"}
          name=""
          id=""
          className=" shadow-[0_0px_10px_rgba(0,0,0,0.15)] hover:shadow-[0_0px_20px_rgba(0,0,0,0.25)] outline-none px-5 py-4 rounded-full w-full my-6"
          placeholder="Write a few words to tempt"
          required
          defaultValue={
            getValueType === "whatsapp" ? user?.whatsapp :
              getValueType === "website" ? user?.website :
                getValueType === "github" ? user?.github :
                  getValueType === "linkedin" ? user?.linkedin :
                    getValueType === "youtube" ? user?.youtube :
                      getValueType === "facebook" ? user?.facebook :
                        getValueType === "twitter" ? user?.twitter :
                          getValueType === "instagram" ? user?.instagram : ""
          }
        />
        <button
          onClick={handleLinkChange}
          className={
            link.length > 7
              ? "bg-[#00C684] text-center w-full py-4 rounded-full text-xl text-white mb-5"
              : "bg-gray-300 text-center w-full py-4 rounded-full text-xl text-white mb-5"
          }
          disabled={link.length > 7 ? false : true}
        >
          Save
        </button>
      </div>
    );
  }
  if (getValueType === "Location") {
    bodyContent = (
      <div className="text-black">
        <h1 className="text-center text-xl font-medium">
          Where are you located?
        </h1>
        <div className="relative">
          <input
            onChange={(e: any) => setLocationValue(e.target.value)}
            type="text"
            name=""
            id=""
            className=" shadow-[0_0px_10px_rgba(0,0,0,0.15)] hover:shadow-[0_0px_20px_rgba(0,0,0,0.25)] outline-none px-10 py-4 rounded-full w-full mt-6 "
            required
            defaultValue={user?.location}
          />
          <BiSearch className="absolute left-3 bottom-[12.5px] h-7 w-7"></BiSearch>
        </div>
        <p className="mx-5 mt-2 mb-20">
          Use the above field to update your location.
        </p>
        <button
          onClick={handleLocationFieldsValue}
          className={
            locationValue.length > 4
              ? "bg-[#00C684] text-center w-full py-4 rounded-full text-xl text-white mb-5"
              : "bg-gray-300 text-center w-full py-4 rounded-full text-xl text-white mb-5"
          }
          disabled={locationValue.length > 4 ? false : true}
        >
          Save
        </button>
      </div>
    );
  }
  if (getValueType === "Gender") {
    bodyContent = (
      <div className="text-black">
        <h1 className="text-center text-xl font-medium">
          What is your gender?
        </h1>
        <ul>
          <li
            onClick={handleGenderClick}
            className={
              user?.gender === "Man"
                ? "text-center py-4 my-3 text-xl cursor-pointer rounded-full border bg-gray-700 text-white"
                : "text-center py-4 my-3 text-xl cursor-pointer rounded-full border"
            }
          >
            Man
          </li>
          <li
            onClick={handleGenderClick}
            className={
              user?.gender === "Woman"
                ? "text-center py-4 my-3 text-xl cursor-pointer rounded-full border bg-gray-700 text-white"
                : "text-center py-4 my-3 text-xl cursor-pointer rounded-full border"
            }
          >
            Woman
          </li>
          <li
            onClick={handleGenderClick}
            className={
              user?.gender === "TS"
                ? "text-center py-4 my-3 text-xl cursor-pointer rounded-full border bg-gray-700 text-white"
                : "text-center py-4 my-3 text-xl cursor-pointer rounded-full border"
            }
          >
            TS
          </li>

          <li
            onClick={profileDetailsModal.onClose}
            className="text-center py-4 my-3 text-xl cursor-pointer rounded-full border"
          >
            Skip
          </li>
        </ul>
      </div>
    );
  }

  if (
    getValueType === "have to offer" ||
    getValueType === "looking for" ||
    getValueType === "Tagline"
  ) {
    return (
      <Modal
        isOpen={profileDetailsModal.isOpen}
        title={"getDetailsForMsg.username"}
        onClose={profileDetailsModal.onClose}
        body={bodyContent}
      />
    );
  } else {
    return (
      <ProfileModal
        isOpen={profileDetailsModal.isOpen}
        title={"getDetailsForMsg.username"}
        onClose={profileDetailsModal.onClose}
        body={bodyContent}
      />
    );
  }
};

export default ProfileDetailsModal;
