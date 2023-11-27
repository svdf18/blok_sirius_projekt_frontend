import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeIndex from './pages/HomeIndex.jsx';
import PeopleDirectoryIndex from './pages/PeopleDirectoryIndex';
import KnowledgeHubIndex from './pages/KnowledgeHubIndex';
import AdminIndex from './pages/AdminIndex.jsx';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeIndex />} />
        <Route path="/people-directory" element={<PeopleDirectoryIndex/>} />
        <Route path="/knowledge-hub" element={<KnowledgeHubIndex/>} />
        <Route path="/admin-dashboard" element={<AdminIndex/>} />
      </Routes>
    </Router>
  );
}

export default App;