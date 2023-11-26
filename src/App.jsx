import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeIndex from './pages/HomeIndex.jsx';
import PeopleDirectoryIndex from './pages/PeopleDirectoryIndex.jsx';
import KnowledgeHubIndex from './pages/KnowledgeHubIndex.jsx';
import AdminIndex from './pages/AdminIndex.jsx';
import AdminPeopleDirectoryIndex from './pages/AdminPeopleDirectoryIndex.jsx'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeIndex />} />
        <Route path="/people-directory" element={<PeopleDirectoryIndex/>} />
        <Route path="/knowledge-hub" element={<KnowledgeHubIndex/>} />
        <Route path="/admin" element={<AdminIndex/>} />
        <Route path="/admin/people-directory" element={<AdminPeopleDirectoryIndex/>} />
      </Routes>
    </Router>
  );
}

export default App;