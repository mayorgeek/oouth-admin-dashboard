import './App.css';
import {Navigate, Route} from "react-router";
import Home from "./Pages/Home/Home";
import {createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom";
import Default from "./Layouts/Default";
import Appointments from "./Pages/Appointments/Appointments";
import Profile from "./Pages/Profile/Profile";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Auth from "./Layouts/Auth";
import AddDrug from "./Pages/AddDrug/AddDrug";
import Drugs from "./Pages/Drugs/Drugs";
import Transactions from "./Pages/Transactions/Transactions";
import Patients from "./Pages/Patients/Patients";
import Doctors from "./Pages/Doctors/Doctors";

const router = createBrowserRouter(createRoutesFromElements([
    <Route path="/" element={<Default/>}>
        <Route index element={<Navigate to="/home"/>} />

        <Route path="/home" element={<Home/>} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/drugs" element={<Drugs />} />
        <Route path="/add-drug" element={<AddDrug />} />
        <Route path="/patients" element={<Patients />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/profile" element={<Profile />} />
    </Route>,
    <Route path="/auth" element={<Auth />}>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
    </Route>
]));

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
