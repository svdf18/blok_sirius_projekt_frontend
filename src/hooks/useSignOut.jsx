// useSignOut.js
import { useState } from 'react';
import { auth } from '../firebase.js';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

const useSignOut = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Use useNavigate for navigation

  const handleSignOut = async () => {
    try {
      await signOut(auth);

      // Additional cleanup tasks
      // Redirect to the homepage
      navigate('/'); // Use navigate instead of history.push

      // You may also want to clear/reset other states here

    } catch (error) {
      console.error('Error signing out:', error.message);
      setError(error.message);
    }
  };

  return { handleSignOut, error };
};

export default useSignOut;
