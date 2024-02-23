import { Routes, Route } from "react-router-dom"
import Home from "./Components/Home"
import { ROUTER } from "./constant/Router"

function App() {

  return (
    <>
    <Routes>
      <Route path={ROUTER.Home} element = {<Home/>}/>
    </Routes>
    </>
  )
}

export default App
