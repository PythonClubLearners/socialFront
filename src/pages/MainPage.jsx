import { useAllPosts } from "../api/dataHooks";
import { PostCollection } from "../components/PostCollection";

export function MainPage(){

    const posts = useAllPosts();

    return (
        <div className="page main">
            <PostCollection posts={posts} openButton={true}/>
        </div>
    );
}