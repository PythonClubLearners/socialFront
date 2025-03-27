import './css/FormInput.css'

export function FormInput({placeholder, type, htmlName, className}){
    
    const classNames = typeof className === "string"?className.split(" "):[]

    let inputComponent;

    switch (type) {
        case "textarea":
            inputComponent=<textarea id={htmlName} placeholder={placeholder} name={htmlName}/>
            break;
    
        default:
            inputComponent=<input id={htmlName} type={type} placeholder={placeholder} name={htmlName}/>
            break;
    }
    
    return (
        <div className={["form-input", type, htmlName, "vertical-list", "xfill", ...classNames].join(" ")}>
            <label htmlFor={htmlName}>
                {placeholder}
            </label>
            {inputComponent}
        </div>
    );
}