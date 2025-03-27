import React from "react";
import { ReactElement } from "react";
import { Link } from "react-router";

import './css/NavigationalLayout.css';
import { useCurrentUser } from "../api/dataHooks";
import { logout } from "../api/endpoints";

export function NavigationalLayout({children}:{children:ReactElement}) {

    const user = useCurrentUser();

    return (
        <div className={"layout navigational horizontal-list"}>
            <div className="navigation vertical-list align-center">
                <Link to={"/"} className={"secondary"}>Главная</Link>
                {
                    user && (
                        <>
                        <Link to={"/users/1/friends"} className={"secondary"}>Мои друзья</Link>
                        <Link to={"/friend-requests"} className={"secondary"}>Заявки в друзья</Link>
                        <Link to={"/posts/new"} className={"secondary"}>Создать публикацию</Link>
                        <button onClick={logout} className={"primary"}>Выход</button>
                        </>
                    )
                }

            </div>
            {children}
        </div>
    );
}