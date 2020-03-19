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
  border: 1px solid #00000026;
  box-shadow: 0px 0px 2px #00000026;
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
    text-shadow: 0 2px 2px rgba(255, 255, 255, 0.7),
      0 10px 4px rgba(0, 0, 0, 0.5);
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
