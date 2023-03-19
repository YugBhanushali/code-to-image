import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'

const StyledBackground= styled.div`

  .canTheme{
    display: flex;
    max-height: unset;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100%;
    border-radius: 0;
    background:${(props)=>props.backgroundColour};
    padding:${(props)=>props.Padding};
  }
`

export {StyledBackground};
