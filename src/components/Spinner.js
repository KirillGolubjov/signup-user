import styled, { keyframes } from 'styled-components';

// Keyframes for the rotation animation
const rotate = keyframes`
  to {
    transform: rotate(1turn)
  }
`;

/**
 * A styled div element that acts as a loading spinner.
 * It uses keyframe animation to rotate continuously.
 */

const Spinner = styled.div`
  margin: 5rem auto;
  width: 3.5rem;
  aspect-ratio: 1;
  border-radius: 50%;
  /**
   * Background styling
   * 
   * The background is a combination of radial gradient and conic gradient.
   * The radial gradient creates a small circle at the top.
   * The conic gradient creates the rotating effect.
   */
  background:
    radial-gradient(farthest-side, var(--color-blue) 94%, #0000) top/10px 10px
      no-repeat,
    // Conic gradient for rotation effect
    conic-gradient(#0000 30%, var(--color-blue));

  // Masking for smooth edges
  -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 6px), #000 0);

  // Apply the rotation animation
  animation: ${rotate} 1.5s linear infinite;
`;

export default Spinner;
