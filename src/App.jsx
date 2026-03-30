import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetail from "./pages/ServiceDetail";
import Work from './pages/Work';
import About from './pages/About';
import Insights from './pages/Insights';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import FloatingButtons from './components/FloatingButtons';

// Page meta updater
const pageMeta = {
  '/': {
    title: 'MEY | Branding & Digital Marketing Agency in Chennai',
    description: 'MEY is a premium branding and digital marketing agency in Chennai offering brand identity, social media management, website development, performance marketing and outdoor advertising.',
  },
  '/services': {
    title: 'Branding, Social Media & Website Design Services in Chennai | MEY',
    description: "Explore MEY's branding, social media marketing, website development, video production and advertising services in Chennai.",
  },
  '/work': {
    title: 'Branding & Marketing Projects | MEY Chennai',
    description: 'Explore branding, social media, website and advertising projects delivered by MEY.',
  },
  '/about': {
    title: 'About MEY | Branding Agency in Chennai',
    description: "Learn about MEY, a branding and digital marketing agency in Chennai built on the principle Truth Before Business.",
  },
  '/insights': {
    title: 'ThinkLab | MEY Chennai',
    description: 'Structured thinking on branding, marketing and digital growth from the MEY team in Chennai.',
  },
  '/contact': {
    title: 'Contact MEY | Branding & Marketing Agency Chennai',
    description: 'Start your branding or marketing project with MEY. Tell us about your business and goals.',
  },
};

const MetaUpdater = () => {
  const location = useLocation();

  useEffect(() => {
    const meta = pageMeta[location.pathname];
    if (meta) {
      document.title = meta.title;
      let descEl = document.querySelector('meta[name="description"]');
      if (descEl) descEl.setAttribute('content', meta.description);
    }
    // Scroll to top on route change
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [location.pathname]);

  return null;
};

const Layout = ({ children }) => (
  <div className=''>
    <Navbar />
    {children}
    <Footer />
    <FloatingButtons />
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <MetaUpdater />
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/services"
          element={
            <Layout>
              <Services />
            </Layout>
          }
        />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route
          path="/work"
          element={
            <Layout>
              <Work />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="/insights"
          element={
            <Layout>
              <Insights />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
        <Route
          path="*"
          element={
            <Layout>
              <NotFound />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;