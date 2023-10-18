import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import ViewPatients from "../pages/ViewPatients";
import ViewPatient from "../pages/ViewPatient";
import Signin from "../pages/Signin";
import RegisterPatient from "../pages/RegisterPatient";

const PagesRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/signin" element={<Signin/>}/>
                <Route path="/" element={<ViewPatients/>}/>
                <Route path="/patient/:id" element={<ViewPatient/>}/>
                <Route path="/register-patient" element={<RegisterPatient/>}/>
            </Routes>
        </Router>
    )
}

export default PagesRoutes
