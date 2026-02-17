import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Calender from '../pages/Calender';
import CheckIn from '../pages/CheckIn';
import Meds from '../pages/Meds';
import Insights from '../pages/Insights';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calendar" element={<Calender />} />
      <Route path="/checkin" element={<CheckIn />} />
      <Route path="/meds" element={<Meds />} />
      <Route path="/insights" element={<Insights />} />
    </Routes>
  );
}
