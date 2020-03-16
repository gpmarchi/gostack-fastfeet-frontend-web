import styled from 'styled-components';

export const StatusPill = styled.div`
  display: flex;
  float: left;
  align-items: center;
  justify-content: space-evenly;
  background: #dff0df;
  padding: 5px 10px;
  border-radius: 12px;
  color: #2ca42b;
  font-size: 14px;
  font-weight: bold;

  div {
    width: 10px;
    height: 10px;
    background: #2ca42b;
    border-radius: 50%;
    margin-right: 6px;
  }
`;
