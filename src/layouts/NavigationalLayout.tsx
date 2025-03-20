import React from "react";
import { ReactElement } from "react";

export function NavigationalLayout({children}:{children:ReactElement}) {
    return (
        <div className={"layout navigational"}>
            Navigation
            {children}
        </div>
    );
}