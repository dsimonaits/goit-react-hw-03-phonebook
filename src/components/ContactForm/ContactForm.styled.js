import styled from 'styled-components';

export const Form = styled.form`
  width: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: flex-end;
  justify-content: center;

  color: white;
  background-color: black;

  /* flex-flow: column; */
  border: 1px solid black;
  padding: 10px;
`;

export const Label = styled.label`
  display: flex;
  gap: 5px;
  flex-flow: column;
`;

export const Btn = styled.button`
  cursor: pointer;
  padding: 5px;
  /* width: 80px; */
  /* height: auto; */
  border: 1px solid white;
  border-radius: 5px;
  color: white;
  background-color: black;
  &:hover {
    color: black;
    background-color: white;
  }
`;
