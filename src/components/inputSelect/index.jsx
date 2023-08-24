function InputSelect(props) {
    return (
        <div className="flex flex-col w-full px-10 lg:px-20">
            <label className="font-corpo font-semibold text-lg" htmlFor={props.id}>Time</label>
            <select
                onChange={props.onChange}
                id={props.id}
                name={props.name}
                className="font-corpo ps-4 h-20 drop-shadow-lg"
            >
                <option value="">Selecione seu Time</option>
                <option value="Programação">Programação</option>
                <option value="Front-End">Front-End</option>
                <option value="Data-Science">Data-Science</option>
                <option value="Devops">Devops</option>
                <option value="UX e Design">UX e Design</option>
                <option value="Mobile">Mobile</option>
                <option value="Inovação e Gestão">Inovação e Gestão</option>
            </select>
        </div>
    )
}

export default InputSelect
