import { Link } from "react-router";
import './css/ContextHeaderButton.css'

export function ContextHeaderButton(){
    return <Link to={"/auth/login"} className="secondary context-header">ВОЙТИ</Link>
}