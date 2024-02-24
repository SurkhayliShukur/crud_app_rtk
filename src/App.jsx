import { Routes, Route } from "react-router-dom"
import Home from "./Components/Home"
import AddItem from "./Components/AddItem"
import { ROUTER } from "./constant/Router"

function App() {

  return (
    <>
    <Routes>
      <Route path={ROUTER.Home} element = {<Home/>}/>
      <Route path={ROUTER.AddProduct} element = {<AddItem/>}/>
    </Routes>
    </>
  )
}

export default App
