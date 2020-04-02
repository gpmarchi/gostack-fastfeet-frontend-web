import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
`;

export const MoreActions = styled.button`
  border: 0;
  background: none;
  position: relative;
`;

export const ActionList = styled.aside`
  display: ${props => (props.visible ? 'block' : 'none')};
  position: absolute;
  min-width: 150px;
  left: calc(50% - 75px);
  top: calc(100% + 5px);
  padding: 10px 10px;
  background: #fff;
  border-radius: 10px;
  border: 3px solid #ddd;
  /* box-shadow: 0px 0px 2px #00000026; */
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 10px);
    top: -10px;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #fff;
  }

  &::after {
    content: '';
    position: absolute;
    left: calc(50% - 10px);
    top: -10px;
    width: 0;
    height: 0;
    border-top: 10px solid #ddd;
    border-left: 10px solid #ddd;
    border-right: 10px solid transparent;
    border-bottom: 10px solid transparent;
    transform: rotate(45deg);
    z-index: -1;
  }

  div {
    display: flex;
    flex-direction: column;
  }
`;

export const Action = styled.button`
  border: 0;
  background: none;
  font-size: 16px;
  font-weight: bold;
  color: #999;
  padding: 10px 10px;
  width: 100%;
  text-align: left;
  display: flex;
  align-items: center;

  svg {
    margin-right: 10px;
  }

  & + button {
    border-top: 1px solid #eee;
  }
`;
