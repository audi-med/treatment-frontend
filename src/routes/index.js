import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "../pages/Home";
import Patient from "../pages/Patient";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";

const PagesRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/patient/:slug" element={<Patient/>}/>
                <Route path="/signin" element={<Signin/>}/>
                <Route path="/signup" element={<Signup/>}/>
            </Routes>
        </Router>
    )
}

export default PagesRoutes