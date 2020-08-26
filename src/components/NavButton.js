import React from 'react'
import styled from 'styled-components'

const NavButton = ({ className, navOpen, setNavOpen }) => (
    <div className={ className } onClick={() => setNavOpen(!navOpen)}>
        <span></span>
        <span></span>
        <span></span>
    </div>
)

const StyledNavButton = styled(NavButton)`
    height: 30px;
    width: 30px;
    display: none;
    position: fixed;
    right: 20px;
    top: 20px;
    z-index: 2;   

    flex-direction: column;
    justify-content: space-between;
    
    span{
        background: ${props => props.theme.colors.highlight};
        height: 4px;
        width: 100%;
        transition: 0.25s ease-in-out;  
    }

    ${props => props.navOpen && `
        span{
            background: ${props.theme.colors.background}!important;
        }
        span:first-of-type{
            transform: rotate(45deg) translate(9px, 8.5px);
        }

        span:nth-of-type(2){
            transform: rotate(45deg);
        }

        span:last-of-type{
            transform: rotate(-45deg) translate(10px, -10px);

        }
    `}


    @media screen and (max-width: 1000px){
        display: flex;
    }
`

export default StyledNavButton