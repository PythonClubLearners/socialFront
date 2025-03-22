import { PostHeader } from "./PostHeader";
import { Link } from "react-router";
import './css/PostCollection.css'

export function PostCollection() {
    return (
        <div className="post-collection">
            <PostHeader openButton={true}/>
            <PostHeader openButton={true}/>
            <PostHeader openButton={true}/>
            <PostHeader openButton={true}/>
            <PostHeader openButton={true}/>

        </div>
    );
}