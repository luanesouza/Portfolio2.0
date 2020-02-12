import React from 'react'
import { NavBar, FlexHeader } from './styles/styles'
import Paragraph from './Paragraph'

export default function NavBarSection(){

  return(
    <NavBar>
      <FlexHeader>
        <Paragraph paragraph={'About Me'}/>
        <Paragraph paragraph={'My Projects'}/>
        <Paragraph paragraph={'Contact Me'}/>
      </FlexHeader>
    </NavBar>
  )
}
