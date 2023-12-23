import { Link } from "react-router-dom"
import { Button } from "../Button/Button"
import "./ProductDetail.css"

export const ProductDetail = ({name, price, descriptionPlus, author, img, img2, img3 }) => {
    return (
        <div className="p-5 border border-3 rounded-4 fondo_details">
            <Link to={`/`}>
                <Button variant="btn-success btn-sm" text="Volver" />
            </Link>
            <div className="d-flex justify-content-center">
                <img src={img2} alt="" className="imagen_sola" />
                <img src={img} alt="" className="imagen_sola" />
                <img src={img3} alt="" className="imagen_sola" />
            </div>
            <div className="d-flex flex-column">
                <h3>{name}</h3>
                <p>Autor: {author}</p>
                <p>Descripción: {descriptionPlus}</p>
                <h3>Precio: {price}</h3>
            </div>
        </div>
    )
}

