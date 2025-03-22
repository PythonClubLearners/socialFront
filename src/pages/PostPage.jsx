import { PostHeader } from "../components/PostHeader";

import defaultPostImage from '../img/post_default.png'

import './css/PostPage.css'

export function PostPage(){

    const tempText = "Не следует, однако забывать, что укрепление и развитие структуры  обеспечивает широкому кругу (специалистов) участие в формировании  позиций, занимаемых участниками в отношении поставленных задач.        Разнообразный и богатый опыт сложившаяся структура организации  способствует подготовки и реализации систем массового участия.        С другой стороны дальнейшее развитие различных форм деятельности  играет важную роль в формировании форм развития.        Таким образом начало повседневной работы по формированию позиции  \nпозволяет оценить значение дальнейших направлений развития."

    const postText = tempText.split("\n")

    return (
        <div className="page post vertical-list">
            <PostHeader/>
            <div className="post-content vertical-list">
                <img className="post-image" src={defaultPostImage}/>
                {
                    
                    postText.map(
                        (e)=><p>{e}</p>
                    )
                }
            </div>

        </div>
    );
}