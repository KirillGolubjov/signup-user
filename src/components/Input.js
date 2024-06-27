import styled from 'styled-components';

/**
 * Input component
 *
 * This styled-component handles the styling for input elements.
 * It changes the border color based on the presence of an error.
 */

const Input = styled.input`
  /* Conditional border color based on error state */
  border: ${(props) =>
    props.$error
      ? '2px solid var(--color-red)'
      : '1px solid var(--color-gray)'};
  border-radius: var(--radius-sm);
  padding: 0.75rem 1rem;
  background-color: var(--color-light-gray);

  // remove outline
  &:focus {
    outline: none;
  }
`;

export default Input;
