import { Link } from "react-router";

export function ContextHeaderButton(){
    return <Link to={"/auth/login"} className="secondary">ВОЙТИ</Link>
}