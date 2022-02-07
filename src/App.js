import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";

//component
import NavBar from "./components/NavBar";
import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";
import StoreSignup from "./components/auth/StoreSignup";
import StoresList from "./components/stores/StoresList";
import ReservationList from "./components/reservations/ReservationList";
import RequestsList from "./components/requests/RequestsList";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/store/signup" element={<StoreSignup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/stores" element={<StoresList />} />
        <Route path="/reservations" element={<ReservationList />} />
        <Route path="/requests" element={<RequestsList />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
