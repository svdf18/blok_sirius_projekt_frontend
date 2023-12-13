import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomeIndex from './pages/HomeIndex.jsx';
import PeopleDirectoryIndex from './pages/PeopleDirectoryIndex.jsx';
import LogInIndex from './pages/LogInIndex.jsx';
import AdminIndex from './pages/AdminIndex.jsx';
import AdminPeopleDirectoryIndex from './pages/AdminPeopleDirectoryIndex.jsx'
import RecommendationsIndex from './pages/RecommendationsIndex';
import AdminRecommendationsIndex from './pages/AdminRecommendationsIndex';
import EventIndex from './pages/EventIndex.jsx';
import AdminEventIndex from './pages/AdminEventIndex.jsx';
import { UserProvider } from './services/Auth/UserContext';
import UserProfileIndex from './pages/UserProfileIndex';

function App() {
  return (
  <UserProvider>
    <Router>
      <Routes>
        <Route path="/" element={<HomeIndex />} />
        <Route path="/people-directory" element={<PeopleDirectoryIndex/>} />
        <Route path="/recommendations" element={<RecommendationsIndex/>} />
        <Route path="/events-calendar" element={<EventIndex/>} />
        <Route path="/log-in" element={<LogInIndex/>} />
        <Route path="/user-profile" element={<UserProfileIndex/>} />
        <Route path="/admin-dashboard" element={<AdminIndex/>} />
        <Route path="/admin-dashboard/people-directory" element={<AdminPeopleDirectoryIndex/>} />
        <Route path="/admin-recommendations" element={<AdminRecommendationsIndex/>} />
        <Route path="/admin-events-calendar" element={<AdminEventIndex/>} />
      </Routes>
    </Router>
  </UserProvider>
  );
}

export default App;