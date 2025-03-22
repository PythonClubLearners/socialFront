import {PostCollection} from '../components/PostCollection'
import defaultUserImage from '../img/user_default.png'
import { Link } from 'react-router';

import './css/ProfilePage.css'
import { MultiLineText } from '../components/MultiLineText';

export function ProfilePage() {

    const tempText = "Не следует, однако забывать, что укрепление и развитие структуры  обеспечивает широкому кругу (специалистов) участие в формировании  позиций, занимаемых участниками в отношении поставленных задач.        Разнообразный и богатый опыт сложившаяся структура организации  способствует подготовки и реализации систем массового участия.        С другой стороны дальнейшее развитие различных форм деятельности  играет важную роль в формировании форм развития.        Таким образом начало повседневной работы по формированию позиции  \nпозволяет оценить значение дальнейших направлений развития."


    return (
        <div className="page profile">
            <div className='header horizontal-list stretch xfill'>
                <img className='avatar' src={defaultUserImage}/>
                <div className='vertical-list about'>
                    <h1>ИМЯ ФАМИЛИЯ</h1>
                    <div className='horizontal-list stretch xfill align-center'>
                        <h2 className='username'>
                            @username
                        </h2>
                        <Link to="/users/1/friends/" className='secondary'>47 друзей</Link>
                    </div>
                    <span className='description'>
                        <MultiLineText text={tempText}/>
                    </span>
                </div>
            </div>
            <PostCollection/>
        </div>
    );
}