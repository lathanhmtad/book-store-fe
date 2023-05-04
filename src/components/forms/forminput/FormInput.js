const FormInput = (props) => {
    const { formGroupClass, labelClass, id, label, onChange, ...inputProps } = props
    

    return (
        <div className={`${formGroupClass}`}>
            <label className={`${labelClass}`} htmlFor={id}>{label}</label>
            <input
                id={id}
                {...inputProps}
                onChange={onChange}
            />
        </div>
    )
}

export default FormInput