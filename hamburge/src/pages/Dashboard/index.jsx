import Header from "../../components/Header";
import Product from "../../components/Product";
import Cart from "../../components/Cart";
import { DashboardStyle } from "./style";
import TotalPrice from "../../components/TotalPrice";
import { useEffect, useState } from "react";
import api from "../../services/api";

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
    setListCartProduct([...listCartProduct, product]);
  };

  function handleRemove( deleteListCartProduct ){
    setListCartProduct(listCartProduct.filter(listCartProduct => listCartProduct.id !== deleteListCartProduct ))
  }

  function handleRemoveAll( ){
    // setListCartProduct(listCartProduct.filter(listCartProduct => listCartProduct.id !==  ))
    alert('ola')
  }


  return (
    <DashboardStyle>
      <Header
        listHamburgers={listHamburgers}
        setListHamburgers={setListHamburgers}
      />
      <div id="cartInCollumn">
        <Product
          listHamburgers={listHamburgers}
          handleAddProduct={handleAddProduct}
        />
        <div>
          <Cart listCartProduct={listCartProduct} handleRemove={handleRemove} />
            


          {listCartProduct.length != 0 ? 
          (<TotalPrice handleRemoveAll={handleRemoveAll}/>)
          : ('')
          }

        </div>
      </div>
    </DashboardStyle>
  );
};

export default Dashboard;
