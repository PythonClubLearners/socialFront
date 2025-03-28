import { Post } from "../api/types";
import { PostHeader } from "./PostHeader";
import './css/PostCollection.css'

export function PostCollection({posts, openButton}:{posts:Post[], openButton:boolean}) {

    if (posts === undefined){
        return <h1>Идет загрузка постов...</h1>
    }

    return (
        <div className="post-collection">
            {
                posts.map(
                    (post)=> (<PostHeader key={post.id} post={post} openButton={openButton}/>)
                )
            }
        </div>
    );
}