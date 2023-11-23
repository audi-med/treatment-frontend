import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "../pages/Home";
import Signin from "../pages/Signin";
import ViewDoctors from "../pages/ViewDoctors";
import ViewDoctor from "../pages/ViewDoctor";
import ViewReceptionists from "../pages/ViewReceptionists";
import ViewReceptionist from "../pages/ViewReceptionist";
import ViewPatientsResults from "../pages/ViewPatientsResults";
import ViewPatientResults from "../pages/ViewPatientResults";
import ViewPatients from "../pages/ViewPatients";
import ViewPatient from "../pages/ViewPatient";
import Patient from "../pages/Patient";
import Exam from "../pages/Exam";
import Results from "../pages/Results";

const PagesRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/signin" element={<Signin/>}/>
                <Route path="/doctors" element={<ViewDoctors/>}/>
                <Route path="/doctors/:id" element={<ViewDoctor/>}/>
                <Route path="/receptionists" element={<ViewReceptionists/>}/>
                <Route path="/receptionists/:id" element={<ViewReceptionist/>}/>
                <Route path="/patients/results" element={<ViewPatientsResults/>}/>
                <Route path="/patients/results/:id" element={<ViewPatientResults/>}/>
                <Route path="/patients" element={<ViewPatients/>}/>
                <Route path="/patients/:id" element={<ViewPatient/>}/>
                <Route path="/patient/" element={<Patient/>}/>
                <Route path="/patient/treatment" element={<Exam/>}/>
                <Route path="/patient/results" element={<Results/>}/>
            </Routes>
        </Router>
    )
}

export default PagesRoutes
