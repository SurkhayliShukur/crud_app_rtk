import { Routes, Route } from "react-router-dom"
import Home from "./Components/Home"
import AddItem from "./Components/AddItem"
import { ROUTER } from "./constant/Router"
import Navbar from "./Components/Navbar"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path={ROUTER.Home} element = {<Home/>}/>
      <Route path={ROUTER.AddProduct} element = {<AddItem/>}/>
    </Routes>
    <ToastContainer/>
    </>
  )
}

export default App
