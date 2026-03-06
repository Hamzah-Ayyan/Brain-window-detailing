import { useState } from 'react';
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
  const [showBanner, setShowBanner] = useState(true);

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
      {showBanner && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 101,
          padding: '8px 0',
          background: 'rgba(5, 5, 5, 0.9)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
        }}>
          <UpgradeBanner
            buttonText="Book Now"
            description="— 15% off window tinting this week only!"
            onClose={() => setShowBanner(false)}
            onClick={() => setActivePage('contact')}
          />
        </div>
      )}
      <Navbar activePage={activePage} setPage={setActivePage} bannerVisible={showBanner} />

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
