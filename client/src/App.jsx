import Menu from './components/Menu.jsx';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Resume from './pages/Resume.jsx';
import Contact from './pages/Contact.jsx';
import FooterComponent from './components/FooterComponent.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  );
};
export default App;
