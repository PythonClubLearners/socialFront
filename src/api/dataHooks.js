import { useEffect, useState } from "react";
import { mock_posts } from "./mock_data";

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
