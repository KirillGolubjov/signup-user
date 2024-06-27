import styled, { css } from 'styled-components';

/**
 * Heading component
 *
 * This styled-component handles the styling for heading elements (h1, h2).
 * Depending on the 'as' prop, it applies different styles.
 */

const Heading = styled.h1`
  ${(props) =>
    props.as === 'h1' &&
    css`
      font-weight: 400;
      font-size: 40px;
      text-align: center;
    `}

  ${(props) =>
    props.as === 'h2' &&
    css`
      font-weight: 400;
      font-size: 32px;
      text-align: center;
    `}

  line-height: 40px;
`;

export default Heading;
