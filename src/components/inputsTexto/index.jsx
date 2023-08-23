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
                value={props.value}
                onChange={props.func}
                className="font-corpo ps-4 h-20 drop-shadow-lg"
                id={props.id}
                placeholder={props.placeholder}
                type="text" />
        </div>
    )
}

export default InputsTexto
