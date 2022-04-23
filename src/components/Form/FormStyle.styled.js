import styled from '@emotion/styled';

export const FormStyle = styled.form`
  width: 300px;
  border: 2px solid black;
  padding: 20px;
  background-color: transparent;
`;

export const Label = styled.label`
  display: block;
  font-size: 20px;
  color: blck;
  font-weight: 500;
`;

export const Input = styled.input`
  font-size: 20px;
  margin-bottom: 10px;
  background-color: transparent;
  border: none;
  border: 2px solid black;
  border-radius: 7px;
  outline: none;
  color: black;
  caret-color: black;
  &:hover {
    border: 2px solid blue;
    color: blue;
  }
`;

export const Btn = styled.button`
  display: inline-block;
  font-size: 20px;
  background-color: transparent;
  color: black;
  border: 2px solid black;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 7px;
  margin: 0 auto;
  text-align: center;
  outline: none;
  &:hover {
    border: 2px solid green;
    color: green;
  }
`;
