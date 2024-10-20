import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'primereact/resources/primereact.min.css'; 
//PAGES
import GetStarted from './pages/GetStarted'
import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup'
import Home from './pages/Home'

function App() {
 

  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" Component={GetStarted}/>
            <Route path="/login" Component={Login}/>
            <Route path="/signup" Component={Signup}/>
            <Route path="/home" Component={Home}/>

        </Routes>
      </BrowserRouter>
  )
}

export default App
