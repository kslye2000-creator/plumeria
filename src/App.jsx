import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Explore from './pages/Explore';
import Contact from './pages/Contact';

function App() {
  const [activePage, setActivePage] = useState('home');
  const [preSelectedRoom, setPreSelectedRoom] = useState('');

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Home setActivePage={setActivePage} setPreSelectedRoom={setPreSelectedRoom} />;
      case 'rooms':
        return <Rooms setActivePage={setActivePage} setPreSelectedRoom={setPreSelectedRoom} />;
      case 'explore':
        return <Explore setActivePage={setActivePage} />;
      case 'contact':
        return <Contact preSelectedRoom={preSelectedRoom} />;
      default:
        return <Home setActivePage={setActivePage} setPreSelectedRoom={setPreSelectedRoom} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-brand-sand text-brand-forest">
      {/* Top Navbar */}
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      {/* Main Dynamic Viewport with a smooth page fade-in transition */}
      <main className="flex-grow animate-fade-in" key={activePage}>
        {renderPage()}
      </main>

      {/* Footer banner */}
      <Footer setActivePage={setActivePage} />
    </div>
  );
}

export default App;
