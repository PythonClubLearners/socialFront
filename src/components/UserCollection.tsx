
import {mock_friends_invite} from '../api/mock_data'
import { UserLink } from './UserLink'

export function UserCollection({acceptButton}:{acceptButton:boolean}){
    const users = mock_friends_invite

    return (
        <div className='user-list vertical-list xfill'>
            {
                users.map(
                    (user)=><UserLink key={user} userId={user} acceptButton={acceptButton}/>
                )
            }
        </div>
    );
}
