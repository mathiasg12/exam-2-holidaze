import { Route, Routes } from 'react-router-dom';
import { Home } from '../../pages/Home';
export function PageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/login"></Route>
      <Route path="/signUp"></Route>
    </Routes>
  );
}
