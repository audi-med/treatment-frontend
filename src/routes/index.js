import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Signin from "../pages/Signin";
import ViewPatients from "../pages/ViewPatients";
import ViewPatient from "../pages/ViewPatient";

const PagesRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/signin" element={<Signin/>}/>
                <Route path="/patients" element={<ViewPatients/>}/>
                <Route path="/patients/:id" element={<ViewPatient/>}/>
            </Routes>
        </Router>
    )
}

export default PagesRoutes
