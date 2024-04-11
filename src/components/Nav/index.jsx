import { Link } from 'react-router-dom';

export function Nav() {
  return (
    <div>
      <ul>
        <li to="/">
          <Link>Home</Link>
        </li>
        <li to="/login">
          <Link>Login</Link>
        </li>
        <li>
          <Link to="/signUp">Sign up</Link>
        </li>
      </ul>
    </div>
  );
}
