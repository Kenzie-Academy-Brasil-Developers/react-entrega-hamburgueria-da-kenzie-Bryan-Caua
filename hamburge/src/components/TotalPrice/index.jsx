import { TotalPriceStyle } from "./style"


const TotalPrice = () => {
    return(
        <TotalPriceStyle>
            <div>
                <p id="pPrice1">Total</p>
                <p id="pPrice2">R$ 40,00</p>
            </div>
            <div>
                <button>Remover Todos</button>
            </div>
        </TotalPriceStyle>
    )
}

export default TotalPrice