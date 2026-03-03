import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Calender from '../pages/Calender';
import CheckIn from '../pages/CheckIn';
import Meds from '../pages/Meds';
import Insights from '../pages/Insights';
import MainLayout from '../Layout/MainLayout';

export const Router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/check-in', element: <CheckIn /> },
      { path: '/my-meds', element: <Meds /> },
      { path: '/calender', element: <Calender /> },
      { path: '/insights', element: <Insights /> },
    ],
  },
]);
