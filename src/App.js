import Navbar from './Navbar';
import Footer from './Footer';
import HomeCarousel from './components/home/Carousel';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import {Route, Routes} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className='main-routes'>
        <Routes>
          <Route path="/" element={<HomeCarousel />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>      
      
      <Footer />
      
      
    </div>
  );
}

export default App;
