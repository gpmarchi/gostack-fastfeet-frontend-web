import styled from 'styled-components';

const statusColorMap = new Map([
  [1, { background: '#DFF0DF', color: '#2CA42B' }],
  [2, { background: '#FAB0B0', color: '#DE3B3B' }],
  [3, { background: '#BAD2FF', color: '#4D85EE' }],
  [4, { background: '#F0F0DF', color: '#C1BC35' }],
]);

export const StatusPill = styled.div`
  display: flex;
  float: left;
  align-items: center;
  justify-content: space-evenly;
  background: ${props => statusColorMap.get(props.status).background};
  padding: 5px 10px;
  border-radius: 12px;
  color: ${props => statusColorMap.get(props.status).color};
  font-size: 14px;
  font-weight: bold;

  div {
    width: 10px;
    height: 10px;
    background: ${props => statusColorMap.get(props.status).color};
    border-radius: 50%;
    margin-right: 6px;
  }
`;
