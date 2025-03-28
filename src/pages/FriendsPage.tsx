import { UserCollection } from "../components/UserCollection";

export function FriendsPage() {
    return (
        <div className="page friends vertical-list xfill align-center">
            <h1>
                Друзья
            </h1>
            <UserCollection/>
        </div>
    );
}