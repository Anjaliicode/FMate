import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import Routes and Route
import LandingPage from "./components/LandingPage";
import EmailVerificationPage from "./components/EmailVerificationPage";
import FlatListingsPage from "./components/FlatListing";
import VerificationCodePage from "./components/VerificationCodePage";
import RoomRequirementForm from "./components/RoomRequirement";
import SelectionPage from "./components/SelectionPage";
// import FindFlatmate from "./components/FindFlatmate";
// import FindFlat from "./components/FindFlat";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/emailverification" element={<EmailVerificationPage />} />
        <Route path="/verificationcode" element={<VerificationCodePage />} />
        <Route path="/flatlistings" element={<FlatListingsPage />} />
        <Route path="/roomrequirements" element={<RoomRequirementForm />} />
        {/* <Route path="/roomrequirement" element={<RoomRequirementForm />} /> */}
        <Route path="/selection" element={<SelectionPage />} />
{/* <Route path="/find-flatmate" element={<FindFlatmate />} /> */}
{/* <Route path="/find-flat" element={<FindFlat />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
