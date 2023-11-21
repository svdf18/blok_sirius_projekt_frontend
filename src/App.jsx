import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeIndex from './pages/HomeIndex.jsx';
import PeopleDirectoryIndex from './pages/PeopleDirectoryIndex';
import KnowledgeHubIndex from './pages/KnowledgeHubIndex';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeIndex />} />
        <Route path="/people-directory" element={<PeopleDirectoryIndex/>} />
        <Route path="/knowledge-hub" element={<KnowledgeHubIndex/>} />
      </Routes>
    </Router>
  );
}

export default App;