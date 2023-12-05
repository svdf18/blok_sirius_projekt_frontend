import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeIndex from './pages/HomeIndex.jsx';
import PeopleDirectoryIndex from './pages/PeopleDirectoryIndex.jsx';
import KnowledgeHubIndex from './pages/KnowledgeHubIndex.jsx';
import AdminIndex from './pages/AdminIndex.jsx';
import AdminPeopleDirectoryIndex from './pages/AdminPeopleDirectoryIndex.jsx'
import RecommendationsIndex from './pages/RecommendationsIndex';
import AdminRecommendationsIndex from './pages/AdminRecommendationsIndex';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeIndex />} />
        <Route path="/people-directory" element={<PeopleDirectoryIndex/>} />
        <Route path="/recommendations" element={<RecommendationsIndex/>} />
        <Route path="/knowledge-hub" element={<KnowledgeHubIndex/>} />
        <Route path="/admin-dashboard" element={<AdminIndex/>} />
        <Route path="/admin-dashboard/people-directory" element={<AdminPeopleDirectoryIndex/>} />
        <Route path="/admin-recommendations" element={<AdminRecommendationsIndex/>} />
      </Routes>
    </Router>
  );
}

export default App;