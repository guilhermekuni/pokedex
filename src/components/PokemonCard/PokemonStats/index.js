import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

const PokemonStats = ({ hp, attack, defense, spAttack, spDefense, speed }) => {
  return (
    <S.StatsSectionWrapper>
      <p>
        <strong>Health: </strong>
        {hp}
      </p>
      <p>
        <strong>Attack: </strong>
        {attack}
      </p>
      <p>
        <strong>Defense: </strong>
        {defense}
      </p>
      <p>
        <strong>Sp. Attack: </strong>
        {spAttack}
      </p>
      <p>
        <strong>Sp. Defense: </strong>
        {spDefense}
      </p>
      <p>
        <strong>Speed: </strong>
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
