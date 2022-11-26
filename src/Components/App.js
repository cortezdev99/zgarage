import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../Styles/index.scss";
import Footer from "./Footer/Footer";
import Homepage from "./Home/Homepage";
import Login from "./Login/Login";
import Navbar from "./Navbar/Navbar";
import OurTeam from "./OurTeam/OurTeam";
import PhotoGallery from "./PhotoGallery/PhotoGallery";
import Pricing from "./Pricing/Pricing";
import ScheduleAppointment from "./ScheduleAppointment/ScheduleAppointment";
import Icons from "./Utilities/Icons";

const App = () => {
  Icons();

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route
            exact
            path="/schedule-an-appointment"
            element={<ScheduleAppointment />}
          />
          <Route exact path="/pricing" element={<Pricing />} />
          <Route exact path="/our-team" element={<OurTeam />} />
          <Route exact path="/photo-gallery" element={<PhotoGallery />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
