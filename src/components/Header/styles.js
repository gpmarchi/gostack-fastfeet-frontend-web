import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  padding: 20px 30px;
  border-bottom: 1px solid #ddd;
`;

export const Navigation = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 26px;
  }

  nav {
    max-width: 100px;
    margin-left: 30px;
    padding: 10px 30px;
    border-left: 1px solid #ddd;
  }
`;

export const NavLink = styled(Link)`
  font-size: 15px;
  font-weight: bold;
  color: ${props => (props.active === 'true' ? '#444' : '#999')};

  & + a {
    margin-left: 20px;
  }
`;

export const Logout = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-size: 14px;
    font-weight: bold;
    color: #666;
    margin-bottom: 5px;
    white-space: nowrap;
  }

  button {
    border: 0;
    background: none;
    color: #de3b3b;
  }
`;
