import { useState } from 'react'
import { ProductStyled } from './style'

const Product = ( {listHamburgers, funciotnFilter} ) => {



    return(
        <ProductStyled>
            <ul>
                {

                listHamburgers.map((listHamburgers) => 
                <li>
                    <div className='img'>
                        <img src={listHamburgers.img} alt="" />
                    </div>
                    <div className='textCard'>
                        <p id='title'>{listHamburgers.name}</p>
                        <p id='category'>{listHamburgers.category}</p>
                        <p id='price'>R${listHamburgers.price}</p>
                        <button onClick={() =>  funciotnFilter(listHamburgers.name)}>Adicionar</button>
                    </div>
                </li>
               )}
            </ul>
        </ProductStyled>
    )
}

export default Product