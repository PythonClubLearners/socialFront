import './css/FormInput.css'

interface FormInputParameters{
    placeholder:string;
    type: string;
    htmlName: string;
    className?: string;
}

export function FormInput({placeholder, type, htmlName, className}: FormInputParameters){
    
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
