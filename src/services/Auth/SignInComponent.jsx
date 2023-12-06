import { useState } from 'react';
import { auth } from '../../firebase.js';
import axios from 'axios';
import { endpoint } from '../../api/endpoint.jsx';
import { FormContainer, FormInput, FormTitle, FormInputContainer, FormLabel, SubmitButton } from '../../utils/FormUtil/FormElements.jsx';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { useUser } from './UserContext.jsx';

const SignInComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, logout, user } = useUser();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);

        // Send the user's email to your backend
        axios.post(`${endpoint}/api/auth/setUserEmail`, { email: userCredential.user.email })
          .then(response => {
            console.log('Email sent to backend:', response.data);
            login(response.data.user);
          })
          .catch(error => {
            console.error('Error sending email to backend:', error.message);
          });
      })
      .catch((error) => {
        console.error('Error signing in:', error.message);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        logout();
        console.log('User signed out');
      })
      .catch((error) => {
        console.error('Error signing out:', error.message);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn();
  };

  return (
    <>
      <FormContainer onSubmit={handleSubmit}>
        <FormTitle>Sign In</FormTitle>

        <FormInputContainer>
          <FormLabel>Email</FormLabel>
          <FormInput
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </FormInputContainer>

        <FormInputContainer>
          <FormLabel>Password</FormLabel>
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
        </FormInputContainer>

        <SubmitButton type="submit">Sign In</SubmitButton>
      </FormContainer>

      {user && (
        <div>
          <p>Logged in as: {user.email}</p>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      )}
    </>
  );
}

export default SignInComponent;
