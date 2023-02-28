import { Link } from 'react-router-dom';

const ErrorPage = () => (
  <section>
    <h1>Error 404 Page not found</h1>
    <Link to="/" className="btn">
      Back Home
    </Link>
  </section>
);
export default ErrorPage;
