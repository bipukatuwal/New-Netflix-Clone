import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Films from "./components/Films";
import Latest from "./components/Latest";
import MyList from "./components/MyList";
import Home from "./components/Home";
import Series from "./components/Series";

import Footer from "./components/Footer";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/films" element={<Films />} />
          <Route path="/latest" element={<Latest />} />
          <Route path="/mylist" element={<MyList />} />
          <Route path="/series" element={<Series />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
