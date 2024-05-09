import { LoginForm } from '../../components/LoginForm';
import styles from './loginPage.module.css';
/**
 * component that creates the login page, calls the loginForm component.
 */
export function LoginPage() {
  return (
    <main className={styles.loginMain}>
      <LoginForm></LoginForm>
    </main>
  );
}
