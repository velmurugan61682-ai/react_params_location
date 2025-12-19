import { Route, Routes } from "react-router-dom"
import MainLayout from "./components/MainLayout"
import Home from "./components/Home"
import About from "./components/About"
import Login from "./components/Login"
import Register from "./components/Register"




const App = () => {
  return (
    <>
    <Routes>
     <Route path="/Register" element={<Register/>} /> 
    <Route path="/Login" element={<Login/>} />
    <Route element={<MainLayout/>}>
    <Route path="/" element={<Home/>} />
    <Route path="/About" element={<About/>} />
    
        </Route>
        </Routes>
        
        </>
  )
}

export default App