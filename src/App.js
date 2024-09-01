import Footer from "./Footer";
import Navbar from "./navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import LeaderBoard from "./pages/LeaderBoard";
import Login from "./pages/Login";
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <div className="Container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/LeaderBoard" element={<LeaderBoard />}></Route>
          <Route path="/About" element={<About />}></Route>
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
