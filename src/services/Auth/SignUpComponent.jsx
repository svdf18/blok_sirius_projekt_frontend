import { useState } from 'react';
import { auth } from '../../firebase.js';
import { FormContainer, FormInput, FormTitle, FormInputContainer, FormLabel, SubmitButton } from '../../utils/FormUtil/FormElements.jsx';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignUpComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const signUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('User created:', userCredential);
        // You can do something with the userCredential if needed
      })
      .catch((error) => {
        console.error('Error signing up:', error.message);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signUp();
  };

  return (
    <>
      <FormContainer onSubmit={handleSubmit}>
        <FormTitle>Sign Up</FormTitle>

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

        <SubmitButton type="submit">Sign Up</SubmitButton>
      </FormContainer>
    </>
  );
}

export default SignUpComponent;
