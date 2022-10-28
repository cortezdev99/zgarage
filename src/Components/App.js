import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../Styles/index.scss";
import Homepage from "./Home/Homepage";
import Navbar from "./Navbar/Navbar";
import Icons from "./Utilities/Icons";

const App = () => {
  Icons();
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/schedule-an-appointment" element={<Homepage />} />
          <Route exact path="/pricing" element={<Homepage />} />
          <Route exact path="/our-team" element={<Homepage />} />
          <Route exact path="/photo-gallery" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
