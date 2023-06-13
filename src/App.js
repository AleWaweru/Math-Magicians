import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import CalculatorPage from './components/pages/CalculatorPage';
import QuotePage from './components/pages/QuotePage';

const App = () => (
  <div className="App">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<CalculatorPage />} />
      <Route path="/quote" element={<QuotePage />} />
    </Routes>
  </div>
);

export default App;
