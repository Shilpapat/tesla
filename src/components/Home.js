import React from 'react'
import Kaveri from './Kaveri'
import Kaverii from './Kaverii'
import Kaveriii from './Kaveriii'
import Kaveriiii from './Kaveriiii'
import styledComponents from 'styled-components'
 function Home() {
  return (
      <HiIamContainer>
    <Kaveri
     title="model Y"
     description="test"
     backgroundImg="model-y.jpg"
    />
     <Kaverii
     title="model S"
     description="test"
     backgroundImg="model-s.jpg"
     />
    <Kaveriii
     title="model 3"
     description="test"
     backgroundImg="model-3.jpg"
     />
     <Kaveriiii
     title="model X"
     description="test"
     backgroundImg="model-x.jpg"
     />

    </HiIamContainer>

   )
  }
  export default Home
  const HiIamContainer=styledComponents.div``
