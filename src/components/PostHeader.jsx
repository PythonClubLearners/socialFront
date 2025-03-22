import { Link } from "react-router";


export function PostHeader() {
    return (
        <div className="post-header horizontal-list align-center">

            <img/>

            <div className="horizontal-list stretch">

                <div className="vertical-list">
                    <Link to="users/1/">@username</Link>
                </div>
                <h1>
                    POST LABEL
                </h1>

                <span>
                    date
                </span>

            </div>

        </div>
    );
}