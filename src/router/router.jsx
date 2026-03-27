import { createBrowserRouter, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Calender from '../pages/Calender';
import CheckIn from '../pages/CheckIn';
import Meds from '../pages/Meds';
import Insights from '../pages/Insights';
import MainLayout from '../Layout/MainLayout';
import TestHub from '../tests/TestHub';
import ThemeTest from '../tests/ThemeTest';
import ButtonTest from '../tests/ButtonTest';

export const Router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: '/', element: <Navigate to="/test" /> },
      { path: '/test', element: <TestHub /> },
      { path: '/test/ThemeTest', element: <ThemeTest /> },
      { path: '/test/ButtonTest', element: <ButtonTest /> },

      { path: '/home', element: <Home /> },
      { path: '/check-in', element: <CheckIn /> },
      { path: '/my-meds', element: <Meds /> },
      { path: '/calender', element: <Calender /> },
      { path: '/insights', element: <Insights /> },
    ],
  },
]);
