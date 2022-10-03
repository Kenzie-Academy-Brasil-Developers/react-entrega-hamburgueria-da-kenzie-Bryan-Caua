import Header from "../../components/Header";
import Product from "../../components/Product";
import Cart from "../../components/Cart";
import { DashboardStyle } from "./style";
import TotalPrice from "../../components/TotalPrice";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dashboard = () => {
  const [listHamburgers, setListHamburgers] = useState([]);

  useEffect(() => {
    const response = api
      .get("/products")
      .then((response) => setListHamburgers(response.data))
      .catch((error) => console.log(error));
  }, []);

  const [listCartProduct, setListCartProduct] = useState([]);

  const handleAddProduct = (product) => {
    const findItem = listCartProduct.find((element) => element.id === product.id)
    findItem ? toast.success('Esse item ja foi adicionado ao carrinho') : setListCartProduct([...listCartProduct, product]);

  };

  function handleRemove( deleteListCartProduct ){
    setListCartProduct(listCartProduct.filter
      (listCartProduct => listCartProduct.id !== deleteListCartProduct ))
  }

  function handleRemoveAll( ){
    setListCartProduct([])
  }

  const [busca, setBusca] = useState ('')

  const [buscaFiltrada, setBuscaFiltrada] = useState ([])

  function handleFilter () {
    const itensFiltrados = listHamburgers.filter((item) => item.name.toLowerCase().includes(busca.toLowerCase()))
    setBuscaFiltrada(itensFiltrados)
  }



 

  return (
    <DashboardStyle>
      <Header
        busca={busca}
        setBusca={setBusca}
        handleFilter={handleFilter}
      />
      <div id="cartInCollumn">
        <Product
          listHamburgers={listHamburgers}
          handleAddProduct={handleAddProduct}
          buscaFiltrada={buscaFiltrada}
          busca={busca}
        />
        <div>
          <Cart listCartProduct={listCartProduct} handleRemove={handleRemove} />
            


          {listCartProduct.length != 0 ? 
          (<TotalPrice handleRemoveAll={handleRemoveAll} listCartProduct={listCartProduct}/>)
          : <></>
          }

        </div>
      </div>
      <ToastContainer
      position="top-right"
      autoClose={1000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      toastStyle={{ backgroundColor: "white", color: "black" }}
      limit={1}
      />
    </DashboardStyle>
  );
};

export default Dashboard;
