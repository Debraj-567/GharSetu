import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import PropertyListing from './pages/PropertyListing';
import PropertyDetails from './pages/PropertyDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="properties" element={<PropertyListing />} />
          <Route path="property/:id" element={<PropertyDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
