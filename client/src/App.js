import './App.css';
import Layout from './components/Layout/Layout.js'
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage.js';
import Pagenotfound from './pages/Pagenotfound.js';
import Policy from './pages/Policy.js';
import Contact from './pages/Contact.js';
import About from './pages/About.js';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/policy' element={<Policy />} />
        <Route path='/*' element={<Pagenotfound />} />
      </Routes>

    </>
  );
}

export default App;
