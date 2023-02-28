import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import ErrorPage from './Pages/ErrorPage';
import Home from './Pages/Home';
import Quote from './Pages/Quote';
import SharedLayout from './Pages/SharedLayout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Calculator />} />
          <Route path="home" element={<Home />} />
          <Route path="quote" element={<Quote />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
