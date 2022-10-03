import { ProductStyled } from "./style";

const Product = ({ listHamburgers, handleAddProduct }) => {
  return (
    <ProductStyled>
      <ul>
        {listHamburgers.map((product) => (
          <li>
            <div className="img">
              <img src={product.img} alt="" />
            </div>
            <div className="textCard">
              <p id="title">{product.name}</p>
              <p id="category">{product.category}</p>
              <p id="price">R${product.price}</p>
              <button onClick={() => handleAddProduct(product)}>
                Adicionar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </ProductStyled>
  );
};

export default Product;
