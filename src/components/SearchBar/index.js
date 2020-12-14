import React, { useState } from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

const SearchBar = ({ onSearch }) => {
  const [filter, setFilter] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSearch(filter);
  };

  return (
    <S.SearchBarWrapper onSubmit={handleSubmit}>
      <S.SearchBar
        placeholder="search pokemon by id or name"
        value={filter}
        onChange={e => setFilter(e.target.value)}
      />
    </S.SearchBarWrapper>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
