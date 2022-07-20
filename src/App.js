import React from 'react';
import Firstpage from './components/Firstpage';
import Adminlogin from './components/Admin-login/Adminlogin'
import Register from './components/Signup/Register';
import Login from './components/Log-in/Login';
import Dashboard from './components/Main-Part/Dashboard/Dashboard';
import Complete from './components/Signup/Complete';
import {BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"; 

const App = () =>{
  return(
<>
<Router>
{/* <Firstpage/> */}

<Routes> 
  <Route path = "/" element={<Firstpage/>}></Route>
  <Route path = "/Adminlogin" element={<Adminlogin/>}></Route>
  <Route path = "/Register" element={<Register/>}></Route>
  <Route path = "/Login" element={<Login/>}></Route>
  <Route path = "/Complete" element={<Complete/>}></Route>
  <Route path = "/Dashboard" element={<Dashboard/>}></Route>

</Routes>
</Router>
</>
  )
}

export default App;