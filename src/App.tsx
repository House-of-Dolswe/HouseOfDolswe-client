import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import AudioPage from "./pages/audioPage";
import GuestHome from "./pages/guestHome";
import Onboarding from "./pages/onboarding";
import Call from "./pages/call";
import ThanksTo from "./pages/thanksTo";
import Settings from "./pages/settings/settings";
import Account from "./pages/settings/account";
import ServicePolicy from "./pages/settings/servicePolicy";
import DataPolicy from "./pages/settings/dataPolicy";



function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<GuestHome />} />
        <Route path="/audio" element={<AudioPage />} />
        <Route path="/guest" element={<Home />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/call" element={<Call />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/thanks" element={<ThanksTo />} />
        <Route path="/settings/account" element={<Account />} />
        <Route path="/settings/servicePolicy" element={<ServicePolicy />} />
        <Route path="/settings/dataPolicy" element={<DataPolicy />} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;

