import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Nav = ({ className, navOpen, setNavOpen}) => (
    <header className={ className }>
        <ul>
            <li>
                <Link 
                    to="/" 
                    activeClassName="active"
                >
                    Me
                </Link>
            </li>
            <li>
                <Link 
                    to="/skills" 
                    activeClassName="active"
                >
                    Skills
                </Link>
            </li>
            <li>
                <Link 
                    to="/projects" 
                    activeClassName="active"
                >
                    Projects
                </Link>
            </li>
            <li>
                <Link 
                    to="/insights" 
                    activeClassName="active"
                >
                    Insights
                </Link>
            </li>
        </ul>
        <div>
            
        </div>
    </header>
)

const StyledNav = styled(Nav)`
position: fixed;
top: calc(50vh - 75px);
z-index: 4;  
ul{
    margin: auto;
    padding: 0;  
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    li{
        list-style: none;
        a{
            text-decoration: none;
            text-transform: uppercase;
            color: ${props => props.theme.colors.text};
        }
    }
}

.active{
    box-shadow: inset 0 -0.5em rgba(170, 120, 237, 0.5);
    
}

@media screen and (max-width: 1000px){
    display: none;
    ${props => props.navOpen && `
        display: block;
    `}
    background: ${props => props.theme.colors.highlight};
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    z-index: 1;
    ul{
        height: 100px;
        margin-top: calc(50vh - 50px);    

        li{
            text-align: center;
            
            a{
                color: ${props => props.theme.colors.background};
            }
        }
    }
}
`

export default StyledNav