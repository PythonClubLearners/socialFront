import React from "react";
import { ReactElement } from "react";
import { Link } from "react-router";

import './css/NavigationalLayout.css';

export function NavigationalLayout({children}:{children:ReactElement}) {
    return (
        <div className={"layout navigational horizontal-list"}>
            <div className="navigation vertical-list align-center">
                <Link to={"/"} className={"secondary"}>Главная</Link>
                <Link to={"/users/1/friends"} className={"secondary"}>Мои друзья</Link>
                <Link to={"/friend-requests"} className={"secondary"}>Заявки в друзья</Link>
                <Link to={"/posts/new"} className={"secondary"}>Создать публикацию</Link>
                <button className={"primary"}>Выход</button>
            </div>
            {children}
        </div>
    );
}