import styled from 'styled-components';

export const CartStyle = styled.div`
margin-right: 65px;
margin-top: 7.5%;

#topBarCart{
    width: 365px;
    height: 65px;
    background-color: #27AE60;
    color: white;
    font-size: 18px;
    display: flex ;
    align-items: center;
    justify-content: center;
    border-radius: 8px 8px 0px 0px;
}

#bottomBarCart{
    width: 365px;
    height: 158px;
    background-color: #F5F5F5;
    border-radius: 0px 0px 8px 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

#pcart1{
    margin: 0px;
    font-size: 18px;
    color: #333333;

}

#pcart2{
    font-size: 14px;
    color: #828282;
}

@media(max-width: 670px){

    margin-top: 0%;
    

#topBarCart{
    background-color: pink;
}
}

`