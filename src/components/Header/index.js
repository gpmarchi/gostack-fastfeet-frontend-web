import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { signOut } from '../../store/modules/auth/actions';
import { changePage } from '../../store/modules/header/actions';

import { Container, Navigation, NavLink, Logout } from './styles';

import logo from '../../assets/logo.svg';

const pages = [
  {
    to: '/parcels',
    name: 'ENCOMENDAS',
  },
  {
    to: '/deliverymen',
    name: 'ENTREGADORES',
  },
  {
    to: '/recipients',
    name: 'DESTINATÁRIOS',
  },
  {
    to: '/problems',
    name: 'PROBLEMAS',
  },
];

export default function Header() {
  const dispatch = useDispatch();

  const activePage = useSelector(state => state.header.activePage);
  const username = useSelector(state => state.auth.user.name);

  function handlePageSelect(page) {
    dispatch(changePage(page));
  }

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Navigation>
        <img src={logo} alt="FastFeet" />
        <nav>
          {pages.map(page => (
            <NavLink
              key={page.name}
              to={page.to}
              active={String(activePage === page.to)}
              onClick={() => handlePageSelect(page.to)}
            >
              {page.name}
            </NavLink>
          ))}
        </nav>
      </Navigation>
      <Logout>
        <span>{username}</span>
        <button type="button" onClick={handleSignOut}>
          sair do sistema
        </button>
      </Logout>
    </Container>
  );
}
