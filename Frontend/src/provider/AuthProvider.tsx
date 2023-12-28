"use client"

import { auth } from '@/firebase/firebase.config';
import { UserDataTypes } from '@/typesInterface/types';
import { onAuthStateChanged } from 'firebase/auth';
import { FC, createContext, useContext, useEffect, useState } from 'react';

type AuthContextType = {
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;   // loading state
    user: UserDataTypes | null;  // userDetail
    setUser: React.Dispatch<React.SetStateAction<UserDataTypes | null>>;
    setUserReload: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);


const AuthProvider = (props: React.PropsWithChildren) => {

    // loading state
    const [loading, setLoading] = useState<boolean>(true);

    // const [loading, setLoading] = useState<boolean>(false);
    const [user, setUser] = useState<UserDataTypes | null>(null);
    const [userReload, setUserReload] = useState<boolean>(false);

    // // every time relode and get user/register user from DATABASE 
    useEffect(() => {
        const fetchData = async () => {
            onAuthStateChanged(auth, async (user) => {
                if (user?.email) {
                    setLoading(true);
                    const resDataFromDb = await fetch(
                        `${process.env.NEXT_PUBLIC_SERVER}/user/me`,
                        {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(
                                {
                                    email: user?.email,
                                }
                            ),
                        }
                    );
                    const userData = await resDataFromDb.json();
                    setLoading(false);
                    setUser(userData?.data);
                }
                else {
                    setUser(null);
                    setLoading(false);
                }
            });
        };
        fetchData();
    }, [userReload]);

    const contextValue = {
        loading, setLoading,
        user, setUser,
        setUserReload
    }

    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    );
};

// export authContext to use easily
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};

export default AuthProvider;