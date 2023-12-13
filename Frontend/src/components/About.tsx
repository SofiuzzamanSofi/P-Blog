"use client";

import { BsPlus, BsPlusSquareDotted } from "react-icons/bs";
import { useState, useContext } from "react";
import {
  MdCastForEducation,
  MdFavorite,
  MdLocalOffer,
  MdModeEdit,
  MdOutlineSmokingRooms,
  MdVerified,
} from "react-icons/md";
import axios from "axios";
import { LiaRunningSolid, LiaSortAmountDownAltSolid } from "react-icons/lia";
import { CgGirl } from "react-icons/cg";
import { IoEyeOutline, IoFootball } from "react-icons/io5";
import { GiPencilRuler, GiRecycle, GiTakeMyMoney } from "react-icons/gi";
import { CiEdit, CiLineHeight } from "react-icons/ci";
import { BiDrink } from "react-icons/bi";
import { RiPriceTagLine } from "react-icons/ri";
import { FaLocationArrow } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { useAuth } from "@/provider/AuthProvider";
import Link from "next/link";

import useProfileDetailsModal from "./Hooks/useProfileDetailsModal";
import ProfileDetailsModal from "./Modals/ProfileDetailsModal";

interface AboutProps {
}

const About: React.FC<AboutProps> = () => {

  // auth
  const { user, setUserReload } = useAuth();
  // instant loading.
  const [loadingStates, setLoadingStates] = useState(false);

  const email = user?.email;
  const profileDetailsModal = useProfileDetailsModal();
  const [getValueType, setGetValueType] = useState<string>("");

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const imageData = new FormData();
    setLoadingStates(true);
    imageData.set("key", `${process.env.NEXT_PUBLIC_IMAGEBB_KEY}`);
    imageData.append("image", event.target.files![0]);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_IMAGEBB_URL}`,
        imageData
      );
      const imageUrl = response?.data?.data?.display_url;
      if (imageUrl) {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER}/user/profile/pic/single/a/b/${email}`,
          {
            method: "PUT",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({ photoURL: imageUrl }),
          }
        );
        const result = await res.json();
        if (result.message === "User updated successfully") {
          setUserReload((prev) => !prev);
          setLoadingStates(false);
        }
      }
    } catch (error) {
      setLoadingStates(false);
    }
  };

  const handleGetValue = (e: string) => {
    setGetValueType(e);
    profileDetailsModal.onOpen();
  };

  console.log('user-on-profile-about-:', user);


  return (
    <div className="sm:my-10">
      <div className="md:flex gap-10">
        <div className="md:w-[320px] ">
          <div>
            {user?.photoURL ? (
              <>
                {loadingStates ? (
                  <div
                    className="w-full h-72 shadow-[0_0px_10px_rgba(0,0,0,0.15)]
              hover:shadow-[0_0px_20px_rgba(0,0,0,0.26)] rounded-xl flex justify-center items-center"
                  >
                    <div className="h-full w-full flex justify-center items-center">
                      <span className="loading loading-bars loading-lg"></span>
                    </div>
                  </div>
                ) :
                  (
                    <div className="relative">
                      <img
                        className="w-full md:w-[240px] lg:w-[260px] h-full object-cover rounded-lg"
                        src={user?.photoURL}
                        alt=""
                      />
                      <button className="absolute right-0 bottom-1 bg-white p-2 rounded-full cursor-pointer">
                        <label htmlFor="fileInput">
                          <MdModeEdit className="h-6 w-6 cursor-pointer" />
                        </label>
                        <input
                          type="file"
                          id="fileInput"
                          onChange={(event) => handleFileChange(event)}
                          style={{ display: "none" }}
                          multiple={false}
                        />
                      </button>
                    </div>
                  )}
              </>
            ) : (
              <>
                {loadingStates ? (
                  <div
                    className="w-full h-72 shadow-[0_0px_10px_rgba(0,0,0,0.15)]
              hover:shadow-[0_0px_20px_rgba(0,0,0,0.26)] rounded-xl flex justify-center items-center"
                  >
                    <div className="h-full w-full flex justify-center items-center">
                      <span className="loading loading-bars loading-lg"></span>
                    </div>
                  </div>
                ) :
                  (
                    <div className="w-full md:w-[240px] lg:w-[260px] h-[260px] shadow-[0_0px_10px_rgba(0,0,0,0.15)] hover:shadow-[0_0px_20px_rgba(0,0,0,0.26)] rounded-xl flex justify-center items-center">
                      <label htmlFor="fileInput">
                        <BsPlusSquareDotted className="w-10 h-10 text-[#00C684] cursor-pointer" />
                      </label>
                      <input
                        type="file"
                        id="fileInput"
                        onChange={(event) => handleFileChange(event)}
                        style={{ display: "none" }}
                        multiple={false}
                      />
                    </div>
                  )}
              </>
            )}
          </div>
          <div className="my-10 ">
            <h6 className="text-[12px] uppercase">{user?.gender}</h6>
            <h1 className="text-[24px] font-medium">{user?.displayName}</h1>
            <Link
              href={`/profile/${user?._id}`}
            >
              <button className="shadow-[0_0px_10px_rgba(0,0,0,0.15)] rounded-lg px-3 py-1 text-[13px] my-4">
                View Profile
              </button>
            </Link>
            <div className="flex justify-between items-center gap-4 p-0">
              <progress
                className="progress progress-success w-full bg-[#f1f1f180]"
                value={
                  user ?
                    "10"
                    :
                    "100"
                }
                max="100"
              ></progress>
            </div>
            <p className="text-[12px] mt-2">
              Profile: 100
            </p>
          </div>
          <div className="bg-[#F2FCF9] rounded-lg p-6">
            <div className="flex items-center justify-between">
              <p className="text-[18px] font-medium">Get Verified</p>
              <MdVerified className="w-6 h-6 text-[#18BB9C]" />
            </div>
            <p className="text-[14px] my-5">
              Prove you’re not too good to be true. It just takes a few seconds!
            </p>
            <button
              className="shadow-[0_0px_10px_rgba(0,0,0,0.15)] rounded-lg px-6 py-3 text-[13px] bg-white"
              disabled
            >

              Get Verified
            </button>
          </div>
        </div>

        <div className="w-full">

          {/* // physical  */}
          <h3 className="text-[20px] font-medium mb-4">Physical</h3>
          <div className="grid lg:grid-cols-2 gap-x-8 gap-y-4 mb-14">

            {/* body type */}
            <div
              onClick={() => handleGetValue("Body Type")}
              className="flex justify-between items-center gap-3 shadow-[0_0px_10px_rgba(0,0,0,0.15)] hover:shadow-[0_0px_20px_rgba(0,0,0,0.25)] rounded-full px-6 py-4"
            >
              <div className="flex justify-start items-center  ">
                <p className="text-[14px] sm:text-[18px] font-medium flex justify-start items-center gap-x-2">
                  <LiaRunningSolid className="w-7 h-7 text-blue-800" />
                  Body Type
                </p>
                {user?.bodyType && (
                  <p className="text-[14px] sm:text-[18px]  font-semibold text-blue-800">
                    : {user?.bodyType}
                  </p>
                )}
              </div>

              <button className="inset-0" type="button">
                <BsPlus className="w-5 h-5 sm:w-8 sm:h-8 hover:text-[#21558D]" />
              </button>
            </div>

            {/* Hair Color */}
            <div
              onClick={() => handleGetValue("Hair Color")}
              className="flex justify-between items-center gap-3 shadow-[0_0px_10px_rgba(0,0,0,0.15)] hover:shadow-[0_0px_20px_rgba(0,0,0,0.25)] rounded-full px-6 py-4"
            >
              <div className="flex justify-start items-center">
                <p className="text-[14px] sm:text-[18px] font-medium flex justify-start items-center gap-2">
                  <CgGirl className="w-7 h-7 text-blue-800" />
                  Hair Color
                </p>
                {user?.hair_color && (
                  <p className="text-[14px] sm:text-[18px] font-semibold text-blue-800">
                    : {user?.hair_color}
                  </p>
                )}
              </div>

              <button className="inset-0" type="button">
                <BsPlus className="w-5 h-5 sm:w-8 sm:h-8 hover:text-[#21558D]" />
              </button>
            </div>

            {/* Eye Color */}
            <div
              onClick={() => handleGetValue("Eye Color")}
              className="flex justify-between items-center gap-3 shadow-[0_0px_10px_rgba(0,0,0,0.15)] hover:shadow-[0_0px_20px_rgba(0,0,0,0.25)] rounded-full px-6 py-4"
            >
              <div className="flex justify-start items-center">
                <p className="text-[14px] sm:text-[18px] font-medium flex justify-start items-center gap-2">
                  <IoEyeOutline className="w-7 h-7 text-blue-800" />
                  Eye Color
                </p>
                {user?.eye_color && (
                  <p className="text-[14px] sm:text-[18px] font-semibold text-blue-800">
                    : {user?.eye_color}
                  </p>
                )}
              </div>

              <button className="inset-0" type="button">
                <BsPlus className="w-5 h-5 sm:w-8 sm:h-8 hover:text-[#21558D]" />
              </button>
            </div>

            {/* Piercings */}
            <div
              onClick={() => handleGetValue("Piercings")}
              className="flex justify-between items-center gap-3 shadow-[0_0px_10px_rgba(0,0,0,0.15)] hover:shadow-[0_0px_20px_rgba(0,0,0,0.25)] rounded-full px-6 py-4"
            >
              <div className="flex justify-start items-center">
                <p className="text-[14px] sm:text-[18px] font-medium flex justify-start items-center gap-2">
                  <GiRecycle className="w-7 h-7 text-blue-800" />
                  Piercings
                </p>
                {user?.piercings && (
                  <p className="text-[14px] sm:text-[18px] font-semibold text-blue-800">
                    : {user?.piercings}
                  </p>
                )}
              </div>

              <button className="inset-0" type="button">
                <BsPlus className="w-5 h-5 sm:w-8 sm:h-8 hover:text-[#21558D]" />
              </button>
            </div>

            {/* Tattos */}
            <div
              onClick={() => handleGetValue("Tattoos")}
              className="flex justify-between items-center gap-3 shadow-[0_0px_10px_rgba(0,0,0,0.15)] hover:shadow-[0_0px_20px_rgba(0,0,0,0.25)] rounded-full px-6 py-4"
            >
              <div className="flex justify-start items-center ">
                <p className="text-[14px] sm:text-[18px] font-medium flex justify-start items-center gap-2">
                  <GiPencilRuler className="w-7 h-7 text-blue-800" />
                  Tattoos
                </p>
                {user?.tattoos && (
                  <p className="text-[14px] sm:text-[18px] font-semibold text-blue-800">
                    : {user?.tattoos}
                  </p>
                )}
              </div>

              <button className="inset-0" type="button">
                <BsPlus className="w-5 h-5 sm:w-8 sm:h-8 hover:text-[#21558D]" />
              </button>
            </div>

            {/* Height */}
            <div
              onClick={() => handleGetValue("Height")}
              className="flex justify-between items-center gap-3 shadow-[0_0px_10px_rgba(0,0,0,0.15)] hover:shadow-[0_0px_20px_rgba(0,0,0,0.25)] rounded-full px-6 py-4"
            >
              <div className="flex justify-start items-center">
                <p className="text-[14px] sm:text-[18px] font-medium flex justify-start items-center gap-2">
                  <CiLineHeight className="w-7 h-7 text-blue-800" />
                  Height
                </p>
                {user?.height && (
                  <p className="text-[14px] sm:text-[18px] font-semibold text-blue-800">
                    : {user?.height}
                  </p>
                )}
              </div>

              <button className="inset-0" type="button">
                <BsPlus className="w-5 h-5 sm:w-8 sm:h-8 hover:text-[#21558D]" />
              </button>
            </div>
          </div>

          {/* // Life Style  */}
          <h3 className="text-[20px] font-medium mb-4">Life Style</h3>
          <div className="grid lg:grid-cols-2 gap-x-8 gap-y-4 mb-14">

            {/* Drinking */}
            <div
              onClick={() => handleGetValue("Drinking")}
              className="flex justify-between items-center gap-3 shadow-[0_0px_10px_rgba(0,0,0,0.15)] hover:shadow-[0_0px_20px_rgba(0,0,0,0.25)] rounded-full px-6 py-4"
            >
              <div className="flex justify-start items-center  ">
                <p className="text-[14px] sm:text-[18px] font-medium flex justify-start items-center gap-2">
                  <BiDrink className="w-7 h-7 text-blue-800" />
                  Drinking
                </p>
                {user?.drinking && (
                  <p className="text-[14px] sm:text-[18px] font-semibold text-blue-800">
                    : {user?.drinking}
                  </p>
                )}
              </div>

              <button className="inset-0" type="button">
                <BsPlus className="w-5 h-5 sm:w-8 sm:h-8 hover:text-[#21558D]" />
              </button>
            </div>

            {/* Yearly Income */}
            <div
              onClick={() => handleGetValue("Yearly Income")}
              className="flex justify-between items-center gap-3 shadow-[0_0px_10px_rgba(0,0,0,0.15)] hover:shadow-[0_0px_20px_rgba(0,0,0,0.25)] rounded-full px-6 py-4"
            >
              <div className="flex justify-start items-center">
                <p className="text-[14px] sm:text-[18px] font-medium flex justify-start items-center gap-2">
                  <GiTakeMyMoney className="w-7 h-7 text-blue-800" />
                  Yearly Income
                </p>
                {user?.yearly_income && (
                  <p className="text-[14px] sm:text-[18px] font-semibold text-blue-800">
                    : {user?.yearly_income}
                  </p>
                )}
              </div>

              <button className="inset-0" type="button">
                <BsPlus className="w-5 h-5 sm:w-8 sm:h-8 hover:text-[#21558D]" />
              </button>
            </div>

            {/* Smoking */}
            <div
              onClick={() => handleGetValue("Smoking")}
              className="flex justify-between items-center gap-3 shadow-[0_0px_10px_rgba(0,0,0,0.15)] hover:shadow-[0_0px_20px_rgba(0,0,0,0.25)] rounded-full px-6 py-4"
            >
              <div className="flex justify-start items-center">
                <p className="text-[14px] sm:text-[18px] font-medium flex justify-start items-center gap-2">
                  <MdOutlineSmokingRooms className="w-7 h-7 text-blue-800" />
                  Smoking
                </p>
                {user?.smoking && (
                  <p className="text-[14px] sm:text-[18px] font-semibold text-blue-800">
                    : {user?.smoking}
                  </p>
                )}
              </div>

              <button className="inset-0" type="button">
                <BsPlus className="w-5 h-5 sm:w-8 sm:h-8 hover:text-[#21558D]" />
              </button>
            </div>

            {/* Net Worth */}
            <div
              onClick={() => handleGetValue("Net Worth")}
              className="flex justify-between items-center gap-3 shadow-[0_0px_10px_rgba(0,0,0,0.15)] hover:shadow-[0_0px_20px_rgba(0,0,0,0.25)] rounded-full px-6 py-4"
            >
              <div className="flex justify-start items-center">
                <p className="text-[14px] sm:text-[18px] font-medium flex justify-start items-center gap-2">
                  <LiaSortAmountDownAltSolid className="w-7 h-7 text-blue-800" />
                  Net Worth
                </p>
                {user?.net_worth && (
                  <p className="text-[14px] sm:text-[18px] font-semibold text-blue-800">
                    : {user?.net_worth}
                  </p>
                )}
              </div>

              <button className="inset-0" type="button">
                <BsPlus className="w-5 h-5 sm:w-8 sm:h-8 hover:text-[#21558D]" />
              </button>
            </div>

            {/* Education */}
            <div
              onClick={() => handleGetValue("Education")}
              className="flex justify-between items-center gap-3 shadow-[0_0px_10px_rgba(0,0,0,0.15)] hover:shadow-[0_0px_20px_rgba(0,0,0,0.25)] rounded-full px-6 py-4"
            >
              <div className="flex justify-start items-center">
                <p className="text-[14px] sm:text-[18px] font-medium flex justify-start items-center gap-2">
                  <MdCastForEducation className="w-7 h-7 text-blue-800" />
                  Education
                </p>
                {user?.education && (
                  <p className="text-[14px] sm:text-[18px] font-semibold text-blue-800">
                    : {user?.education}
                  </p>
                )}
              </div>

              <button className="inset-0" type="button">
                <BsPlus className="w-5 h-5 sm:w-8 sm:h-8 hover:text-[#21558D]" />
              </button>
            </div>
          </div>

          {/* // Interest */}
          <h3 className="text-[20px] font-medium mb-4">Interest</h3>

          {/* // interest from database */}
          <div className="my-5">
            {user?.interest && (
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
                {user?.interest.map((interest: string | any[], index: number) => (
                  <h2
                    className="border py-2 px-2 rounded-full text-center"
                    key={index}
                  >
                    {interest}
                  </h2>
                ))}
              </div>
            )}
          </div>

          {/* interested edit */}
          <div className="grid lg:grid-cols-2 gap-x-8 gap-y-4 mb-14">
            <div
              onClick={(e: React.MouseEvent<HTMLParagraphElement>) =>
                handleGetValue(e.currentTarget.textContent || "")
              }
              className="flex justify-between items-center gap-3 shadow-[0_0px_10px_rgba(0,0,0,0.15)] hover:shadow-[0_0px_20px_rgba(0,0,0,0.25)] rounded-full px-6 py-4"
            >
              <div className="flex justify-start items-center gap-3">
                {user?.interest?.length ? (
                  <p className="text-[14px] sm:text-[18px] font-medium flex justify-start items-center gap-3">
                    <CiEdit className="w-7 h-7 text-blue-800" />
                    Edit your interest
                  </p>
                ) : (
                  <p className="text-[14px] sm:text-[18px] font-medium flex justify-start items-center gap-3">
                    <IoFootball className="w-7 h-7 text-blue-800" />
                    Add your Interest
                  </p>
                )}
              </div>
              <button className="inset-0" type="button">
                {user?.interest ? (
                  <CiEdit className="w-7 h-7 text-blue-800" />
                ) : (
                  <BsPlus className="w-5 h-5 sm:w-8 sm:h-8 hover:text-[#21558D]" />
                )}
              </button>
            </div>
          </div>

          {/* // BIO  */}
          <h3 className="text-[20px] font-medium mb-4">Bio</h3>
          <div className="grid lg:grid-cols-1 gap-x-8 gap-y-4 mb-14">

            {/* // offer  */}
            <div
              onClick={() => handleGetValue("have to offer")}
              className="flex justify-between items-center gap-3 shadow-[0_0px_10px_rgba(0,0,0,0.15)] hover:shadow-[0_0px_20px_rgba(0,0,0,0.25)] rounded-3xl px-6 py-7"
            >
              <div className="flex justify-start items-center gap-3">
                <div>
                  <p className="text-[14px] sm:text-[18px] font-medium flex justify-start items-center gap-3 mb-4">
                    <MdFavorite className="w-7 h-7 text-blue-800" /> What do you
                    have to offer?
                  </p>
                  <p>
                    {user?.offer && (
                      <span className="pt-2">{user?.offer}</span>
                    )}
                  </p>
                </div>
              </div>

              <button className="inset-0" type="button">
                <CiEdit className="w-7 h-7 text-blue-800" />
              </button>
            </div>
          </div>

          {/* // looking for  */}
          <div className="grid lg:grid-cols-1 gap-x-8 gap-y-4 mb-14">
            <div
              onClick={() => handleGetValue("looking for")}
              className="flex justify-between items-center gap-3 shadow-[0_0px_10px_rgba(0,0,0,0.15)] hover:shadow-[0_0px_20px_rgba(0,0,0,0.25)] rounded-3xl px-6 py-7"
            >
              <div>
                <div className="flex justify-start items-center gap-3">
                  <div>
                    <p className="text-[14px] sm:text-[18px] font-medium flex justify-start items-center gap-3  mb-4">
                      <MdLocalOffer className="w-7 h-7 text-blue-800" /> What
                      are you looking for?
                    </p>
                    <p>
                      {user?.looking_for && (
                        <span className="pt-2">{user?.looking_for}</span>
                      )}
                    </p>
                  </div>
                </div>
              </div>
              <button className="inset-0" type="button">
                <CiEdit className="w-7 h-7 text-blue-800" />
              </button>
            </div>
          </div>

          {/* // tag line  */}
          <div className="grid lg:grid-cols-1 gap-x-8 gap-y-4 mb-14">
            <div
              onClick={() => handleGetValue("Tagline")}
              className="flex justify-between items-center gap-3 shadow-[0_0px_10px_rgba(0,0,0,0.15)] hover:shadow-[0_0px_20px_rgba(0,0,0,0.25)] rounded-3xl px-6 py-7"
            >
              <div className="flex justify-start items-center gap-3">
                <div>
                  <p className="text-[14px] sm:text-[18px] font-medium flex justify-start items-center gap-3 mb-4">
                    <RiPriceTagLine className="w-7 h-7 text-blue-800" /> Tagline
                  </p>
                  <p>
                    {user?.tagLine && (
                      <span className="pt-2">{user?.tagLine}</span>
                    )}
                  </p>
                </div>
              </div>
              <button className="inset-0" type="button">
                <CiEdit className="w-7 h-7 text-blue-800" />
              </button>
            </div>
          </div>

          <h3 className="text-[20px] font-medium mb-4">Basics</h3>
          <div className="grid lg:grid-cols-2 gap-x-8 gap-y-4 mb-14">

            {/* Location */}
            <div
              onClick={() => handleGetValue("Location")}
              className="flex justify-between items-center gap-3 shadow-[0_0px_10px_rgba(0,0,0,0.15)] hover:shadow-[0_0px_20px_rgba(0,0,0,0.25)] rounded-3xl px-6 py-4"
            >
              <div className="flex justify-start items-center">
                <p className="text-[14px] sm:text-[18px] font-medium flex justify-start items-center gap-3">
                  <FaLocationArrow className="w-6 h-6 text-blue-800" />
                  Location
                </p>
                {user?.location && (
                  <p className="text-[14px] sm:text-[18px] font-semibold text-blue-800">
                    : {user?.location}
                  </p>
                )}
              </div>

              <button className="inset-0" type="button">
                <CiEdit className="w-7 h-7 text-blue-800" />
              </button>
            </div>

            {/* Interested */}
            <div
              onClick={() => handleGetValue("Interested")}
              className="flex justify-between items-center gap-3 shadow-[0_0px_10px_rgba(0,0,0,0.15)] hover:shadow-[0_0px_20px_rgba(0,0,0,0.25)] rounded-full px-6 py-4"
            >
              <div className="flex justify-start items-center ">
                <p className="text-[14px] sm:text-[18px] font-medium flex justify-start items-center gap-3">
                  <AiOutlineLike className="w-7 h-7 text-blue-800" />
                  Interested
                </p>
                {user?.interested && (
                  <p className="text-[14px] sm:text-[18px] font-semibold text-blue-800">
                    : {user?.interested}
                  </p>
                )}
              </div>

              <button className="inset-0" type="button">
                <CiEdit className="w-7 h-7 text-blue-800" />
              </button>
            </div>

          </div>
        </div>
      </div>
      <ProfileDetailsModal getValueType={getValueType} />
    </div>
  );
};

export default About;
