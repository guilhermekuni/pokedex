import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { MAX_STAT } from '../../../../utils/constants';

import LoadingContext from '../../../../contexts/loading';

import * as S from './styles';

const SkillBar = ({ skill }) => {
  const [loading] = useContext(LoadingContext);

  const formattedSkill = skill.toString().padStart(3, '0');
  const skillPercent = (100 * skill) / MAX_STAT;

  return (
    <S.Wrapper>
      <p>{formattedSkill}</p>
      {!loading && (
        <S.Bar>
          <S.Skill percent={skillPercent} />
        </S.Bar>
      )}
    </S.Wrapper>
  );
};

SkillBar.propTypes = {
  skill: PropTypes.number.isRequired,
};

export default SkillBar;
