import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import Routes and Route  
import LandingPage from "./components/LandingPage";  
import EmailVerificationPage from "./components/EmailVerificationPage";  
import FlatListingsPage from "./components/FlatListing";  
import VerificationCodePage from "./components/VerificationCodePage";  
import RoomRequirementForm from './components/RoomRequirement';

import './App.css'

function App() {  
  return (  
    <BrowserRouter>  
      <Routes>  
        <Route path="/" element={<LandingPage />} />  
        <Route path="/emailverification" element={<EmailVerificationPage />} />  
        <Route path="/verificationcode" element={<VerificationCodePage />} />  
        <Route path="/flatlistings" element={<FlatListingsPage />} />
        <Route path="/roomrequirements" element={<RoomRequirementForm/>} /> 
        <Route path="/roomrequirement" element={<RoomRequirementForm />} />
        
      </Routes>  
    </BrowserRouter>  
  );  
}  

export default App;