import Header from "../../components/Header"
import Product from "../../components/Product"
import Cart from "../../components/Cart"
import { DashboardStyle } from "./style"
import TotalPrice from "../../components/TotalPrice"
import { useEffect, useState } from "react"
import api from "../../services/api"


const Dashboard = () => {
    
    const [listHamburgers, setListHamburgers] = useState([])
    
    useEffect(() => {
        const response = api.get('/products')
        .then(( response ) => setListHamburgers(response.data))
        .catch(( error ) => console.log(error));     
    }, [])
    
    const [listCartProduct, setListCartProduct] = useState([])

    const funciotnFilter = (name) => {
       const filterItens = listHamburgers.filter((element) => element.name === name)
       setListCartProduct(filterItens) 
    }

    return(
        
        <DashboardStyle>
            <Header/>
           <div id="cartInCollumn">
            <Product listHamburgers={listHamburgers} funciotnFilter={funciotnFilter}/>
            <div>
                <Cart listCartProduct={listCartProduct}/>
                <TotalPrice/>
            </div>
           </div>
        </DashboardStyle>
    )
}

export default Dashboard