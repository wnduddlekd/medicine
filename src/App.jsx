import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Meds from './pages/Meds';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/medicines" element={<Meds />} />
    </Routes>
  );
}

export default App;
