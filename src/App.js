import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About'
import Contact from './components/pages/Contact'

function App() {
  return (
    <>
      <BrowserRouter>
        
        {/* IT CREATES CLICKABLE LINK TO SPECIFIC PAGE */}

        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
        </ul>

        {/* IT DEFINES THE PATH TO THE PARTICULAR PAGE
          RENDERS THE PAGES ON DOCUMENT 
         */}  
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;