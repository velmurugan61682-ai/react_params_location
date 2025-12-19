import { Route, Routes } from "react-router-dom"
import MainLayout from "./components/MainLayout"
import Home from "./components/Home"
import About from "./components/About"



const App = () => {
  return (
    <>
    <Routes>
      <Route path="/About" element={<About/>} />
     
   <Route element={<MainLayout/>}>
   <Route path="/" element={<Home/>} />
   
         
          
        </Route>
        </Routes>
        
        </>
  )
}

export default App