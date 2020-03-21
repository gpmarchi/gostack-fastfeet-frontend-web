import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    text-justify: distribute;
    font-size: 16px;
    color: #999;
  }
`;

export const ChangePageButton = styled.button`
  border: 0;
  background: none;
  margin: 0 10px 0 10px;

  & + svg:hover {
    color: ${darken(0.5, '#ccc')};
  }
`;
