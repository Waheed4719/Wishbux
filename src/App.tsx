import './App.css';
import Header from './components/Home/Header';
import Hero from './components/Home/Hero';
import HowItWorks from './components/Home/HowItWorks';
import Features from './components/Home/Features';
import Footer from './components/Home/Footer';
import Reviews from './components/Home/Reviews/index';

export default () => (
    <div className='App'>
        <Header />
        <Hero />
        <HowItWorks />
        <Features />
        <Reviews />
        <Footer />
    </div>
);
