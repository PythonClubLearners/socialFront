import { Link } from "react-router";

export function NotFound() {
    return (
        <div className="page not-found vertical-list align-center">
            <h1>
                УПС... НИЧЕГО НЕ НАЙДЕНО... (404)
            </h1>
            <Link to="/" className="primary xfill">
                Вернуться на главную страницу
            </Link>
        </div>
    );
}