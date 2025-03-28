import { useContext, useEffect, useState } from "react";
import { mock_all_users, mock_posts } from "./mock_data";
import {UserContext} from './UserContext'
import { Post, User } from "./types";

export function useUserData(userId:number) {
    const userContext = useContext(UserContext);

    // if (userContext.users === undefined || !userContext.setUsers){
    //     return undefined;
    // }

    const user = userContext.users? userContext.users[userId]: undefined;

    function setUser(userData?: User|null) {

        if (!userContext.setUsers || !userContext.users){
            return;
        }

        if (!user && userData){
            userContext.setUsers(
                {...userContext.users, [userId]: userData}
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
    const [posts, setPosts] = useState<Post[]|undefined>(undefined);
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

export function useUserPosts(userId:number){
    const [posts, setPosts] = useState<Post[]|undefined>(undefined);
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

export function usePost(postId:number){
    const [post, setPost] = useState<Post|null|undefined>(undefined);

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