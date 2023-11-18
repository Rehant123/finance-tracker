import Home from "./Home/Home";
import Signup from "./Signup/Signup";
import Login from "./Login/Login";
import { BrowserRouter,Route,Routes } from "react-router-dom";

import Navbar from "./Components/Navbar";



function App(){
  return(
    <div className="App">
<BrowserRouter>
<Navbar/>
<Routes>
  
  <Route  path = "/" element = {<Home/>}/>
  <Route  path = "/signup" element = {<Signup/>}/>
  <Route  path = "/login" element = {<Login/>}/>
</Routes>

</BrowserRouter>
    </div>
  )
}
export default App;