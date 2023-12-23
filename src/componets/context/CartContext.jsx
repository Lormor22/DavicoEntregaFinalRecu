import { doc , updateDoc, setDoc } from 'firebase/firestore';
import { createContext, useEffect, useState } from 'react'
import { db } from '../../config/firebaseConfig';


export const  CartContext = createContext(null);

export const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    const [ticket, setTicket] = useState([]);
    const [total, setTotal] = useState(0);
    const [totalProducts, setTotalProducts] = useState(0);
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        telefono: '',
        direccion: '',
        codigoPostal: '',
        email: '',
        tarjetaCredito: '',
        cvv: '',
        total: 0,
        error: '',
      });
      const finCompra = async ()=>{
        try {
            
            if(formData.nombre !== "" && formData.apellido !== "" && formData.telefono !== "" && formData.direccion !== "" && formData.codigoPostal !== "" &&
            formData.email !== "" && formData.tarjetaCredito !== "" && formData.cvv !== ""){
                await discountStock(cart, formData);
                setFormData((prevData) => ({
                    ...prevData,
                    total: total,
                }));
                clearCart();
            }else{
                console.log("falta un dato");   
            } 
            await uploadPurchaseDetails(formData, ticket);
        }catch (error) {
            console.error("Error al realizar la compra:", error);
        }
        };

    const uploadPurchaseDetails = async (formData, ticket) => {
        try {
            const nombreCompleto = `${formData.nombre}_${formData.apellido}`;
            const purchaseDetailsRef = doc(db, "purchaseDetails", nombreCompleto); 
            await setDoc(purchaseDetailsRef, {
                nombre: formData.nombre,
                apellido: formData.apellido,
                telefono: formData.telefono,
                direccion: formData.direccion,
                codigoPostal: formData.codigoPostal,
                email: formData.email,
                tarjetaCredito: formData.tarjetaCredito,
                cvv: formData.cvv,
                totalCompra: formData.total,
                ticketDetails: ticket,
                timestamp: new Date(),
            });
    
            console.log("Se subieron los datos");
        } catch (error) {
            console.error("Algo paso", error);
        }
    };
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
        
      };
    
    const addProductCart = (product, quantity) => {
        const index = cart.findIndex((item) => item.id === product.id);
        if (index == -1) {
            const newProduct = {
                ...product,
                quantity,
                subTotal: product.price * quantity,
                img: product.img
            };
            setCart([...cart, newProduct]);
            } else {
            const cartCopy = [...cart];
            cartCopy[index].quantity += quantity;
            if( cartCopy[index].quantity > cartCopy[index].stock){
                cartCopy[index].quantity = cartCopy[index].stock;
            }
            cartCopy[index].subTotal = cartCopy[index].price * cartCopy[index].quantity;
            setCart(cartCopy);
            }
            setTicket([...ticket, { id: product.id, name: product.name, quantity }]);
        };

        const handleTotal = () => { 
            const totalItems = cart.reduce( (acum, item) => acum + item.subTotal, 0);
            setTotal(totalItems);
        };
        const handleTotalProducts = () => { 
            const items = cart.reduce((acum, item) => acum + item.quantity, 0);
            setTotalProducts(items);
        };
        const removeProduct  = (id) => { 
            const productFilter = cart.filter(product => product.id !== id);
            setCart(productFilter);
            const updatedTicket = ticket.filter((p) => p.id !== id);
            setTicket(updatedTicket);
        };
        const discountStock = async (cart) => {
            const updatePromises = cart.map(async (product) => {
            const productRef = doc(db, "products", product.id);
            const newStock = product.stock - product.quantity;
            await updateDoc(productRef, { stock: newStock });
            });
            await Promise.all(updatePromises);
        };
        const clearCart = () => {
            setCart([]);
        };
        const clearTicket = () =>{
            setTicket([]);
        }
        useEffect(() => {
            handleTotal()
            handleTotalProducts()
        }, [cart])
            
    const objectValue  = {
        cart,
        total,
        totalProducts,
        formData,
        ticket,
        finCompra,
        clearTicket,
        addProductCart,
        handleInputChange,
        removeProduct,
        discountStock,
        clearCart,
    }

    return <CartContext.Provider value={objectValue}> { children } </CartContext.Provider>;
};
