import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

const PokemonStats = ({ hp, attack, defense, spAttack, spDefense, speed }) => {
  return (
    <S.StatsSectionWrapper>
      <p>
        <strong>health: </strong>
        {hp}
      </p>
      <p>
        <strong>attack: </strong>
        {attack}
      </p>
      <p>
        <strong>defense: </strong>
        {defense}
      </p>
      <p>
        <strong>sp. attack: </strong>
        {spAttack}
      </p>
      <p>
        <strong>sp. defense: </strong>
        {spDefense}
      </p>
      <p>
        <strong>speed: </strong>
        {speed}
      </p>
    </S.StatsSectionWrapper>
  );
};

PokemonStats.propTypes = {
  hp: PropTypes.number.isRequired,
  attack: PropTypes.number.isRequired,
  defense: PropTypes.number.isRequired,
  spAttack: PropTypes.number.isRequired,
  spDefense: PropTypes.number.isRequired,
  speed: PropTypes.number.isRequired,
};

export default PokemonStats;
