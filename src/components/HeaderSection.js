import React from 'react'
import { HeroImage, FlexHeader } from './styles/styles'
import Title from './Title'
import NavBarSection from './NavBarSection'
import LogoContainer from './LogoContainer'

export default function HeroSection(){

  return(
    <section>
      <NavBarSection />
      <FlexHeader background_color={'#ffcccc'} padding={'3rem'}>
        <img src={'https://www.jing.fm/clipimg/full/181-1816530_challenger-sticker-cactus-cute-freetoedit.png'}/>
      </FlexHeader>
    </section>
  )
}
