import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const SharedLayout = () => (
  <section className="main">
    <Navbar />
    <Outlet />
  </section>
);

export default SharedLayout;
