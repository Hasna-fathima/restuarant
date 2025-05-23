import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Hero from './Components/Hero.tsx';
import Contact from './Components/Contact.tsx';
import Menu from './Components/Menu.tsx'; 
import AboutUs from './Components/About.tsx';
import Footer from './Components/Footer.tsx'

function App() {
  return (
    <Router>
      <div className="bg-black min-h-screen">
        <div className="px-4 md:px-12">
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <AboutUs/>
                  <Footer/>
                </>
              }
            />
            <Route path="/menu" element={<Menu />}/>
            <Route path='/contact' element={<Contact/>} />
          
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;