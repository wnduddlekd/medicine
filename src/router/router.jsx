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
import { ROUTES } from '../constants/routes';

export const Router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: '/', element: <Navigate to="/test" /> },
      { path: '/test', element: <TestHub /> },
      { path: '/test/ThemeTest', element: <ThemeTest /> },
      { path: '/test/ButtonTest', element: <ButtonTest /> },

      { path: ROUTES.HOME, element: <Home /> },
      { path: ROUTES.CHECK_IN, element: <CheckIn /> },
      { path: `${ROUTES.CHECK_IN}/:id`, element: <CheckIn /> },
      { path: ROUTES.MY_MEDS, element: <Meds /> },
      { path: ROUTES.CALENDER, element: <Calender /> },
      { path: ROUTES.INSIGHTS, element: <Insights /> },
    ],
  },
]);
