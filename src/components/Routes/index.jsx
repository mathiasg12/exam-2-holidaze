import { Route, Routes } from 'react-router-dom';
import { Home } from '../../pages/Home';
import { Specific } from '../../pages/Specific';
import { LoginPage } from '../../pages/Login';
import { SignUpPage } from '../../pages/SignUp';
/**
 * react Routes to the different paths
 */
export function PageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/specific/:id" element={<Specific></Specific>}></Route>
      <Route path="/login" element={<LoginPage></LoginPage>}></Route>
      <Route path="/signUp" element={<SignUpPage></SignUpPage>}></Route>
    </Routes>
  );
}
