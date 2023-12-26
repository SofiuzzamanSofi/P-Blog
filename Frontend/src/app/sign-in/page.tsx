"use client"

import Image from "next/image";
import toast from 'react-hot-toast';
import React, { useEffect } from "react";
import googleIcon from "../../assets/google.svg";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "@/firebase/firebase.config";
import { useAuth } from "@/provider/AuthProvider";

const SignIn = () => {

  // auth
  const { setUser, user } = useAuth();

  // 
  const handleGoogleLogin = async () => {
    try {
      toast.loading("Please wait...", { id: "user-creating" });
      const provider = new GoogleAuthProvider();
      const responseData = await signInWithPopup(auth, provider);
      if (responseData?.user?.email) {
        const resDataFromDb = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER}/user/signin-social-media`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(
              {
                email: responseData?.user?.email,
                displayName: responseData?.user?.displayName,
                emailVerified: responseData?.user?.emailVerified,
                photoURL: responseData?.user?.photoURL,
              }
            ),
          }
        );
        const userData = await resDataFromDb.json();
        setUser(userData?.data);
        toast.success("Sign-In Success.", { id: "user-creating" });
      };
    } catch (error) {
      toast.error("Error ", { id: "user-creating" })
    }
  };

  useEffect(() => {
    if (user?._id) {
      window.location.href = `/profile/${user._id}`;
    };
  }, [user]);

  return (
    <div className='min-h-[calc(100vh-2rem)] flex items-center justify-center gap-4'>
      <button
        onClick={handleGoogleLogin}
        className="flex justify-between items-center border min-w-[15.5rem] px-4 py-2 rounded-md"
      >
        <Image src={googleIcon} className='h-8 w-8' alt="google-login-icon" />
        <p className='font-bold'>SIGN IN</p>
      </button>
    </div>
  );
};

export default SignIn;