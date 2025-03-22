
import {mock_friends_invite} from '../api/mock_data'
import { UserLink } from '../components/UserLink'

export function UserCollection({acceptButton}){
    const users = mock_friends_invite

    return users.map(
        (user)=><UserLink acceptButton={acceptButton}/>
    )
}
