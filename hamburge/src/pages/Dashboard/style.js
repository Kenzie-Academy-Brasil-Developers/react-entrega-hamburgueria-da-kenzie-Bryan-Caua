import styled from 'styled-components';

export const DashboardStyle = styled.div`

#cartInCollumn{
    display: flex;
    flex-direction: row;
    width: 100vw;
    justify-content: space-between;
}


@media(max-width: 1220px){

    #cartPriceInColumn{
        display: flex;
        flex-direction: column;
    }

    #cartInCollumn{
        display: flex;
        flex-direction: column;
    }


}
`