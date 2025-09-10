import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Timer from './components/Timer';
import Art from './components/Art';
import HomeCard from './components/Home_C.js';
import Middle from './components/Middle_comp.js';
import Artist from './components/Top_artist.js';
import Footer from './components/footer.js';
import Home from './page/Home.js';
import Explore from './page/Explore.js';
import Market from './page/Market.js';
import Creator from './page/Creator.js';
import Buy from './page/Buy.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/market" element={<Market />} />
          <Route path="/creator" element={<Creator />} />
          <Route path="/art" element={<Art />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/timer" element={<Timer />} />
          <Route path="/Home_c" element={<HomeCard />} />
          <Route path="/middle_comp" element={<Middle />} />
          <Route path="/top_artist" element={<Artist />} />
          {/* <Route path="/footer" element={<Footer />} /> */}
        </Routes>
          <Footer />
      </Router>
    </div>
  );
}
export default App;