export function LoginPage() {
    return (
        <div className="page login vertical-list align-center">
            <form className="vertical-list">
                <h1>
                    Готовы войти?
                </h1>
                <label htmlFor="login">
                    Логин
                </label>
                <input id="login" type="text" placeholder="Логин"/>
                <label htmlFor="password">
                    Пароль
                </label>
                <input id="password" type="password" placeholder="Пароль"/>
                <button type="submit" className={"primary"}>ВОЙТИ</button>
            </form>
        </div>
    );
}