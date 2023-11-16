import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './pages/home';
import './style/main.css';
import Login from './pages/login';
import Register from './pages/register';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/" element ={<Home/>} >

      <Route path = "/api/login" element ={<Login />} />
      <Route path = "/api/register" element ={<Register />} />

      </Route>


    </Routes>
    </BrowserRouter>
    
  
  );
}

export default App;
