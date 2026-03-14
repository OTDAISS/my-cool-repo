import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import GearEquipment from './pages/GearEquipment';
import LoreArchive from './pages/LoreArchive';
// ... import your other 30+ pages here

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout wraps all pages, keeping the Navbar/Footer visible */}
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="gear" element={<GearEquipment />} />
          <Route path="lore" element={<LoreArchive />} />
          {/* Add your other routes here following this pattern */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
