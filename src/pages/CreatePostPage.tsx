import { FormInput } from "../components/FormInput";
import './css/CreatePostPage.css'
import { Link } from "react-router";

export function CreatePostPage(){

    function createPostHandler(event: React.FormEvent){
        console.log(event);
        event.preventDefault();
    }

    return (
        <div className="page post-create">
            <form className="vertical-list align-center xfill" onSubmit={createPostHandler}>
                <h1>
                    Что у вас нового?
                </h1>
                <br/>
                <FormInput
                    className="xminimal"
                    htmlName={"title"}
                    placeholder={"Заголовок*"}
                    type={"text"}
                />
                <FormInput
                    htmlName={"description"}
                    placeholder={"Подробности"}
                    type={"textarea"}
                />
                <FormInput
                    className={"xminimal"}
                    htmlName={"image"}
                    placeholder={"Картинка"}
                    type={"file"}
                />
                <br/>
                <div className="horizontal-list align-center start-right">
                    <Link to="/" className={"secondary"}>Отмена</Link>
                    <button type="submit" className={"primary"}>Опубликовать</button>

                </div>
            </form>
        </div>
    );
}