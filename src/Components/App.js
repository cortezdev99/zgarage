import "../Styles/index.scss";
import Navbar from "./Navbar/Navbar";
import Icons from "./Utilities/Icons";

const App = () => {
  Icons();
  return (
    <div className="App">
      <Navbar />
    </div>
  );
};

export default App;
