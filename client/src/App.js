import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './pages/home';
import './style/main.css';
import Login from './pages/login';
import Register from './pages/register';
import { UserContext , UserContextProvider } from "./context/usercontext";
import Account from './components/accountNav';
import PlacesPage from './pages/placesPage';
import AddPlacesForm from './pages/addPlacesForm';
import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:8000';


function App() {
  return (
    <UserContextProvider value>

    <BrowserRouter>
    <Routes>
      <Route path = "/" element ={<Home/>} >

      <Route path = "/api/login" element ={<Login />} />
      <Route path = "/api/register" element ={<Register />} />
      <Route path = "/api/account/" element ={<Account />} />
      <Route path = "/api/account/places" element ={<PlacesPage />} />
      <Route path = "/api/account/places/new" element ={<AddPlacesForm />} />

     




      </Route>


    </Routes>
    </BrowserRouter>
    </UserContextProvider>

    
  
  );
}

export default App;
