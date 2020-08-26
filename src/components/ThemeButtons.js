import React from 'react'
import styled from 'styled-components'
import lightTheme from '../themes/light'
import darkTheme from '../themes/dark'

const ThemeButtons = ({ className, theme, changeTheme }) => (
    <div className={ className }>
      <button onClick={() => changeTheme( lightTheme )} aria-label="Light mode">
      </button>
      <button onClick={() => changeTheme( darkTheme )} aria-label="Dark mode">
      </button>
    </div>
)

const StyledThemeButtons = styled(ThemeButtons)`
  width: 40px;
  height: 16px;
  display: flex;
  position: fixed;
  top: 20px;
  right: calc(25vw + 20px);     
  justify-content: space-between;
  button{
    height: 16px;
    width: 16px;
    border-radius: 8px;
    background: pink;
    border: 0;
  }
  button:first-of-type{
    background: #FFFFFF;
    ${props => props.theme === lightTheme && (
      `border: 1px solid #AA78ED;`
    )}
  }
  button:last-of-type{
    background: #000000;
    ${props => props.theme === darkTheme && (
      `border: 1px solid #AA78ED;`
    )}
  }
  @media screen and (max-width: 1000px){
    left: 20px;
    z-index: 2;
  }
`

export default StyledThemeButtons