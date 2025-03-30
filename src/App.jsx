import React from 'react'
import LandingPage from './components/LandingPage'
import Page2 from './components/Page2'
import Page3 from './components/Page3'
import Page4 from './components/Page4'

const App = () => {
  return (
    <div className='w-full h-screen bg-red-950'>
      <LandingPage />
      <Page2 />
      <Page3 />
      <Page4 />
    
    </div>
  )
}

export default App