import { useContext, useEffect, useState } from "react";
import { ProductDetail } from "../ProductDetail/ProductDetail";
import { useParams } from "react-router-dom";
import { db } from '../../config/firebaseConfig';
import { doc, getDoc } from "firebase/firestore";
import { CartContext } from "../context/CartContext";

export const ProductDetailsContainer = () => {
    const { id } = useParams();
    const { addProductCart } = useContext(CartContext);
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchProduct = async () => {
        try {
          const productRef = doc(db, 'products', id);
          const productDoc = await getDoc(productRef);
          setTimeout(() => {
            if (productDoc.exists()) {
              setProduct(productDoc.data());
            }
            setLoading(false); 
          }, 2000); //Agregue 2 seg de delay para que se vea el "Cargando..."
        } catch (error) {
          setLoading(false);
        }
      };
      fetchProduct();
    }, [id]);
  
    return (
      <div className="container d-flex justify-content-center mt-5">
        {loading ? (
          <p>Cargando...</p>
        ) : (
          product ? <ProductDetail {...product} /> : <p>Producto no encontrado</p>
          //si no coincide con el ID, salta ese mensaje de error, lo testie agreando mas numeros al id y funciona
        )}
      </div>
    );
  };