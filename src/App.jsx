import { BrowserRouter } from "react-router-dom"
import {About,Footer, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas} from "./components"



const App = () => {


  return (
    <BrowserRouter>
    <div className="relative max-w-8xl z-0 bg-[#1a1a1a]">
        <div className=" bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar></Navbar>
            <Hero></Hero>
        </div>
        <About></About>
        {/* <Experience></Experience> */}
        <div className="relative z-0">
        <Tech></Tech>
        <StarsCanvas></StarsCanvas>
        </div>
        <Works></Works>
        {/* <Feedbacks></Feedbacks> */}
       
          <Contact></Contact>
          <Footer></Footer>
         
       
    </div>
    </BrowserRouter>
  )
}

export default App
