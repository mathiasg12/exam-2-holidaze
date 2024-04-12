import { Footer } from '../Footer';
import { Header } from '../Header';
import { PageRoutes } from '../Routes';
export function Layout() {
  return (
    <div>
      <Header></Header>
      <PageRoutes></PageRoutes>
      <Footer></Footer>
    </div>
  );
}
