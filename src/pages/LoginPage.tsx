
import { FormInput } from '../components/FormInput';
import './css/LoginPage.css'
import {login} from '../api/endpoints'

export function LoginPage() {

    function loginHandler(event: React.FormEvent) {

        const formData = new FormData(event.target as HTMLFormElement)

        login(formData);

        event.preventDefault();
    }

    return (
        <div className="page login vertical-list align-center">
            <form className="vertical-list align-center" onSubmit={loginHandler}>
                <h1>
                    Готовы войти?
                </h1>
                <br/>
                <FormInput
                    htmlName={"username"}
                    placeholder={"Логин"}
                    type={"text"}
                />
                <FormInput
                    htmlName={"password"}
                    placeholder={"Пароль"}
                    type={"password"}
                />
                <br/>
                <button type="submit" className={"primary"}>Вход</button>
            </form>
        </div>
    );
}