import { PostHeader } from "./PostHeader";
import './css/PostCollection.css'

export function PostCollection({posts, openButton}) {

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