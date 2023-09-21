import { Route, Routes } from "react-router-dom"
import { NavBar } from "./components/NavBar"
import { Home } from "./routes/Home"
import { About } from "./routes/About"


export const App = () => {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/proyecto-4-react/" element={<Home/>}/>
        <Route path="proyecto-4-react/about" element={<About/>}/>
      </Routes>
    </>

  )
}

