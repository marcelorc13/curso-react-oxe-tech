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

                <option id="placeholder" hidden>{props.placeholder}</option>
                {props.times.map(time => <option key={time}>{time}</option>)}
            </select>
        </div>
    )
}

export default InputSelect
