import {HeaderStyle} from   './style'
import logo from '../../assets/logo.svg'

const Header = () => {
    return(
    <HeaderStyle>
        <div>
            <img src={logo} alt="" />

        <aside>
            <input type="text" placeholder='Digitar Pesquisa'/>
            <button type="button">Pesquise</button>
        </aside>
        </div>
    </HeaderStyle>
    )
}

export default Header