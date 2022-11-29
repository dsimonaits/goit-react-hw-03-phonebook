import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-flow: column;
  list-style: none;
  max-height: 300px;
  overflow-y: auto;
`;

export const ListItem = styled.li`
  width: 400px;
  padding-left: 10px;
  padding-right: 10px;
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  background-color: black;

  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;
