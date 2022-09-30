import CartProduct from "../CartProduct"
import { CartStyle } from "./style"

const Cart = ( {listCartProduct} ) => {
    return(
        <CartStyle>
            <div id="topBarCart">
                Carrinho de compras
            </div>
            <div id="bottomBarCart">

                {
                    listCartProduct.length === 0 ?
                <p id="pcart1">Sua sacola está vazia</p>
                <p id="pcart2">Adicione itens</p>   : 

                <CartProduct listCartProduct={listCartProduct}/>
            }
            </div>

        
        </CartStyle>
   
    )
}

export default Cart 