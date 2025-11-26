import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HeartProvider } from "./context/heartContext";
import Home from "./pages/home";
import AudioPage from "./pages/audioPage";
import GuestHome from "./pages/guestHome";
import Onboarding from "./pages/onboarding";
import Call from "./pages/call";
import ThanksTo from "./pages/thanksTo";
import Settings from "./pages/settings";


function App() {
  return (
    <HeartProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<GuestHome />} />
        <Route path="/audio" element={<AudioPage />} />
        <Route path="/guest" element={<Home />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/call" element={<Call />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/thanks" element={<ThanksTo />} />
      </Routes>
      </BrowserRouter>
    </HeartProvider>
  );
}

export default App;

