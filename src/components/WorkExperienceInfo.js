import React from 'react'
import Title from './Title'
import TimelineContainer from './TimelineContainer'

export default function WorkExperience(){
  const isMobile = window.innerWidth < 750;
  console.log(isMobile);
  return(
    <section>
      <Title title={'Work Experience'}/>
      <TimelineContainer />
    </section>
  )
}
