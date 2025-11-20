import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import AudioPage from "./pages/audioPage";
import GuestHome from "./pages/guestHome";
import Onboarding from "./pages/onboarding";
import Notice from "./pages/notice";
import Settings from "./pages/settings";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GuestHome />} />
        <Route path="/audio" element={<AudioPage />} />
        <Route path="/guest" element={<Home />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

