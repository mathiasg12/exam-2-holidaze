import { Route, Routes } from 'react-router-dom';
import { Home } from '../../pages/Home';
/**
 * react Routes to the different paths
 */
export function PageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/login"></Route>
      <Route path="/signUp"></Route>
    </Routes>
  );
}
