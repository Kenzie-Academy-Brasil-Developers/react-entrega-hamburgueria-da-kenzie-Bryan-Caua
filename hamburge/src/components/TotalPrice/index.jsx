import { TotalPriceStyle } from "./style"


const TotalPrice = ( {handleRemove} ) => {
    return(
        <TotalPriceStyle>
            <div>
                <p id="pPrice1">Total</p>
                <p id="pPrice2">R$ 40,00</p>
            </div>
            <div>
                <button onClick={() => handleRemove()}>Remover Todos</button>
            </div>
        </TotalPriceStyle>
    )
}

export default TotalPrice