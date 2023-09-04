import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "../pages/Home";
import Patient from "../pages/Patient";

const PagesRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/patient/:slug" element={<Patient/>}/>
            </Routes>
        </Router>
    )
}

export default PagesRoutes