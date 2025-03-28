import React, { createContext, useEffect, useState } from "react";
import { User } from "./types";
import { mock_user_1 } from "./mock_data";

type UsersCache = {[index:number]:User};
type SetStateAction<T> = React.Dispatch<React.SetStateAction<T>>

interface UserContextData{
    currentUser?:User|null, 
    users?:UsersCache,
    setCurrentUser?:SetStateAction<User|null|undefined>,
    setUsers?:SetStateAction<UsersCache>,
}


export const UserContext = createContext<UserContextData>({})

export function UserContextProvider({children}:{children:React.ReactElement}){
    const [currentUser, setCurrentUser] = useState<User|null|undefined>(undefined);
    const [users, setUsers] = useState<UsersCache>({});

    const contextData: UserContextData = {
        currentUser,
        setCurrentUser,
        users,
        setUsers
    }


    useEffect(
        ()=>{
            if (currentUser === undefined){
                setCurrentUser(
                    localStorage.getItem("isAuthDebug")?mock_user_1:null
                )
            }
        }, [currentUser]
    )


    return (
        <UserContext.Provider value={contextData}>
            {children}
        </UserContext.Provider>
    );

}
