import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import "./style/main.css";
import Login from "./pages/login";
import Register from "./pages/register";
import { UserContext, UserContextProvider } from "./context/usercontext";
import Account from "./components/accountNav";
import PlacesPage from "./pages/placesPage";
import AddPlacesForm from "./pages/addPlacesForm";
import axios from "axios";
import IndexPage from "./pages/indexPage";
import PlacePage from "./pages/PlacePage";
import BookingsPage from "./pages/BookingsPage";
import LandingPage from "./pages/LandingPage";

axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider value>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<IndexPage />} />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="/account/" element={<Account />} />
            <Route path="/account/bookings" element={<BookingsPage />} />

            <Route path="/account/places" element={<PlacesPage />} />
            <Route path="/account/places/new" element={<AddPlacesForm />} />
            <Route path="/place/:id" element={<PlacePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
