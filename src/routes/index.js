import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "../pages/Home";
import Patient from "../pages/Patient";
import Signin from "../pages/Signin";
import RegisterPatient from "../pages/RegisterPatient";

const PagesRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/patient/:id" element={<Patient/>}/>
                <Route path="/signin" element={<Signin/>}/>
                <Route path="/register-patient" element={<RegisterPatient/>}/>
            </Routes>
        </Router>
    )
}

export default PagesRoutes
