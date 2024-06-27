import styled, { keyframes } from 'styled-components';
import { BiLoaderAlt } from 'react-icons/bi';

const rotate = keyframes`
  to {
    transform: rotate(1turn)
  }
`;

/**
 * SpinnerMini component
 *
 * A styled BiLoaderAlt icon that acts as a smaller loading spinner.
 * It uses keyframe animation to rotate continuously.
 */

const SpinnerMini = styled(BiLoaderAlt)`
  width: 3.2rem;
  height: 1.6rem;
  animation: ${rotate} 1.5s infinite linear;
`;

export default SpinnerMini;
