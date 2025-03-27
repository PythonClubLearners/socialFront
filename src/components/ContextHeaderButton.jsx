import { Link } from "react-router";
import './css/ContextHeaderButton.css'
import { useCurrentUser } from "../api/dataHooks";
import UserDefaultImage from '../img/user_default.png';

export function ContextHeaderButton(){

    const user = useCurrentUser();

    if (user === null){
        return <Link to={"/auth/login"} className="secondary context-header">ВОЙТИ</Link>
    }
    else if (user !== undefined){
        return (
            <Link to={"/users/"+user.id}>
                <img
                    src={UserDefaultImage}
                    className="avatar rounded"
                />
            </Link>
        );
    }

    return null;

}