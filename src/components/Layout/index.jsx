import { Footer } from '../Footer';
import { Header } from '../Header';
import { PageRoutes } from '../Routes';
/**
 * the layout component for each page, includes a header, routes and footer
 */
export function Layout() {
  return (
    <div>
      <Header></Header>
      <PageRoutes></PageRoutes>
      <Footer></Footer>
    </div>
  );
}
