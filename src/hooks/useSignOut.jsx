import { useState } from 'react';
import { auth } from '../firebase.js';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../Services/Auth/UserContext'; 

const useSignOut = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { logout } = useUser();

  const handleSignOut = async () => {
    try {
      await signOut(auth);

      localStorage.removeItem('user');
      logout();

      setTimeout(() => {
        navigate('/');
      }, 1000);
    } catch (error) {
      console.error('Error signing out:', error.message);
      setError(error.message);
    }
  };

  return { handleSignOut, error };
};

export default useSignOut;
