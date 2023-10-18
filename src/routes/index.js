import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import ViewPatients from "../pages/ViewPatients";
import ViewPatient from "../pages/ViewPatient";
import Signin from "../pages/Signin";
import RegisterPatient from "../pages/RegisterPatient";
import ChangePatient from "../pages/ChangePatient";

const PagesRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/signin" element={<Signin/>}/>
                <Route path="/" element={<ViewPatients/>}/>
                <Route path="/patient/:id" element={<ViewPatient/>}/>
                <Route path="/register-patient" element={<RegisterPatient/>}/>
                <Route path="/change-patient" element={<ChangePatient/>}/>
            </Routes>
        </Router>
    )
}

export default PagesRoutes
