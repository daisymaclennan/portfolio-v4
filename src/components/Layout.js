import React, { useState } from 'react'
import { Helmet } from "react-helmet"
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import SpinningName from './SpinningName'
import ThemeButtons from './ThemeButtons'
import Content from './Content'
import NavButton from './NavButton'
import Nav from './Nav'

import lightTheme from '../themes/light'

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
  }
  *:focus{
    outline: 0;
  }
  button{
    margin: 0;
    padding: 0;
  }
  a{
    text-decoration: none;
  }
  body{
    margin: 0;
    padding: 0;
    font-smooth: anti-aliasing;
    margin-left: 20px;
    margin-right: 20px;
    font-family: raleway;
    
  }
  h2{
    font-size: 48px;
    font-weight: 700;
  }
  h3{
    font-size: 32px;
    font-weight: 700;
  }
  p{
    font-size: 30px;
    font-weight: 500;
    line-height: 140%;
    margin-bottom: 40px;
  }
  a{
    font-size: 30px;
    font-weight: 800;
  }
  @media screen and (max-width: 1000px){
    h2{
        font-size: 24px;
      }
    h3{
        font-size: 14px;
    }
    p{
        font-size: 18px;
        margin-bottom: 20px;  
    }
    a{
        font-size: 18px;
    }
  }
`

const Layout = ({ children }) => {
    const [theme, changeTheme] = useState(lightTheme)
    const [navOpen, setNavOpen] = useState(false);
    return(
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Daisy Maclennan Portfolio</title>
            </Helmet>
            <ThemeProvider theme={ theme } >
                <GlobalStyle />
                <SpinningName navOpen={ navOpen } />
                <ThemeButtons theme={ theme } changeTheme={ changeTheme } />
                <NavButton navOpen={navOpen} setNavOpen={setNavOpen} />
                <Nav navOpen={navOpen} setNavOpen={setNavOpen} />
                <Content>
                    { children }
                </Content>
            </ThemeProvider>
        </div>
    )
}

export default Layout


/*background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};*/