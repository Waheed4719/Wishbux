import './App.css';
import Header from './components/Home/Header';
import Hero from './components/Home/Hero';
import HowItWorks from './components/Home/HowItWorks';
import Features from './components/Home/Features';
import Footer from './components/Home/Footer';
import Reviews from './components/Home/Reviews/index';
import Benefits from './components/Home/Benefits';
import Drawer from './components/Home/Drawer';
import EarlyAccess from './components/Home/EarlyAccess';

export default () => (
    <div className='App'>
        <Header />
        <Hero />
        <HowItWorks />
        <Features />
        <Benefits />
        <Reviews />
        <EarlyAccess />
        <Footer />
        <Drawer />
    </div>
);
