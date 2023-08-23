import { useState } from "react"

function InputsTexto(props) {
    return (
        <div className="flex flex-col w-full px-20">
            <label
                htmlFor={props.id}
                className="font-corpo font-semibold text-lg"
            >
                {props.label}
            </label>
            <input
                onChange={props.onChange}
                name={props.name}
                id={props.id}
                placeholder={props.placeholder}
                type="text"
                className="font-corpo ps-4 h-20 drop-shadow-lg"
                 />
        </div>
    )
}

export default InputsTexto
