import { Route, Routes } from "react-router-dom"
import Nav from "./components/Nav"
import Home from "./components/Home"
import About from "./components/About"


const App = () => {
  return (
    <>
    <Nav/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/About" element={<About/>}/>


   

    </Routes>
    
    
    </>
  )
}

export default App