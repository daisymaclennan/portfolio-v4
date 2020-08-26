import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const StyledLink = ({ className, children, to}) => (
    <Link className={ className } to={ to }>
        {children}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 38">
        <g clipPath="url(#clip0)">
            <path d="M12.7567 33.0348l1.4866 1.6476c.6295.6977 1.6473.6977 2.2701 0l13.0178-14.4207c.6295-.6976.6295-1.8258 0-2.516L16.5134 3.31757c-.6295-.69766-1.6473-.69766-2.2701 0l-1.4866 1.64766c-.6362.70507-.6228 1.85546.0268 2.5457l8.0692 8.52027H1.60714C.716518 16.0312 0 16.8254 0 17.8125v2.375c0 .9871.716518 1.7812 1.60714 1.7812H20.8527l-8.0692 8.5204c-.6563.6902-.6697 1.8406-.0268 2.5457z" />
        </g>
        
        </svg>
    </Link>
)

const StyledStyledLink = styled(StyledLink)`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: ${props => props.theme.colors.text};
    margin-bottom: 15px;
    svg{
        height: 17px;
        margin-left: 15px;
        fill: ${props => props.theme.colors.text};
    }
`

export default StyledStyledLink