import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { TrashWidget } from "../TrashWidget/TrashWidget";
import { Factura } from "../factura/factura";
import "./Cart.css"
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";


export const Cart = () => {
    const { removeProduct, cart, total, finCompra, formData, handleInputChange } = useContext(CartContext); 
    const validate = (email, ccv) =>{
       if (!formData.email.includes('@') || !formData.email.includes('.com')) return 'Ingrese un email válido';
       if (formData.tarjetaCredito.length > 12) return 'El numero de la tarjeta son 12 digitos y se encuentra en la parte frontal';
       if (formData.cvv.length < 3) return 'El CVV es un numero de 3 dígitos detras de la tarjeta';
    }
    formData.error = validate(formData.email, formData.cvv);
     
    return (
        <>
        <div>
            <div className="container d-flex flex-sm-wrap justify-content-center  ">
            {cart.map((item) => (
                <div key={item.id} className="d-flex justify-content-between w-75 border border-3 p-3">
                    <div>
                        <h2>Nombre: {item.name} </h2>
                        <h3>Precio Unitario: {item.price} </h3>
                        <h4>Cantidad: {item.quantity} </h4>
                        <h5>Subtotal: {item.subTotal} </h5>
                    </div>
                    <div className="d-flex align-items-start justify-content-end">
                        <img src={item.img} alt={item.name} className="img_libro" />
                        <button className="boton_transparente" onClick={()=> removeProduct(item.id)}><TrashWidget/></button>
                    </div>
                </div>
            ))}
            </div>
            <div className="d-flex justify-content-center">
                <div className=" d-inline-flex flex-column m-5 ">
                    <h1>Total: $ {total}</h1>
                </div>
            </div>
            <div className="d-flex justify-content-center">
            <div className=" d-inline-flex flex-column m-5 ">
                <h4>Ingresa tus datos para poder pagar</h4>
                <form
              onSubmit={(ev) => {
                ev.preventDefault();
              }}>
            
                <div>
                    <input  type="text" 
                            name="nombre" 
                            placeholder="Nombre" 
                            className="w-50" 
                            onChange={handleInputChange} 
                            value={formData.nombre}
                            />
                    <input  type="text" 
                            name="apellido" 
                            placeholder="Apellido" 
                            className="w-50" 
                            onChange={handleInputChange} 
                            value={formData.apellido}
                            />
                </div>
                    <input  type="text" 
                            name="telefono" 
                            className="w-100"
                            placeholder="Telefono" 
                            onChange={handleInputChange} 
                            value={formData.telefono}
                            />
                <div>
                    <input  type="text" 
                            name="direccion" 
                            placeholder="Direccion" 
                            className="w-75" 
                            onChange={handleInputChange} 
                            value={formData.direccion}
                            />
                    <input  type="text"
                            name="codigoPostal"
                            placeholder="Codigo Postal"
                            className="w-25"
                            onChange={handleInputChange}
                            value={formData.codigoPostal}
                            />
                </div>
                    <input  type="text" 
                            name="email" 
                            placeholder="E-Mail"
                            className="w-100" 
                            onChange={handleInputChange} 
                            value={formData.email}
                            />        
                <div>
                    <input  type="text" 
                            name="tarjetaCredito" 
                            placeholder="N° de tarjeta" 
                            className="w-75" 
                            onChange={handleInputChange} 
                            value={formData.tarjetaCredito}
                            />
                    <input  type="text" 
                            name="cvv" 
                            placeholder="CVV" 
                            className="w-25" 
                            maxLength="3"
                            onChange={handleInputChange} 
                            value={formData.cvv}
                            />
                </div>
                {<p className="text-danger">{formData.error}</p>}
                {formData.nombre !== "" && formData.apellido !== "" && formData.telefono !== "" && formData.direccion !== "" && formData.codigoPostal !== "" &&
                formData.email !== "" && formData.tarjetaCredito !== "" && formData.cvv !== "" ? (
                    <Link to={"/factura"}>
                        <Button functionClick={finCompra} text="Pagar"/>
                    </Link>
                ) : (
                    <Button text="Ingrese todos los datos para continuar" disabled={true} />
                )}
                </form>
            </div>
            </div>
        </div>
        </>
    );
};
