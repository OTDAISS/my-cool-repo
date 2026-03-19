import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Free from './pages/free.jsx';       // The Pink Surfboard
import Members from './pages/members.jsx'; // The Blue Surfboard

function App() {
  return (
    <Router>
      <Routes>
        {/* These paths MUST match the sources in vercel.json exactly */}
        <Route path="/dashboard-pink" element={<Free />} />
        <Route path="/dashboard-blue" element={<Members />} />
      </Routes>
    </Router>
  );
}

export default App;
