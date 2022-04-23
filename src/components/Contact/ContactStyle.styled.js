import styled from '@emotion/styled';

export const ContactStyle = styled.li`
  display: flex;
  color: black;
  font-size: 20px;
  margin-top: 10px;
`;

export const ButtonStyle = styled.button`
  margin-right: 20px;
  color: black;
  background-color: transparent;
  border-color: black;
  border-radius: 50%;
  cursor: pointer;
  outline: none;
  &:hover {
    border: 2px solid red;
    color: red;
  }
`;
