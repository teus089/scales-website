import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import WebDesign from './pages/WebDesign';
import Marketing from './pages/Marketing';
import AIIntegration from './pages/AIIntegration';
import Automation from './pages/Automation';
import CustomSoftware from './pages/CustomSoftware';
import About from './pages/About';
import Contact from './pages/Contact';
import Referrals from './pages/Referrals';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/web-design" element={<WebDesign />} />
          <Route path="/services/marketing" element={<Marketing />} />
          <Route path="/services/ai-integration" element={<AIIntegration />} />
          <Route path="/services/automation" element={<Automation />} />
          <Route path="/services/custom-software" element={<CustomSoftware />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/referrals" element={<Referrals />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
