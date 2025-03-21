import './css/FormInput.css'

export function FormInput({placeholder, type, htmlName}){
    return (
        <div className={["form-input", type, htmlName, "vertical-list"].join(" ")}>
            <label htmlFor={htmlName}>
                {placeholder}
            </label>
            <input id={htmlName} type={type} placeholder={placeholder}/>
        </div>
    );
}