import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "../pages/Home";
import Signin from "../pages/Signin";
import ViewPatients from "../pages/ViewPatients";
import ViewPatient from "../pages/ViewPatient";
import ViewReceptionists from "../pages/ViewReceptionists";
import ViewReceptionist from "../pages/ViewReceptionist";

const PagesRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/signin" element={<Signin/>}/>
                <Route path="/receptionists" element={<ViewReceptionists/>}/>
                <Route path="/receptionists/:id" element={<ViewReceptionist/>}/>
                <Route path="/patients" element={<ViewPatients/>}/>
                <Route path="/patients/:id" element={<ViewPatient/>}/>
            </Routes>
        </Router>
    )
}

export default PagesRoutes
