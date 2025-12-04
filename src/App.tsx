import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import KakaoRedirectHandler from "./pages/KakaoRedirectHandler";
import AudioPage from "./pages/audioPage";
import GuestHome from "./pages/guestHome";
import Onboarding from "./pages/onboarding";
import Call from "./pages/call";
import ThanksTo from "./pages/thanksTo";
import Settings from "./pages/settings";
import Account from "./pages/account";
import ServicePolicy from "./pages/servicePolicy";
import DataPolicy from "./pages/dataPolicy";


function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<GuestHome />} />
        <Route path="/login/oauth" element={<KakaoRedirectHandler />} />
        <Route path="/audio" element={<AudioPage />} />
        <Route path="/guest" element={<Home />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/call" element={<Call />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/thanks" element={<ThanksTo />} />
        <Route path="/account" element={<Account />} />
        <Route path="/servicePolicy" element={<ServicePolicy />} />
        <Route path="/dataPolicy" element={<DataPolicy />} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;

