import React, { useState, useEffect, useCallback } from 'react';
import { MdChevronRight, MdChevronLeft } from 'react-icons/md';
import PropTypes from 'prop-types';

import { Container, ChangePageButton } from './styles';

export default function Pagination({ callback, totalPages }) {
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
  }, [totalPages]);

  useEffect(() => {
    callback(page);
  }, [page, callback]);

  const handleNextPage = useCallback(() => {
    if (page < totalPages) {
      setPage(page + 1);
    } else {
      setPage(1);
    }
  }, [page, totalPages]);

  const handlePreviousPage = useCallback(() => {
    if (page > 1) {
      setPage(page - 1);
    }
  }, [page]);

  return (
    <Container>
      <ChangePageButton onClick={handlePreviousPage}>
        <MdChevronLeft size={40} color="#ccc" />
      </ChangePageButton>
      <span>{page}</span>
      <ChangePageButton onClick={handleNextPage}>
        <MdChevronRight size={40} color="#ccc" />
      </ChangePageButton>
    </Container>
  );
}

Pagination.propTypes = {
  callback: PropTypes.func.isRequired,
  totalPages: PropTypes.number.isRequired,
};
