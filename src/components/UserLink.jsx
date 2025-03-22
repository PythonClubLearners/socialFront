import { Link } from "react-router";
import UserDefaultImage from '../img/user_default.png'
import './css/UserLink.css'
import { useUserData } from "../api/dataHooks";

export function UserLink({userId, acceptButton}){

    const user = useUserData(userId);
    
    if (!user){
        return null;
    }

    return (
        <div className="user-link horizontal-list align-center">

            <Link to={`/users/${user.id}`}>
                <img className="avatar rounded" src={UserDefaultImage}/>
            </Link>

            <div className="horizontal-list stretch xfill">

                <div className="vertical-list">
                    <Link to={`/users/${user.id}`} className="username"><h3>@{user.username}</h3></Link>
                    <h1 className="firstLastName">
                        {user.firstName} {user.lastName}
                    </h1>
                </div>

                <div className="vertical-list">
                    {acceptButton && <button className="primary">Принять</button>}
                </div>
            </div>

        </div>
    );
}