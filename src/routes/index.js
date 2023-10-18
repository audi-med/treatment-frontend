import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import ViewPatients from "../pages/ViewPatients";
import ViewPatient from "../pages/ViewPatient";
import Signin from "../pages/Signin";

const PagesRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/signin" element={<Signin/>}/>
                <Route path="/" element={<ViewPatients/>}/>
                <Route path="/patient/:id" element={<ViewPatient/>}/>
            </Routes>
        </Router>
    )
}

export default PagesRoutes
