import { useContext, useEffect, useState } from "react";
import { mock_all_users, mock_posts } from "./mock_data";
import {UserContext} from './UserContext'

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

export function usePost(postId){
    const [post, setPost] = useState(undefined);

    useEffect(
        () =>{
            if (post===undefined){
                setPost(mock_posts.find(
                    (p)=>p.id===postId
                ) || null)
            }
        }, [post]
    );

    return post;
}