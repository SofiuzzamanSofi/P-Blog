"use client";


import { useState, ChangeEvent } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import useProfileDetailsModal from "../Hooks/useProfileDetailsModal";
import ProfileModal from "./ProfileModal";
import Modal from "./Modall";
import { BiSearch } from "react-icons/bi";
import { useAuth } from "@/provider/AuthProvider";
// import { useAuth } from "../Context/AuthProvider";

const ProfileDetailsModal = ({ getValueType }: any) => {

  // authh 
  const { user, setUserReload } = useAuth();
  const email = user?.email;

  const profileDetailsModal = useProfileDetailsModal();
  const [firstPoint, setFirstPoint] = useState<number>(0);
  const [inputFieldsValue, setInputFieldsValue] = useState<string>("");
  const [lookingFieldsValue, setLookingFieldsValue] = useState<string>("");
  const [taglineValue, setTaglineValue] = useState<string>("");
  const [locationValue, setLocationValue] = useState<string>("");

  // auth
  // const { setUserReload } = useAuth();

  const handleProfilePercentage = async () => {
    const values = {
      profilePercentage: 100,
    };
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER}/user/register/putNew/${email}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(values),
      }
    );
    await res.json();
  };

  const handleBodyTypeClick = async (e: React.MouseEvent<HTMLLIElement>) => {
    if (e.currentTarget.textContent) {
      const values = {
        bodyType: e.currentTarget.textContent,
      };
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER}/user/register/putNew/${email}`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );
      const result = await res.json();
      //    console.log(result);
      if (result.message === "User updated successfully") {
        profileDetailsModal.onClose();
        // setUserReload((prev) => !prev); // auth reload
        setUserReload((prev) => !prev);
      }
      if (result.message === "User updated successfully" && !user?.bodyType) {
        profileDetailsModal.onClose();
        setUserReload((prev) => !prev);
        handleProfilePercentage();
      }
    }
  };

  const handleHairColorClick = async (e: React.MouseEvent<HTMLLIElement>) => {
    if (e.currentTarget.textContent) {
      const values = {
        hair_color: e.currentTarget.textContent,
      };
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER}/user/register/putNew/${email}`,
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
        if (
          result.message === "User updated successfully" &&
          !user?.hair_color
        ) {
          profileDetailsModal.onClose();
          setUserReload((prev) => !prev);
          handleProfilePercentage();
        }
      }
    }
  };

  const handleEyeColorClick = async (e: React.MouseEvent<HTMLLIElement>) => {
    if (e.currentTarget.textContent) {
      const values = {
        eye_color: e.currentTarget.textContent,
      };
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER}/user/register/putNew/${email}`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );
      const result = await res.json();
      //    console.log(result);
      if (result.message === "User updated successfully") {
        setUserReload((prev) => !prev);
        profileDetailsModal.onClose();
      }
      if (result.message === "User updated successfully" && !user?.eye_color) {
        profileDetailsModal.onClose();
        setUserReload((prev) => !prev);
        handleProfilePercentage();
      }
    }
  };

  const handlePiercingsClick = async (e: React.MouseEvent<HTMLLIElement>) => {
    if (e.currentTarget.textContent) {
      const values = {
        piercings: e.currentTarget.textContent,
      };
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER}/user/register/putNew/${email}`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );
      const result = await res.json();
      //    console.log(result);
      if (result.message === "User updated successfully") {
        setUserReload((prev) => !prev);
        profileDetailsModal.onClose();
      }
      if (result.message === "User updated successfully" && !user?.piercings) {
        profileDetailsModal.onClose();
        setUserReload((prev) => !prev);
        handleProfilePercentage();
      }
    }
  };

  const handleTattoosClick = async (e: React.MouseEvent<HTMLLIElement>) => {
    if (e.currentTarget.textContent) {
      const values = {
        tattoos: e.currentTarget.textContent,
      };
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER}/user/register/putNew/${email}`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );
      const result = await res.json();
      //    console.log(result);
      if (result.message === "User updated successfully") {
        setUserReload((prev) => !prev);
        profileDetailsModal.onClose();
      }
      if (result.message === "User updated successfully" && !user?.tattoos) {
        profileDetailsModal.onClose();
        setUserReload((prev) => !prev);
        handleProfilePercentage();
      }
    }
  };

  const handleDrinkingClick = async (e: React.MouseEvent<HTMLLIElement>) => {
    if (e.currentTarget.textContent) {
      const values = {
        drinking: e.currentTarget.textContent,
      };
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER}/user/register/putNew/${email}`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );
      const result = await res.json();
      //    console.log(result);
      if (result.message === "User updated successfully") {
        setUserReload((prev) => !prev);
        profileDetailsModal.onClose();
      }
      if (result.message === "User updated successfully" && !user?.drinking) {
        profileDetailsModal.onClose();
        setUserReload((prev) => !prev);
        handleProfilePercentage();
      }
    }
  };

  const handleSmokingClick = async (e: React.MouseEvent<HTMLLIElement>) => {
    if (e.currentTarget.textContent) {
      const values = {
        smoking: e.currentTarget.textContent,
      };
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER}/user/register/putNew/${email}`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );
      const result = await res.json();
      //    console.log(result);
      if (result.message === "User updated successfully") {
        setUserReload((prev) => !prev);
        profileDetailsModal.onClose();
      }
      if (result.message === "User updated successfully" && !user?.smoking) {
        profileDetailsModal.onClose();
        setUserReload((prev) => !prev);
        handleProfilePercentage();
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
        `${process.env.NEXT_PUBLIC_SERVER}/user/register/putNew/${email}`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );
      const result = await res.json();
      //    console.log(result);
      if (result.message === "User updated successfully") {
        setUserReload((prev) => !prev);
        profileDetailsModal.onClose();
      }
      if (
        result.message === "User updated successfully" &&
        !user?.yearly_income
      ) {
        profileDetailsModal.onClose();
        setUserReload((prev) => !prev);
        handleProfilePercentage();
      }
    }
  };

  const handleNetWorthClick = async (e: React.MouseEvent<HTMLLIElement>) => {
    if (e.currentTarget.textContent) {
      const values = {
        net_worth: e.currentTarget.textContent,
      };
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER}/user/register/putNew/${email}`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );
      const result = await res.json();
      //    console.log(result);
      if (result.message === "User updated successfully") {
        setUserReload((prev) => !prev);
        profileDetailsModal.onClose();
      }
      if (result.message === "User updated successfully" && !user?.net_worth) {
        profileDetailsModal.onClose();
        setUserReload((prev) => !prev);
        handleProfilePercentage();
      }
    }
  };

  const handleEducationClick = async (e: React.MouseEvent<HTMLLIElement>) => {
    if (e.currentTarget.textContent) {
      const values = {
        education: e.currentTarget.textContent,
      };
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER}/user/register/putNew/${email}`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );
      const result = await res.json();
      //    console.log(result);
      if (result.message === "User updated successfully") {
        setUserReload((prev) => !prev);
        profileDetailsModal.onClose();
      }
      if (result.message === "User updated successfully" && !user?.education) {
        profileDetailsModal.onClose();
        setUserReload((prev) => !prev);
        handleProfilePercentage();
      }
    }
  };

  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const [error, setError] = useState<string>("");

  const handleInterestClick = async (value: string): Promise<void> => {
    if (selectedValues.length <= 5) {
      setSelectedValues((prevValues) => [...prevValues, value]);
      const values = {
        interest: selectedValues,
      };
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER}/user/register/putNew/${email}`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );
      const result = await res.json();
      if (
        result.message === "User updated successfully" &&
        selectedValues.length === 5
      ) {
        setUserReload((prev) => !prev);
        profileDetailsModal.onClose();
      }
      if (
        result.message === "User updated successfully" &&
        selectedValues.length === 5 &&
        user?.interest.length !== 5
      ) {
        profileDetailsModal.onClose();
        setUserReload((prev) => !prev);
        handleProfilePercentage();
      }
      setError("");
    } else {
      setError("You can only select up to 5 values.");
    }
  };

  const onSubmit: SubmitHandler<FieldValues> = async () => {
    const values = {
      height: firstPoint,
    };
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER}/user/register/putNew/${email}`,
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
    if (result.message === "User updated successfully" && !user?.height) {
      profileDetailsModal.onClose();
      setUserReload((prev) => !prev);
      handleProfilePercentage();
    }
  };

  const handleIncreaseAge = (e: ChangeEvent<HTMLInputElement>) => {
    const newFirstPoint = parseInt(e.target.value, 10);
    setFirstPoint(newFirstPoint);
  };

  const handleOfferFieldsValue = async () => {
    const values = {
      offer: inputFieldsValue,
    };
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER}/user/register/putNew/${email}`,
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
    if (result.message === "User updated successfully" && !user?.offer) {
      profileDetailsModal.onClose();
      setUserReload((prev) => !prev);
      handleProfilePercentage();
    }
  };
  const handleLookingFieldsValue = async () => {
    const values = {
      looking_for: lookingFieldsValue,
    };
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER}/user/register/putNew/${email}`,
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

      setLookingFieldsValue("");
    }
    if (result.message === "User updated successfully" && !user?.looking_for) {
      profileDetailsModal.onClose();
      setUserReload((prev) => !prev);
      handleProfilePercentage();
    }
  };
  const handleTaglineFieldsValue = async () => {
    const values = {
      tagLine: taglineValue,
    };
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER}/user/register/putNew/${email}`,
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
    if (result.message === "User updated successfully" && !user?.tagLine) {
      profileDetailsModal.onClose();
      setUserReload((prev) => !prev);
      handleProfilePercentage();
    }
  };
  const handleLocationFieldsValue = async () => {
    const values = {
      location: locationValue,
    };
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER}/user/register/putNew/${email}`,
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
    if (result.message === "User updated successfully" && !user?.location) {
      profileDetailsModal.onClose();
      setUserReload((prev) => !prev);
      handleProfilePercentage();
    }
  };

  const handleInterestedClick = async (e: React.MouseEvent<HTMLLIElement>) => {
    if (e.currentTarget.textContent) {
      const values = {
        interested: e.currentTarget.textContent,
      };
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER}/user/register/putNew/${email}`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );
      const result = await res.json();
      //    console.log(result);
      if (result.message === "User updated successfully") {
        //    console.log(result);
        profileDetailsModal.onClose();
        setUserReload((prev) => !prev);
      }
      if (result.message === "User updated successfully" && !user?.interested) {
        profileDetailsModal.onClose();
        setUserReload((prev) => !prev);
        handleProfilePercentage();
      }
    }
  };

  // content
  let bodyContent;
  if (getValueType === "Body Type") {
    bodyContent = (
      <div className="max-h-[70vh] overflow-y-auto">
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
      <div className="max-h-[70vh] overflow-y-auto">
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
      <div className="max-h-[70vh] overflow-y-auto">
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
      <div className="max-h-[70vh] overflow-y-auto">
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
      <div className="max-h-[70vh] overflow-y-auto">
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
  if (getValueType === "Height") {
    bodyContent = (
      <div className="h-[24rem] overflow-y-auto">
        <h1 className="text-2xl font-medium text-center py-6">
          How tall are you?
        </h1>
        <div>
          <h2 className="text-[#EB4A90] text-xl">{firstPoint}</h2>
          <input
            type="range"
            className="h-2 w-full cursor-pointer appearance-none rounded-full bg-gray-200 disabled:cursor-not-allowed my-11"
            min={0}
            max={10}
            step={1}
            value={firstPoint}
            onChange={handleIncreaseAge}
          />
          <div>
            <button
              onClick={onSubmit}
              className="text-center py-4 my-3 text-xl cursor-pointer rounded-full border bg-[#00C684] text-white  w-full"
            >
              Save
            </button>
            <button className="text-center py-4 my-3 text-xl cursor-pointer rounded-full border w-full">
              Skip
            </button>
          </div>
        </div>
      </div>
    );
  }
  if (getValueType === "Drinking") {
    bodyContent = (
      <div className="h-[26rem] overflow-y-auto">
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
      <div className="max-h-[70vh] overflow-y-auto">
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
      <div className="h-[26rem] overflow-y-auto">
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
      <div className="max-h-[70vh] overflow-y-auto">
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
      <div className="max-h-[70vh] overflow-y-auto">
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
              user?.education === "Bachelor's Degree"
                ? "text-center py-4 my-3 text-xl cursor-pointer rounded-full border bg-gray-700 text-white"
                : "text-center py-4 my-3 text-xl cursor-pointer rounded-full border"
            }
          >
            Bachelor's Degree
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
  if (
    getValueType === "Add your Interest" ||
    getValueType === "Edit your interest"
  ) {
    bodyContent = (
      <div className="max-h-[70vh] overflow-y-auto">
        <p className="text-red-500 text-xl font-light text-center">{error}</p>
        <div>
          <div className="mt-5 text-xl ">
            {selectedValues.slice(0, 5).length} of 5 selected.
          </div>
          <div className="grid grid-cols-2 gap-2 my-5">
            {selectedValues
              .slice(0, 5)
              .map((interest: string, index: number) => (
                <h2
                  key={index}
                  className="border py-2 px-2 rounded-full text-center"
                >
                  {interest}
                </h2>
              ))}
          </div>
          <h1 className="text-2xl font-medium text-center py-6">
            My Interested?
          </h1>
          <hr />

          <h1 className="text-xl font-medium  py-6">Movies/Television</h1>

          <div className="flex justify-center ">
            {/* First list */}
            <ul className="mr-4">
              <li
                onClick={() => handleInterestClick("🎬 Action")}
                className={
                  selectedValues.slice(0, 5).includes("🎬 Action")
                    ? "text-center py-2 my-2 text-bs font-medium cursor-pointer rounded-full border px-4 bg-gray-700 text-white"
                    : "text-center py-2 my-2 text-bs font-medium cursor-pointer rounded-full border border-indigo-500 px-4"
                }
              >
                🎬 Action
              </li>
              <li
                onClick={() => handleInterestClick("🎬 Comedies")}
                className={
                  selectedValues.slice(0, 5).includes("🎬 Comedies")
                    ? "text-center py-2 my-2 text-bs font-medium cursor-pointer rounded-full border px-4 bg-gray-700 text-white"
                    : "text-center py-2 my-2 text-bs font-medium cursor-pointer rounded-full border border-indigo-500 px-4"
                }
              >
                🎬 Comedies
              </li>
              <li
                onClick={() => handleInterestClick("🎬 Documentaries")}
                className={
                  selectedValues.slice(0, 5).includes("🎬 Documentaries")
                    ? "text-center py-2 my-2 text-bs font-medium cursor-pointer rounded-full border px-4 bg-gray-700 text-white"
                    : "text-center py-2 my-2 text-bs font-medium cursor-pointer rounded-full border border-indigo-500 px-4"
                }
              >
                🎬 Documentaries
              </li>
            </ul>

            {/* Second list */}
            <ul>
              <li
                onClick={() => handleInterestClick("🎬 Animation")}
                className={
                  selectedValues.slice(0, 5).includes("🎬 Animation")
                    ? "text-center py-2 my-2 text-bs font-medium cursor-pointer rounded-full border px-4 bg-gray-700 text-white"
                    : "text-center py-2 my-2 text-bs font-medium cursor-pointer rounded-full border border-indigo-500 px-4"
                }
              >
                🎬 Animation
              </li>
              <li
                onClick={() => handleInterestClick("🎬 Dramas")}
                className={
                  selectedValues.slice(0, 5).includes("🎬 Dramas")
                    ? "text-center py-2 my-2 text-bs font-medium cursor-pointer rounded-full border px-4 bg-gray-700 text-white"
                    : "text-center py-2 my-2 text-bs font-medium cursor-pointer rounded-full border border-indigo-500 px-4"
                }
              >
                🎬 Dramas
              </li>
            </ul>
          </div>
          <button className="  text-red-400 text-lg py-2 px-3 font-medium hover:text-red-500 rounded-xl mt-2 ">
            View All
          </button>
          <hr />

          <h1 className="text-xl font-medium  py-6">Values</h1>
          <div className="flex justify-center ">
            {/* First list */}
            <ul className="mr-4">
              <li
                onClick={() => handleInterestClick("🤞 Ambition")}
                className={
                  selectedValues.slice(0, 5).includes("🤞 Ambition")
                    ? "text-center py-2 my-2 text-bs font-medium cursor-pointer rounded-full border px-4 bg-gray-700 text-white"
                    : "text-center py-2 my-2 text-bs font-medium cursor-pointer rounded-full border border-indigo-500 px-4"
                }
              >
                🤞 Ambition
              </li>
              <li
                onClick={() => handleInterestClick("🤫 Confidence")}
                className={
                  selectedValues.slice(0, 5).includes("🤫 Confidence")
                    ? "text-center py-2 my-2 text-bs font-medium cursor-pointer rounded-full border px-4 bg-gray-700 text-white"
                    : "text-center py-2 my-2 text-bs font-medium cursor-pointer rounded-full border border-indigo-500 px-4"
                }
              >
                🤫 Confidence
              </li>
              <li
                onClick={() => handleInterestClick("🤗 Empathy")}
                className={
                  selectedValues.slice(0, 5).includes("🤗 Empathy")
                    ? "text-center py-2 my-2 text-bs font-medium cursor-pointer rounded-full border px-4 bg-gray-700 text-white"
                    : "text-center py-2 my-2 text-bs font-medium cursor-pointer rounded-full border border-indigo-500 px-4"
                }
              >
                🤗 Empathy
              </li>
            </ul>

            {/* Second list */}
            <ul>
              <li
                onClick={() => handleInterestClick("🧐 Intelligence")}
                className={
                  selectedValues.slice(0, 5).includes("🧐 Intelligence")
                    ? "text-center py-2 my-2 text-bs font-medium cursor-pointer rounded-full border px-4 bg-gray-700 text-white"
                    : "text-center py-2 my-2 text-bs font-medium cursor-pointer rounded-full border border-indigo-500 px-4"
                }
              >
                🧐 Intelligence
              </li>
              <li
                onClick={() => handleInterestClick("😄 Positivity")}
                className={
                  selectedValues.slice(0, 5).includes("😄 Positivity")
                    ? "text-center py-2 my-2 text-bs font-medium cursor-pointer rounded-full border px-4 bg-gray-700 text-white"
                    : "text-center py-2 my-2 text-bs font-medium cursor-pointer rounded-full border border-indigo-500 px-4"
                }
              >
                😄 Positivity
              </li>
            </ul>
          </div>
        </div>
        <hr className="mt-7" />
        <h1 className="text-xl font-medium  py-6"> Activities</h1>
        <div className="flex justify-center ">
          {/* First list */}
          <ul className="mr-4">
            <li
              onClick={() => handleInterestClick("🕹️ Arcades")}
              className={
                selectedValues.slice(0, 5).includes("🕹️ Arcades")
                  ? "text-center py-2 my-2 text-bs font-medium cursor-pointer rounded-full border px-4 bg-gray-700 text-white"
                  : "text-center py-2 my-2 text-bs font-medium cursor-pointer rounded-full border border-indigo-500 px-4"
              }
            >
              🕹️ Arcades
            </li>
            <li
              onClick={() => handleInterestClick("🍻 Bars")}
              className={
                selectedValues.slice(0, 5).includes("🍻 Bars")
                  ? "text-center py-2 my-2 text-bs font-medium cursor-pointer rounded-full border px-4 bg-gray-700 text-white"
                  : "text-center py-2 my-2 text-bs font-medium cursor-pointer rounded-full border border-indigo-500 px-4"
              }
            >
              🍻 Bars
            </li>
            <li
              onClick={() => handleInterestClick("🎲 Board Games")}
              className={
                selectedValues.slice(0, 5).includes("🎲 Board Games")
                  ? "text-center py-2 my-2 text-bs font-medium cursor-pointer rounded-full border px-4 bg-gray-700 text-white"
                  : "text-center py-2 my-2 text-bs font-medium cursor-pointer rounded-full border border-indigo-500 px-4"
              }
            >
              🎲 Board Games
            </li>
          </ul>

          {/* Second list */}
          <ul>
            <li
              onClick={() => handleInterestClick("🥪 Brunch")}
              className={
                selectedValues.slice(0, 5).includes("🥪 Brunch")
                  ? "text-center py-2 my-2 text-bs font-medium cursor-pointer rounded-full border px-4 bg-gray-700 text-white"
                  : "text-center py-2 my-2 text-bs font-medium cursor-pointer rounded-full border border-indigo-500 px-4"
              }
            >
              🥪 Brunch
            </li>
            <li
              onClick={() => handleInterestClick("☕ Cafes")}
              className={
                selectedValues.slice(0, 5).includes("☕ Cafes")
                  ? "text-center py-2 my-2 text-bs font-medium cursor-pointer rounded-full border px-4 bg-gray-700 text-white"
                  : "text-center py-2 my-2 text-bs font-medium cursor-pointer rounded-full border border-indigo-500 px-4"
              }
            >
              ☕ Cafes
            </li>
          </ul>
        </div>
        <button className="  text-red-400 text-lg py-2 px-3 font-medium hover:text-red-500 rounded-xl mt-2 ">
          View All
        </button>
        <hr className="mt-7" />
        <h1 className="text-xl font-medium  py-6"> Interests</h1>
        <div className="flex justify-center ">
          {/* First list */}
          <ul className="mr-4">
            <li
              onClick={() => handleInterestClick("🎨 Art")}
              className={
                selectedValues.slice(0, 5).includes("🎨 Art")
                  ? "text-center py-2 my-2 text-bs font-medium cursor-pointer rounded-full border px-4 bg-gray-700 text-white"
                  : "text-center py-2 my-2 text-bs font-medium cursor-pointer rounded-full border border-indigo-500 px-4"
              }
            >
              🎨 Art
            </li>
            <li
              onClick={() => handleInterestClick("🌌 Astrology")}
              className={
                selectedValues.slice(0, 5).includes("🌌 Astrology")
                  ? "text-center py-2 my-2 text-bs font-medium cursor-pointer rounded-full border px-4 bg-gray-700 text-white"
                  : "text-center py-2 my-2 text-bs font-medium cursor-pointer rounded-full border border-indigo-500 px-4"
              }
            >
              🌌 Astrology
            </li>
            <li
              onClick={() => handleInterestClick("🥧 Baking")}
              className={
                selectedValues.slice(0, 5).includes("🥧 Baking")
                  ? "text-center py-2 my-2 text-bs font-medium cursor-pointer rounded-full border px-4 bg-gray-700 text-white"
                  : "text-center py-2 my-2 text-bs font-medium cursor-pointer rounded-full border border-indigo-500 px-4"
              }
            >
              🥧 Baking
            </li>
          </ul>

          {/* Second list */}
          <ul>
            <li
              onClick={() => handleInterestClick("🐈 Cats")}
              className={
                selectedValues.slice(0, 5).includes("🐈 Cats")
                  ? "text-center py-2 my-2 text-bs font-medium cursor-pointer rounded-full border px-4 bg-gray-700 text-white"
                  : "text-center py-2 my-2 text-bs font-medium cursor-pointer rounded-full border border-indigo-500 px-4"
              }
            >
              🐈 Cats
            </li>
            <li
              onClick={() => handleInterestClick("🥘 Cooking")}
              className={
                selectedValues.slice(0, 5).includes("🥘 Cooking")
                  ? "text-center py-2 my-2 text-bs font-medium cursor-pointer rounded-full border px-4 bg-gray-700 text-white"
                  : "text-center py-2 my-2 text-bs font-medium cursor-pointer rounded-full border border-indigo-500 px-4"
              }
            >
              🥘 Cooking
            </li>
          </ul>
        </div>
        <button className="  text-red-400 text-lg py-2 px-3 font-medium hover:text-red-500 rounded-xl mt-2 ">
          View All
        </button>
        <hr className="mt-7" />
        <h1 className="text-xl font-medium  py-6"> Sports</h1>
        <div className="flex justify-center ">
          {/* First list */}
          <ul className="mr-4">
            <li
              onClick={() => handleInterestClick("⚾ Baseball")}
              className={
                selectedValues.slice(0, 5).includes("⚾ Baseball")
                  ? "text-center py-2 my-2 text-bs font-medium cursor-pointer rounded-full border px-4 bg-gray-700 text-white"
                  : "text-center py-2 my-2 text-bs font-medium cursor-pointer rounded-full border border-indigo-500 px-4"
              }
            >
              ⚾ Baseball
            </li>
            <li
              onClick={() => handleInterestClick("🏀 Basketball")}
              className={
                selectedValues.slice(0, 5).includes("🏀 Basketball")
                  ? "text-center py-2 my-2 text-bs font-medium cursor-pointer rounded-full border px-4 bg-gray-700 text-white"
                  : "text-center py-2 my-2 text-bs font-medium cursor-pointer rounded-full border border-indigo-500 px-4"
              }
            >
              🏀 Basketball
            </li>
            <li
              onClick={() => handleInterestClick("🎳 Bowling")}
              className={
                selectedValues.slice(0, 5).includes("🎳 Bowling")
                  ? "text-center py-2 my-2 text-bs font-medium cursor-pointer rounded-full border px-4 bg-gray-700 text-white"
                  : "text-center py-2 my-2 text-bs font-medium cursor-pointer rounded-full border border-indigo-500 px-4"
              }
            >
              🎳 Bowling
            </li>
          </ul>

          {/* Second list */}
          <ul>
            <li
              onClick={() => handleInterestClick("🥊 Boxing")}
              className={
                selectedValues.slice(0, 5).includes("🥊 Boxing")
                  ? "text-center py-2 my-2 text-bs font-medium cursor-pointer rounded-full border px-4 bg-gray-700 text-white"
                  : "text-center py-2 my-2 text-bs font-medium cursor-pointer rounded-full border border-indigo-500 px-4"
              }
            >
              🥊 Boxing
            </li>
            <li
              onClick={() => handleInterestClick("🏈 Football")}
              className={
                selectedValues.slice(0, 5).includes("🏈 Football")
                  ? "text-center py-2 my-2 text-bs font-medium cursor-pointer rounded-full border px-4 bg-gray-700 text-white"
                  : "text-center py-2 my-2 text-bs font-medium cursor-pointer rounded-full border border-indigo-500 px-4"
              }
            >
              🏈 Football
            </li>
          </ul>
        </div>
        <button className="  text-red-400 text-lg py-2 px-3 font-medium hover:text-red-500 rounded-xl mt-2 ">
          View All
        </button>
        <hr className="mt-7" />
        <h1 className="text-xl font-medium  py-6"> Travel Preferences</h1>
        <div className="flex justify-center ">
          {/* First list */}
          <ul className="mr-4">
            <li
              onClick={() => handleInterestClick("🏖️ Beaches")}
              className={
                selectedValues.slice(0, 5).includes("🏖️ Beaches")
                  ? "text-center py-2 my-2 text-bs font-medium cursor-pointer rounded-full border px-4 bg-gray-700 text-white"
                  : "text-center py-2 my-2 text-bs font-medium cursor-pointer rounded-full border border-indigo-500 px-4"
              }
            >
              🏖️ Beaches
            </li>
            <li
              onClick={() => handleInterestClick("🏕️ Camping")}
              className={
                selectedValues.slice(0, 5).includes("🏕️ Camping")
                  ? "text-center py-2 my-2 text-bs font-medium cursor-pointer rounded-full border px-4 bg-gray-700 text-white"
                  : "text-center py-2 my-2 text-bs font-medium cursor-pointer rounded-full border border-indigo-500 px-4"
              }
            >
              🏕️ Camping
            </li>
            <li
              onClick={() => handleInterestClick("🚢 Cruises")}
              className={
                selectedValues.slice(0, 5).includes("🚢 Cruises")
                  ? "text-center py-2 my-2 text-bs font-medium cursor-pointer rounded-full border px-4 bg-gray-700 text-white"
                  : "text-center py-2 my-2 text-bs font-medium cursor-pointer rounded-full border border-indigo-500 px-4"
              }
            >
              🚢 Cruises
            </li>
          </ul>

          {/* Second list */}
          <ul>
            <li
              onClick={() => handleInterestClick("🗽 Historical Sites")}
              className={
                selectedValues.slice(0, 5).includes("🗽 Historical Sites")
                  ? "text-center py-2 my-2 text-bs font-medium cursor-pointer rounded-full border px-4 bg-gray-700 text-white"
                  : "text-center py-2 my-2 text-bs font-medium cursor-pointer rounded-full border border-indigo-500 px-4"
              }
            >
              🗽 Historical Sites
            </li>
            <li
              onClick={() => handleInterestClick("🏛️ Museums")}
              className={
                selectedValues.slice(0, 5).includes("🏛️ Museums")
                  ? "text-center py-2 my-2 text-bs font-medium cursor-pointer rounded-full border px-4 bg-gray-700 text-white"
                  : "text-center py-2 my-2 text-bs font-medium cursor-pointer rounded-full border border-indigo-500 px-4"
              }
            >
              🏛️ Museums
            </li>
          </ul>
        </div>
        <button className="  text-red-400 text-lg py-2 px-3 font-medium hover:text-red-500 rounded-xl mt-2 ">
          View All
        </button>
        <hr className="mt-7" />
        <h1 className="text-xl font-medium  py-6"> Tastes</h1>
        <div className="flex justify-center ">
          {/* First list */}
          <ul className="mr-4">
            <li
              onClick={() => handleInterestClick("🍺 Beer")}
              className={
                selectedValues.slice(0, 5).includes("🍺 Beer")
                  ? "text-center py-2 my-2 text-bs font-medium cursor-pointer rounded-full border px-4 bg-gray-700 text-white"
                  : "text-center py-2 my-2 text-bs font-medium cursor-pointer rounded-full border border-indigo-500 px-4"
              }
            >
              🍺 Beer
            </li>
            <li
              onClick={() => handleInterestClick("☕ Coffee")}
              className={
                selectedValues.slice(0, 5).includes("☕ Coffee")
                  ? "text-center py-2 my-2 text-bs font-medium cursor-pointer rounded-full border px-4 bg-gray-700 text-white"
                  : "text-center py-2 my-2 text-bs font-medium cursor-pointer rounded-full border border-indigo-500 px-4"
              }
            >
              ☕ Coffee
            </li>
            <li
              onClick={() => handleInterestClick("🍸 Gin")}
              className={
                selectedValues.slice(0, 5).includes("🍸 Gin")
                  ? "text-center py-2 my-2 text-bs font-medium cursor-pointer rounded-full border px-4 bg-gray-700 text-white"
                  : "text-center py-2 my-2 text-bs font-medium cursor-pointer rounded-full border border-indigo-500 px-4"
              }
            >
              🍸 Gin
            </li>
          </ul>

          {/* Second list */}
          <ul>
            <li
              onClick={() => handleInterestClick("🍕 Pizza")}
              className={
                selectedValues.slice(0, 5).includes("🍕 Pizza")
                  ? "text-center py-2 my-2 text-bs font-medium cursor-pointer rounded-full border px-4 bg-gray-700 text-white"
                  : "text-center py-2 my-2 text-bs font-medium cursor-pointer rounded-full border border-indigo-500 px-4"
              }
            >
              🍕 Pizza
            </li>
            <li
              onClick={() => handleInterestClick("🍱 Sushi")}
              className={
                selectedValues.slice(0, 5).includes("🍱 Sushi")
                  ? "text-center py-2 my-2 text-bs font-medium cursor-pointer rounded-full border px-4 bg-gray-700 text-white"
                  : "text-center py-2 my-2 text-bs font-medium cursor-pointer rounded-full border border-indigo-500 px-4"
              }
            >
              🍱 Sushi
            </li>
          </ul>
        </div>
        <button className="  text-red-400 text-lg py-2 px-3 font-medium hover:text-red-500 rounded-xl mt-2 ">
          View All
        </button>
        <hr className="mt-7" />
        <h1 className="text-xl font-medium  py-4"> Music</h1>
        <div className="flex justify-center ">
          {/* First list */}
          <ul className="mr-4">
            <li
              onClick={() => handleInterestClick("🎵 Classical")}
              className={
                selectedValues.slice(0, 5).includes("🎵 Classical")
                  ? "text-center py-2 my-2 text-bs font-medium cursor-pointer rounded-full border px-4 bg-gray-700 text-white"
                  : "text-center py-2 my-2 text-bs font-medium cursor-pointer rounded-full border border-indigo-500 px-4"
              }
            >
              🎵 Classical
            </li>
            <li
              onClick={() => handleInterestClick("🎵 Country")}
              className={
                selectedValues.slice(0, 5).includes("🎵 Country")
                  ? "text-center py-2 my-2 text-bs font-medium cursor-pointer rounded-full border px-4 bg-gray-700 text-white"
                  : "text-center py-2 my-2 text-bs font-medium cursor-pointer rounded-full border border-indigo-500 px-4"
              }
            >
              🎵 Country
            </li>
            <li
              onClick={() => handleInterestClick("🎵 EDM")}
              className={
                selectedValues.slice(0, 5).includes("🎵 EDM")
                  ? "text-center py-2 my-2 text-bs font-medium cursor-pointer rounded-full border px-4 bg-gray-700 text-white"
                  : "text-center py-2 my-2 text-bs font-medium cursor-pointer rounded-full border border-indigo-500 px-4"
              }
            >
              🎵 EDM
            </li>
            <li
              onClick={() => handleInterestClick("🎵 Reggae")}
              className={
                selectedValues.slice(0, 5).includes("🎵 Reggae")
                  ? "text-center py-2 my-2 text-bs font-medium cursor-pointer rounded-full border px-4 bg-gray-700 text-white"
                  : "text-center py-2 my-2 text-bs font-medium cursor-pointer rounded-full border border-indigo-500 px-4"
              }
            >
              🎵 Reggae
            </li>
          </ul>

          {/* Second list */}
          <ul>
            <li
              onClick={() => handleInterestClick("🎵 Hip Hop")}
              className={
                selectedValues.slice(0, 5).includes("🎵 Hip Hop")
                  ? "text-center py-2 my-2 text-bs font-medium cursor-pointer rounded-full border px-4 bg-gray-700 text-white"
                  : "text-center py-2 my-2 text-bs font-medium cursor-pointer rounded-full border border-indigo-500 px-4"
              }
            >
              🎵 Hip Hop
            </li>
            <li
              onClick={() => handleInterestClick("🎵 Pop")}
              className={
                selectedValues.slice(0, 5).includes("🎵 Pop")
                  ? "text-center py-2 my-2 text-bs font-medium cursor-pointer rounded-full border px-4 bg-gray-700 text-white"
                  : "text-center py-2 my-2 text-bs font-medium cursor-pointer rounded-full border border-indigo-500 px-4"
              }
            >
              🎵 Pop
            </li>
            <li
              onClick={() => handleInterestClick("🎵 Punk Music")}
              className={
                selectedValues.slice(0, 5).includes("🎵 Punk Music")
                  ? "text-center py-2 my-2 text-bs font-medium cursor-pointer rounded-full border px-4 bg-gray-700 text-white"
                  : "text-center py-2 my-2 text-bs font-medium cursor-pointer rounded-full border border-indigo-500 px-4"
              }
            >
              🎵 Punk Music
            </li>
            <li
              onClick={() => handleInterestClick("🎵 Rock N Roll")}
              className={
                selectedValues.slice(0, 5).includes("🎵 Rock N Roll")
                  ? "text-center py-2 my-2 text-bs font-medium cursor-pointer rounded-full border px-4 bg-gray-700 text-white"
                  : "text-center py-2 my-2 text-bs font-medium cursor-pointer rounded-full border border-indigo-500 px-4"
              }
            >
              🎵 Rock N Roll
            </li>
          </ul>
        </div>
        <button className="  text-red-400 text-lg py-2 px-3 font-medium hover:text-red-500 rounded-xl mt-2 ">
          View All
        </button>
      </div>
    );
  }

  if (getValueType === "have to offer") {
    bodyContent = (
      <div>
        <h1 className="text-center text-xl font-medium">
          What do you have to offer?
        </h1>
        <input
          onChange={(e: any) => setInputFieldsValue(e.target.value)}
          type="text"
          name=""
          id=""
          className=" shadow-[0_0px_10px_rgba(0,0,0,0.15)] hover:shadow-[0_0px_20px_rgba(0,0,0,0.25)] outline-none px-5 py-7 rounded-full w-full my-6"
          placeholder="Describe yourself and why someone should want you as their sugar daddy."
          required
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
  if (getValueType === "looking for") {
    bodyContent = (
      <div>
        <h1 className="text-center text-xl font-medium">
          What are you looking for?
        </h1>
        <input
          onChange={(e: any) => setLookingFieldsValue(e.target.value)}
          type="text"
          name=""
          id=""
          className=" shadow-[0_0px_10px_rgba(0,0,0,0.15)] hover:shadow-[0_0px_20px_rgba(0,0,0,0.25)] outline-none px-5 py-7 rounded-full w-full my-6"
          placeholder="Describe your wants e.g. a sugar baby for fun, dinner dates, travel, and great conversation."
          required
        />
        <button
          onClick={handleLookingFieldsValue}
          className={
            lookingFieldsValue.length > 10
              ? "bg-[#00C684] text-center w-full py-4 rounded-full text-xl text-white mb-5"
              : "bg-gray-300 text-center w-full py-4 rounded-full text-xl text-white mb-5"
          }
          disabled={lookingFieldsValue.length > 10 ? false : true}
        >
          Save
        </button>
      </div>
    );
  }
  if (getValueType === "Tagline") {
    bodyContent = (
      <div>
        <h1 className="text-center text-xl font-medium">
          What’s your tagline?
        </h1>
        <input
          onChange={(e: any) => setTaglineValue(e.target.value)}
          type="text"
          name=""
          id=""
          className=" shadow-[0_0px_10px_rgba(0,0,0,0.15)] hover:shadow-[0_0px_20px_rgba(0,0,0,0.25)] outline-none px-5 py-4 rounded-full w-full my-6"
          placeholder="Write a few words to tempt"
          required
        />
        <button
          onClick={handleTaglineFieldsValue}
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
  if (getValueType === "Location") {
    bodyContent = (
      <div>
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
          />
          <BiSearch className="absolute left-3 bottom-[12.5px] h-7 w-7"></BiSearch>
        </div>
        <p className="mx-5 mt-2 mb-20">
          Use the above field to update your location.
        </p>
        <button
          onClick={handleLocationFieldsValue}
          className={
            locationValue.length > 10
              ? "bg-[#00C684] text-center w-full py-4 rounded-full text-xl text-white mb-5"
              : "bg-gray-300 text-center w-full py-4 rounded-full text-xl text-white mb-5"
          }
          disabled={locationValue.length > 10 ? false : true}
        >
          Save
        </button>
      </div>
    );
  }
  if (getValueType === "Interested") {
    bodyContent = (
      <div>
        <h1 className="text-center text-xl font-medium">
          Which are you interested in?
        </h1>
        <ul>
          <li
            onClick={handleInterestedClick}
            className={
              user?.interested === "Men"
                ? "text-center py-4 my-3 text-xl cursor-pointer rounded-full border bg-gray-700 text-white"
                : "text-center py-4 my-3 text-xl cursor-pointer rounded-full border"
            }
          >
            Men
          </li>
          <li
            onClick={handleInterestedClick}
            className={
              user?.interested === "Women"
                ? "text-center py-4 my-3 text-xl cursor-pointer rounded-full border bg-gray-700 text-white"
                : "text-center py-4 my-3 text-xl cursor-pointer rounded-full border"
            }
          >
            Women
          </li>
          <li
            onClick={handleInterestedClick}
            className={
              user?.interested === "TS"
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
