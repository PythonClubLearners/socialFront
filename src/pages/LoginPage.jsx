
import { FormInput } from '../components/FormInput';
import './css/LoginPage.css'

export function LoginPage() {

    function loginHandler(event) {
        console.log(event);
        event.preventDefault();
    }

    return (
        <div className="page login vertical-list align-center">
            <form className="vertical-list" onSubmit={loginHandler}>
                <h1>
                    Готовы войти?
                </h1>
                <FormInput
                    htmlName={"login"}
                    placeholder={"Логин"}
                    type={"text"}
                />
                <FormInput
                    htmlName={"password"}
                    placeholder={"Пароль"}
                    type={"password"}
                />
                <button type="submit" className={"primary"}>ВОЙТИ</button>
            </form>
        </div>
    );
}