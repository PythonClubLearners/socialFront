import { createContext, useContext, useEffect, useState } from "react";
import { mock_all_users, mock_posts, mock_user_1 } from "./mock_data";

const UserContext = createContext(
    {
    currentUser:undefined, 
    users:undefined,
    setCurrentUser:undefined,
    setUsers:undefined,
})

export function UserContextProvider({children}){
    const [currentUser, setCurrentUser] = useState(undefined);
    const [users, setUsers] = useState({});

    const contextData = {
        currentUser,
        setCurrentUser,
        users,
        setUsers
    }


    return (
        <UserContext.Provider value={contextData}>
            {children}
        </UserContext.Provider>
    );

}

export function useUserData(userId) {
    const userContext = useContext(UserContext);

    const user = userContext.users[userId];

    function setUser(userData) {
        if (!user && userData){
            userContext.setUsers(
                {...userContext.users, userId: userData}
            )
            userContext.users[userId] = userData;
        }
    }

    useEffect(
        ()=>{
            if (user === undefined){
                setUser(
                    mock_all_users.find(
                        (v)=>(v.id===userId)
                    )
                )
            }
        }, [user]
    )

    return user;
}

export function useCurrentUser() {
    const userContext = useContext(UserContext);

    useEffect(
        ()=>{
            if (userContext.currentUser === undefined){
                useContext.setCurrentUser(
                    null//mock_user_1
                )
            }
        }, [userContext.currentUser]
    )

    return userContext.currentUser;
}

export function useAllPosts(){
    const [posts, setPosts] = useState(undefined);
    useEffect(
        ()=>{
            if (posts === undefined){
                setPosts(
                    mock_posts
                )
            }
        }
    )
    return posts;
}

export function useUserPosts(userId){
    const [posts, setPosts] = useState(undefined);
    useEffect(
        ()=>{
            if (posts === undefined){
                setPosts(
                    mock_posts
                )
            }
        }
    )
    return posts;
}
