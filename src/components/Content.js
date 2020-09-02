import styled from 'styled-components'

const Content = styled.div`
    padding-bottom: 100px;

    img{
        width: 100%;
        object-fit: cover;
    }
    
    @media screen and (max-width: 800px){
        margin-top: 45vw;

        img{
            height: 60vw;
        }
    }
    @media screen and (min-width: 801px) and (max-width: 1000px){
        margin-top: 40vw;  

        img{
            height: 400px;
        }
    }
    @media screen and (min-width: 1001px){
        padding-left: 62vh;
        padding-top: 150px;    
        max-width: 800px;
        margin-left: auto;

        img{
            height: 500px;
        }
    }
`

export default Content