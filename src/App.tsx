import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import ProjectSection from './components/ProjectSection';
import BibliographySection from './components/BibliographySection';
import TeamSection from './components/TeamSection';
import InspirationSection from './components/InspirationSection';
import ShowcaseSection from './components/ShowcaseSection';
import AnimationSection from './components/AnimationSection'; // Import the new section
import './App.css';
import { motion } from 'framer-motion';
import { FaGlobe } from 'react-icons/fa';

function App() {
  return (
    <div>
      <Router>
        <div className='min-h-screen bg-blue-50'>
          <header className='bg-gradient-to-r from-blue-600 to-blue-400 p-4 text-white sticky top-0 z-50 shadow-lg'>
            <nav className='container mx-auto flex justify-between items-center'>
              <motion.h1
                className='text-3xl font-bold text-yellow-300 flex items-center space-x-2'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ type: 'spring', stiffness: 120, damping: 20 }}
              >
                <FaGlobe className='animate-spin-slow' />
                <span>Gumball Fan Project</span>
              </motion.h1>
              <motion.div
                className='hidden md:flex items-center space-x-4'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              ></motion.div>
            </nav>
          </header>

          <main className='container mx-auto px-4 py-8'>
            <Routes>
              <Route
                path='/'
                element={
                  <>
                    <HeroSection />
                    <ProjectSection />
                    <TeamSection />
                    <BibliographySection />
                    <InspirationSection />
                    <ShowcaseSection />
                    
                  </>
                }
              />
              <Route
                path='/AnimationSection'
                element={<AnimationSection />}
              />{' '}
              {/* Define the route for AnimationSection */}
            </Routes>
          </main>

          <footer className='bg-blue-600 text-white py-6 text-center'>
            <p className='font-semibold'>
              Made with a whole lot of love, sarcasm, and possibly some
              questionable decisions. <br />
              &copy; {new Date().getFullYear()} Gumball Fan Project. All rights
              reserved. Or not, who’s checking? 🤷‍♂️
            </p>
          </footer>
        </div>
      </Router>
    </div>
  );
}

export default App;
