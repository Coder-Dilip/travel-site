import React from 'react'
import AddProduct from './AddProduct'
import Header from './Components/Header'
import LandingPage from './Components/landingPage'
import Mainsection from './Components/Mainsection'
import PopularDestination from './Components/PopularDestination'
import WhyChooseUs from './Components/WhyChooseUs'
import "./Style-Components/app.css"

function App() {
  return (
<>
<Header />
<LandingPage />
<Mainsection/>
<WhyChooseUs/>
<PopularDestination/>
<AddProduct />
  </> 
  )
}

export default App
