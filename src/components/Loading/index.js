import styled from 'styled-components';
import pokeballIcon from '../../assets/icons/pokeball.svg';

const Loading = styled.img.attrs({
  src: pokeballIcon,
})`
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  height: 140px;
  width: 140px;
  animation: spin ease 2s;
`;

export default Loading;
