import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

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
  const [activePage, setActivePage] = useState('/parcels');
  const username = useSelector(state => state.auth.user.name);

  useEffect(() => {
    const currentPage = localStorage.getItem('fastfeet:activePage');

    if (currentPage) {
      setActivePage(currentPage);
    }

    return () => {
      localStorage.removeItem('fastfeet:activePage');
    };
  }, []);

  function handlePageSelect(page) {
    setActivePage(page);
    localStorage.setItem('fastfeet:activePage', page);
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
        <button type="button">sair do sistema</button>
      </Logout>
    </Container>
  );
}
