import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home.js';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Work from './pages/Work.js';
import Contact from './pages/Contact.js';

function App() {
  return (
    <div className="App">
      <Router>
       <Navbar/>
         <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/about' element={<About/>} />
         <Route path='/work' element={<Work/>} />
         <Route path='/contact' element={<Contact/>}/>
         </Routes>
         <Footer/>
      </Router>
    </div>
  );
}

export default App;
