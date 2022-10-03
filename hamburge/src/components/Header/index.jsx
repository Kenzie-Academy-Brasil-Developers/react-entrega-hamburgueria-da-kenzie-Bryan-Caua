import { HeaderStyle } from "./style";
import logo from "../../assets/logo.svg";

const Header = ({handleFilter, busca, setBusca}) => {



  return (
    <HeaderStyle>
      <div>
        <img src={logo} alt="" />

        <form onSubmit={(e) =>{e.preventDefault(); handleFilter()}}>
          <input type="text" placeholder="Digitar Pesquisa" 
           onChange={(e) => setBusca(e.target.value)}
           value={busca}
          />
          <button type="submit">Pesquise</button>
        </form>
      </div>
    </HeaderStyle>
  );
};

export default Header;
