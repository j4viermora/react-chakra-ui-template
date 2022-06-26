import { Dashboard } from 'layout';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from 'react-router-dom';
import { privateRoutes } from './dashboard.routes';
import { publicRoutes } from './routes';

export const AppRouter = () => {
  const isAuthenticated = true;
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/app'
          element={
            isAuthenticated ? <Dashboard /> : <Navigate to='/auth/login' />
          }>
          {privateRoutes.map(({ path, component: Component, name }) => (
            <Route key={name} path={path} element={<Component />} />
          ))}
        </Route>
        <Route
          path='/auth'
          element={isAuthenticated ? <Navigate to='/app' /> : <Outlet />}>
          {publicRoutes.map(({ path, name, component: Component }) => (
            <Route key={name} path={path} element={<Component />} />
          ))}
        </Route>
        <Route
          path='*'
          element={
            isAuthenticated ? (
              <Navigate to='/app' />
            ) : (
              <Navigate to='/auth/login' />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
