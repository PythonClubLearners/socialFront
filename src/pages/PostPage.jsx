import { useParams } from "react-router";
import { MultiLineText } from "../components/MultiLineText";
import { PostHeader } from "../components/PostHeader";

import defaultPostImage from '../img/post_default.png'

import './css/PostPage.css'
import { usePost } from "../api/dataHooks";
import { NotFound } from "./NotFound";

export function PostPage(){

    const {id:postId} = useParams();
    const post = usePost(Number(postId));

    if (post === null){
        return <NotFound/>
    }
    else if (post === undefined){
        return <h1>Идет загрузка поста</h1>
    }

    return (
        <div className="page post vertical-list">
            <PostHeader post={post}/>
            <div className="post-content vertical-list">
                {post.image && <img className="post-image" src={defaultPostImage}/>}
                <MultiLineText text={post.description}/>
            </div>

        </div>
    );
}