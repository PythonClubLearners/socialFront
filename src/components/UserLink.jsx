import { Link } from "react-router";
import UserDefaultImage from '../img/user_default.png'
import './css/UserLink.css'

export function UserLink({acceptButton}){
    return (
        <div className="user-link horizontal-list align-center">

            <Link to="/users/1">
                <img className="avatar rounded" src={UserDefaultImage}/>
            </Link>

            <div className="horizontal-list stretch xfill">

                <div className="vertical-list">
                    <Link to="/users/1" className="username"><h3>@username</h3></Link>
                    <h1 className="firstLastName">
                        ИМЯ ФАМИЛИЯ
                    </h1>
                </div>

                <div className="vertical-list">
                    {acceptButton && <button className="primary">Принять</button>}
                </div>
            </div>

        </div>
    );
}