import styled from 'styled-components'

const BoldText = styled.span`
    font-weight: 800;

    ${props => props.primary && `
        color: #AA78ED;
    `}

    ${props => props.secondary && `
        color: #88ED78;
    `}
`

export default BoldText