import { BrowserRouter, Route, Routes } from "react-router-dom"
import { NavBar , Footer, ProductListContainer, Cart, CartContextProvider,ProductDetailsContainer, Factura } from "./componets"
import './App.css'
function App() {
  return (
    <BrowserRouter>
    <CartContextProvider>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ProductListContainer/>}/>
        <Route path="/info/:id" element={<ProductDetailsContainer/>}/>
        <Route path="/category/:category" element={<ProductListContainer/>}/>
        <Route path="/cart" element={<Cart/>} />
        <Route path="/factura" element={<Factura />} />
      </Routes>
      <Footer/>
      </CartContextProvider>
    </BrowserRouter>
  )
}

export default App
