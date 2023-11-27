import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  border: none;
  border-radius: 28px;
  padding: 20px;
  margin: 20px;
  background-color: #C2DFD3;
`;

export const FormInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  color: inherit;
`;

export const FormTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const FormInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const FormLabel = styled.label`
  font-size: 16px;
  margin-bottom: 5px;
  text-align: left;
`;