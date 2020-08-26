import styled from 'styled-components'

const BlogContent = styled.div`
    text-align: right;
    h2, h3{
        font-size: 32px;
        margin-bottom: 15px;
    }
    p, li{
        font-size: 24px;
        font-weight: 300;
        line-height: 35px;
    }

    img{
        width: 80%;
    }

    @media screen and (max-width: 1000px){
        h2, h3{
            font-size: 24px;
            margin-bottom: 15px;
        } 

        p, li{
            font-size: 18px;
        }
    }
`

export default BlogContent