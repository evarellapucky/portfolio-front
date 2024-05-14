import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home/index';
import About from './pages/About/index';
import Works from './pages/Works/index';
import Contact from './pages/Contact/index';
import Navbar from './Components/Navbar'
import Exercices from './pages/Works/Exercices';
import CaseStudies from './pages/Works/CaseStudies';
import Projects from './pages/Works/Projects';
import ProjectDetail from './pages/Works/ProjectDetail';
import { useTheme } from './ThemeContext';
import Footer from './Components/Footer';


function App() {
  const darkTheme = useTheme();

  useEffect(() => {
    if (darkTheme) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [darkTheme]);

  
  return (
    <>
     
        <BrowserRouter>
      
            <Navbar/>

            <main>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/works' element={<Works />} />
                  <Route path='/works/exercices' element={<Exercices />} />
                  <Route path='/works/casestudies' element={<CaseStudies />} />
                  <Route path='/works/projects' element={<Projects />} />
                  <Route path='/works/projects/:slug' element={<ProjectDetail />} />
                <Route path='/contact' element={<Contact />} />
              </Routes>
          </main>
         <Footer />
        </BrowserRouter>
        
    </>
  )
}

export default App
