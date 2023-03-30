import "./App.css";
import Homepage from "./container/homepage";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Series from "./container/seriespage";
import Movies from "./container/moviespage";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/Series" element={<Series />} />
          <Route exact path="/Movies" element={<Movies />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
