import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import LoadingContext from '../../contexts/loading';

import Loading from '../Loading';
import PokemonTypeIcon from '../PokemonTypeIcon';
import PokemonStats from './PokemonStats';

import * as S from './styles';

const PokemonCard = ({ id, name, sprite, stats, types }) => {
  const [loading] = useContext(LoadingContext);

  const formattedId = `#${id.toString().padStart(3, '0')}`;

  const firstType = types[0].type.name;
  const secondType = types[1]?.type?.name || null;

  const [hp, attack, defense, spAttack, spDefense, speed] = stats;

  return (
    <S.CardWrapper firstType={firstType} secondType={secondType}>
      <S.PokemonName>{name}</S.PokemonName>
      <S.PokemonNumber>{formattedId}</S.PokemonNumber>
      <S.MainSection>
        {loading ? (
          <Loading />
        ) : (
          <>
            <S.MainBgText>
              {!secondType && <p>&nbsp;</p>}
              <p>{firstType}</p>
              <p>{secondType}</p>
            </S.MainBgText>
            <S.PokemonSprite src={sprite} />
          </>
        )}
      </S.MainSection>
      <S.TypeSection>
        <PokemonTypeIcon type={firstType} />
        {secondType && <PokemonTypeIcon type={secondType} />}
      </S.TypeSection>
      <S.InfoSection>
        <PokemonStats
          hp={hp.base_stat}
          attack={attack.base_stat}
          defense={defense.base_stat}
          spAttack={spAttack.base_stat}
          spDefense={spDefense.base_stat}
          speed={speed.base_stat}
        />
      </S.InfoSection>
    </S.CardWrapper>
  );
};

const stat = PropTypes.shape({
  base_stat: PropTypes.number.isRequired,
  effort: PropTypes.number.isRequired,
  stat: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }),
});

const type = PropTypes.shape({
  slot: PropTypes.number.isRequired,
  type: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }),
});

PokemonCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  sprite: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(stat).isRequired,
  types: PropTypes.arrayOf(type).isRequired,
};

export default PokemonCard;
