import { Link } from "react-router";
import UserDefaultImage from '../img/user_default.png'
import './css/PostHeader.css'

export function PostHeader() {
    return (
        <div className="post-header horizontal-list align-center">

            <Link to="users/1/">
                <img className="avatar" src={UserDefaultImage}/>
            </Link>

            <div className="horizontal-list stretch xfill">

                <div className="vertical-list">
                    <Link to="users/1/" className="username"><h3>@username</h3></Link>
                    <h1 className="post-label">
                        POST LABEL
                    </h1>
                </div>

                <span>
                    19 января 2047г
                </span>

            </div>

        </div>
    );
}