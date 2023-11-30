import styled from 'styled-components';
import {FaCheckCircle} from 'react-icons/fa';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: left;
  border: none;
  border-radius: 28px;
  padding: 10px;
  margin: 10px;
  background-color: #F7F7F7;
  width: 93%;
  position: relative;
`;

export const FormInput = styled.input`
  padding: 10px;
  border: none;
  background: #C2DFD3;
  border-radius: 28px;
  font-size: 16px;
  color: inherit;
  margin-bottom: 20px; /* Adjusted margin to create more space */
`;

export const FormTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 40px;
`;

export const FormInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const FormLabel = styled.label`
  display: block;
  font-size: 16px;
  margin-bottom: 5px;
  font-weight: bold;
  text-align: left;
`;

export const FormIcon = styled.div`
  position: absolute;
  bottom: -1.2rem;
  right: -0.5rem;
  background-color: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const CheckIcon = styled(FaCheckCircle)`
  color: #2b2b2b;
`;