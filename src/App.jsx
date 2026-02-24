// app.jsx - FIXED VERSION
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Classes from "./pages/Classes";
import ReadingList from "./pages/ReadingList";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-swash-2 text-white font-manrope text-xl">
        <Navbar />
        <div className="gradient" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/reading-list" element={<ReadingList />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
