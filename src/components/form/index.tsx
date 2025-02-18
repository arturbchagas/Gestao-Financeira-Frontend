import React from "react";

export interface FormField {
  type: string;
  name: string;
  label: string;
  placeholder: string;
  required?: boolean;
}
export interface FormProps {
  fields: FormField[];
  onSubmit: (data: Record<string, string>) => void;
}
function Form ({fields, onSubmit}:FormProps) {
    const handleSubmit = (event:React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const data : Record<string,string>={}

        fields.forEach((field)=>{
            data[field.name] = formData.get(field.name) as string
        })
        onSubmit(data)
    }
    return (
        <form onSubmit={handleSubmit}>
            {fields.map((field)=>(
                <div key={field.name}>
                    <label htmlFor={field.name}>{field.label}</label>
                    <input type={field.type} id={field.name} name={field.name} placeholder={field.placeholder} required={field.required}/>
                </div>
            ))}
        <button type="submit">Enviar</button>
        </form>
    )
}

export default Form