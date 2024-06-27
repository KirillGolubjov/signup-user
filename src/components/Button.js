import styled, { css } from 'styled-components';

// Define variations for different button styles
const variations = {
  primary: css`
    color: var(--color-black);
    background-color: var(--color-yellow);

    &:hover {
      background-color: var(--color-light-yellow);
    }
  `,
  secondary: css`
    color: var(--color-light-gray);
    background: var(--color-gray);
  `,
};

const Button = styled.button`
  border: none;
  border-radius: var(--radius-circle);
  padding: 0.35rem 1.6rem;
  display: flex;
  align-items: center;
  // Apply the selected variation
  ${(props) => variations[props.$variation]}
`;

// Default props for the Button component
Button.defaultProps = {
  $variation: 'primary',
};

export default Button;
