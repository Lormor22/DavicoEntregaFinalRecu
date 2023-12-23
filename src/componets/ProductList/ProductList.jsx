import { Products } from "../Products/Products"


export const ProductList = ({product}) => {
    return (
        <div className="container d-flex flex-sm-wrap justify-content-center">
            { product.map( product => <Products key={product.id} {...product}/>)}
        </div>
        
    )
}
