

export const Button = ({text = "Botón", variant = "btn-primary ", functionClick}) => {
    return (
        <button className={`btn ${variant}`} onClick={functionClick} >{text}</button>
    )
}