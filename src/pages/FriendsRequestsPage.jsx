import { UserCollection } from "../components/UserCollection";

export function FriendsRequestsPage() {
    return (
        <div className="page friends-requests vertical-list xfill align-center">
        <h1>
            Заявки в друзья
        </h1>
        <UserCollection acceptButton={true}/>
    </div>
    );
}