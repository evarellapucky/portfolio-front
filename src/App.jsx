import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home/index';
import About from './pages/About/index';
import Works from './pages/Works/index';
import Contact from './pages/Contact/index';
import Navbar from './Components/Navbar'
import Exercices from './pages/Works/Exercices';
import CaseStudies from './pages/Works/CaseStudies';
import Projects from './pages/Works/Projects';
import ProjectDetail from './pages/Works/ProjectDetail';


function App() {
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
      </BrowserRouter>
    </>
  )
}

export default App
