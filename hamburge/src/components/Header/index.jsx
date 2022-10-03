import { HeaderStyle } from "./style";
import logo from "../../assets/logo.svg";
import { useState } from "react";

const Header = ({listHamburgers, setListHamburgers}) => {
    // const [busca, setBusca] = useState ('')

    // const tituloList = listHamburgers.name

    // const itensFiltrados = tituloList.filter ((item) => item.startsWith(busca))
    

  return (
    <HeaderStyle>
      <div>
        <img src={logo} alt="" />

        <form>
          <input type="text" placeholder="Digitar Pesquisa" 
        //   value={busca} onChange={(e) => setBusca(e.target.value)}
          />
          <button type="button">Pesquise</button>
        </form>
      </div>
    </HeaderStyle>
  );
};

export default Header;
