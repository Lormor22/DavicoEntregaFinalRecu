import { Button } from "../Button/Button"
import { Link } from "react-router-dom"
import { Count } from "../Count/Count"
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";



export const Products = ({name , img , id, author, description, stock, price}) => {

    const { addProductCart } = useContext(CartContext);
    const [count, setCount] = useState(1);




    return (
        <div className="border border-3 p-3 d-flex flex-column m-2 w-25 "> 
                <Link to={`/info/${id}`}>
                <Button variant="btn-success btn-sm" text="info+" />
                </Link>
            <div className="d-flex justify-content-center ">
                <h4> {name} </h4>
            </div>
            <img src={img} alt={name} className="image_product" />
            <p>Stock: {stock}</p>
            <p>Autor: {author}</p>
            <p>{description}</p>
            <h4>${price}</h4>
            <div className="d-flex justify-content-center mt-auto p-2 ">
            {stock >= 1 && <Count cantidad={count} setCount={setCount} maxStock={stock}/>}
            { stock <= 0 ? <Button variant="btn-danger" text="Fuera de Stock"/> : <Button variant="btn-success" text="Comprar" functionClick={()=> addProductCart({id, name, price, stock, img}, count)} />}             
            </div>
        </div>
    );
};
