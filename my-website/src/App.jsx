import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="container mx-auto p-4">
        <nav className="flex justify-between items-center py-4">
          <h1 className="text-2xl font-bold">My Website</h1>
          <div className="space-x-4">
            <Link to="/" className="text-blue-500">Home</Link>
            <Link to="/about" className="text-blue-500">About</Link>
            <Link to="/contact" className="text-blue-500">Contact</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
