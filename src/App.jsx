
import './App.css'
import NavMenu from "./Components/NavMenu/MenuNav.jsx";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from "./Screens/Home/Home.jsx"


function App() {
  

  return (
    <BrowserRouter>
   
            <NavMenu  />
              <Routes>
                <Route exact path='/MyPersonalApp' element={<Home/>}> </ Route>                  
              </Routes>   
        
    </BrowserRouter>
  )
}

export default App
