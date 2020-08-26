import styled from 'styled-components'

const Tag = styled.span`
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 10px;
    padding-right: 10px;
    margin-left: 10px;

    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    letter-spacing: 0.05em;
    text-decoration: none;
    color: black;

    background-color: ${props => props.theme.colors.primary};
    border-radius: 20px;

    @media screen and (max-width: 1000px){
        font-size: 14px;
        line-height: 16px;
    }

    ${props => props.green && `
        background-color: ${props => props.theme.colors.secondary};
    `}
`

export default Tag