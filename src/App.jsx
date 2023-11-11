import { Route, Routes } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import Login from "./Pages/User/Login"
import SignUp from "./Pages/User/SignUp"


function App() { 

  
 
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}  /> 
      <Route path="/login" element={<Login/>}  />
      <Route path="/signup" element={<SignUp/>} />
    </Routes>
  )
}

export default App
