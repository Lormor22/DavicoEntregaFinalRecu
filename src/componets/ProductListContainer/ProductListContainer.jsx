import { collection, getDocs, query, where} from "firebase/firestore";
import { useContext, useEffect, useState } from "react"
import { db } from "../../config/firebaseConfig";
import { ProductList } from "../ProductList/ProductList";
import { useParams } from "react-router-dom";


export const ProductListContainer = () => {

    const [products, setProducts] = useState([]);
    const { category } = useParams();
    const getProducts = (category) => { 
        const myProducts = category ? query( collection( db , "products" ), where ("category" , "==" , category)) : query( collection( db , "products" ) ); 
        getDocs(myProducts)
            .then( resp => {
                const productList = resp.docs.map( doc => ( { id: doc.id, ...doc.data() } ))
                setProducts(productList);
                return productList;
            })
            .catch( error => console.log(error));  
            
    }
    useEffect(() => {
        getProducts(category);
    }, [category]);
    
    return (
        <>
        <ProductList product={products}/>
        </>
    );
};
