  import "./Factura.css"
  import { CartContext } from "../context/CartContext";
  import React, { useContext } from 'react';
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";



  export const Factura = () => {
    const { formData , cart , ticket, clearTicket} = useContext(CartContext);
    const Descargando  = () => { 
      Toastify({
          text: "Descargando factura 📜",
          duration: 3000,
          gravity:"buttom",
          style:{
          fontSize:"25px",
          fontFamily:"Verdana",
          color:"white",
          background: "black",
          position: "absolute",
          right: "6%",
          zIndex: 1000,
          }
      }).showToast();
  }

    return (
      <div className="justify-content-center p-3 d-flex m-2">
        <div className="border border-3 p-3 d-flex flex-column m-2 ">
          <div className="d-flex justify-content-center">
            <h2>¡Gracias por tu compra!</h2>
          </div>
          <div className="d-flex">
            <p>Los productos serán entregados a:</p>
            <p>{formData.nombre}, {formData.apellido}</p>
          </div>
          <p>De 4 a 7 dias hábiles</p>
          <p>A la direccion: {formData.direccion}</p>
          <p>CP: {formData.codigoPostal}</p>
          <h5>Detalles de la compra:</h5>
                {ticket.map((detail) => (
                    <div key={detail.id} className=" d-flex align-items-center justify-content-between">
                        <p>{detail.name}</p>
                        <p>x{detail.quantity}</p>
                    </div>
                ))}
        <div className=" d-flex align-items-center justify-content-between">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/EAN13.svg/1200px-EAN13.svg.png" alt="" className="codigoBarra"/>
          <p>Total: {formData.total}</p>
        </div>
        <div className="d-flex m-auto mt-3 gap-2" >
        <Button text="Descargar" functionClick={Descargando}/>
        <Link to={"/"}>
          <Button text="Finalizar compra" variant="btn-success" functionClick={clearTicket}/>
        </Link>
        </div>
        </div>
      </div>
    );
  };
