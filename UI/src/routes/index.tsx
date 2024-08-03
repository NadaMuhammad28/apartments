import { Suspense, lazy, FC } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  RouteObject,
} from 'react-router-dom';
import { CircularProgress } from '@mui/material';

// Lazy load your components
const DashboardLayout = lazy(() => import('@layout/DashboardLayout'));
const AddApartment= lazy(() => import('@views/AddApartment'));
const ApartmentList = lazy(() => import('@views/ApartmentList'));

const ApartmentDetails = lazy(() => import('@views/ApartmentDetails'));


const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/dashboard" replace />,
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      {
        path: '',
        element: <ApartmentList/>,
      },
      {
        path: 'add-apartment',
        element: <AddApartment/>,
      },
      {
        path:':id',
        element :<ApartmentDetails/>
      }
    ],
  },
];

const renderRoutes = (routes: RouteObject[]) =>
  routes.map((route, index) => {
    if (route.children) {
      return (
        <Route key={index} path={route.path} element={route.element}>
          {renderRoutes(route.children)}
        </Route>
      );
    }
    return <Route key={index} path={route.path} element={route.element} />;
  });

const MainRoutes: FC = () => {
  return (
    <Router>
      <Suspense
        fallback={
          <div className="flex justify-center items-center">
            <CircularProgress />
          </div>
        }
      >
        <Routes>{renderRoutes(routes)}</Routes>
      </Suspense>
    </Router>
  );
};

export default MainRoutes;
