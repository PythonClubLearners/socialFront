import { Link } from "react-router";
import UserDefaultImage from '../img/user_default.png';
import './css/PostHeader.css';
import {useUserData} from '../api/dataHooks';

export function PostHeader({post, openButton}) {

    const author = useUserData(post.author);

    const authorUsername = author?.username || "???";


    return (
        <div className="post-header horizontal-list align-center">

            <Link to={"/users/"+post.author}>
                <img className="avatar rounded" src={UserDefaultImage}/>
            </Link>

            <div className="horizontal-list stretch xfill">

                <div className="vertical-list">
                    <Link to={"/users/"+post.author} className="username"><h3>@{authorUsername}</h3></Link>
                    <h1 className="post-label">
                        {post.title}
                    </h1>
                </div>

                <div className="vertical-list">
                    <span>
                        19 января 2047г
                    </span>
                    {openButton && <Link to={`/posts/${post.id}/`} className="primary">Открыть</Link>}
                </div>


            </div>

        </div>
    );
}