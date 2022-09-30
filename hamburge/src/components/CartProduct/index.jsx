import { CartProductStyled } from "./style"
import hamburguer from '../../assets/hamburguer.svg'


const CartProduct = ( {listCartProduct} ) => {
    console.log(listCartProduct)
    return(
        // {listCartProduct.map((listCartProduct) =>
        <CartProductStyled>
                <img src={hamburguer} alt="" />
            <div>
                <p id="cartProductP1">Hamburguer</p>
                <p id="cartProductP2">Sanduíches</p>
            </div>
            <button>Remover</button>
        </CartProductStyled>
    // )}
    )
}

export default CartProduct
