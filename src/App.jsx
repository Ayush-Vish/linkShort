import { Route, Routes } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import Login from "./Pages/User/Login"


function App() {
 
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}  /> 
      <Route path="/login" element={<Login/>}  />
    </Routes>
  )
}

export default App
