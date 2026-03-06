import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import Gallery from './components/Gallery';
import VirtualTinter from './components/VirtualTinter';
import TintLaws from './components/TintLaws';
import About from './components/About';
import Contact from './components/Contact';
import { UpgradeBanner } from './components/ui/upgrade-banner';

export type PageType = 'home' | 'services' | 'work' | 'virtual' | 'laws' | 'about' | 'contact';

function App() {
  const [activePage, setActivePage] = useState<PageType>('home');
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBanner(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const renderPage = () => {
    switch (activePage) {
      case 'home': return <Home setPage={setActivePage} />;
      case 'services': return <Services />;
      case 'work': return <Gallery />;
      case 'virtual': return <VirtualTinter />;
      case 'laws': return <TintLaws />;
      case 'about': return <About />;
      case 'contact': return <Contact />;
      default: return <Home setPage={setActivePage} />;
    }
  };

  return (
    <div className="app-container dark" style={{ position: 'relative', minHeight: '100vh', overflowX: 'hidden' }}>
      <Navbar activePage={activePage} setPage={setActivePage} />

      <AnimatePresence>
        {showBanner && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            style={{
              position: 'fixed',
              top: '80px',
              left: 0,
              right: 0,
              zIndex: 90,
              padding: 0,
              margin: 0,
            }}>
            <UpgradeBanner
              buttonText="Book Now"
              description="— 15% off window tinting this week only!"
              onClose={() => setShowBanner(false)}
              onClick={() => setActivePage('contact')}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Global Background Elements */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 50% 10%, #111 0%, #050505 100%)',
        zIndex: -2,
      }} />
    </div>
  );
}

export default App;
