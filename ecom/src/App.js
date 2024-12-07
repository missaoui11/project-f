import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import React Router components
import Navbare from './components/Navbare';
import Coursl from './components/Coursl';
import Footer from './components/Footer';
import Side from './components/Side';
import Login from './components/login';
import Aide from './components/Aide';
import ContactUs from './components/ContactUs';
import CardList from './components/CardList'; // Import the CardList component

function App() {
  return (
    <div className="App">
      <Router>
        {/* Navbar is common across all pages */}
        <Navbare />
        
        <Routes>
          {/* Define routes for different components */}
          <Route path="/login" element={<Login />} />
          <Route path="/Aide" element={<Aide />} />
          <Route path="/contact" element={<ContactUs />} />
          
          {/* Correct route for CardList component */}
          <Route path="/CardList" element={<CardList />} />
          
          {/* Default route */}
          <Route
            path="/"
            element={
              <div className="face1">
                {/* Side and Coursl components */}
                <Side />
                <Coursl />
              </div>
            }
          />
        </Routes>

        {/* Footer is also common across all pages */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
