import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';

// Styled component for the form row container
const StyledFormRow = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  p {
    margin-bottom: 11px;
  }
  // Adjust margin for button within the form row
  &:has(button) {
    margin-top: 50px;
    align-self: center;
  }
`;

// Styled component for error or helper message
const Message = styled.span`
  position: absolute;
  top: 50px;
  margin: 4px 0 0 20px;
  font-size: 14px;
  color: ${(props) =>
    props.$isError
      ? 'var(--color-red)'
      : 'var(--color-gray)'}; /* Conditional color based on prop */
`;

// Styled component for the label associated with the input
const Label = styled.label`
  position: absolute;
  top: -0.75rem;
  left: 1rem;
  background-color: var(--color-light-gray);
  padding: 0 0.25rem;
  font-size: 14px;
  color: ${(props) =>
    props.$isError
      ? 'var(--color-red)'
      : 'var(--color-gray)'}; // Conditional color based on prop
  display: ${(props) =>
    props.$show ? 'block' : 'none'}; // Conditional display based on prop
`;

function FormRow({ name, error, children, helperText, label }) {
  // Access useFormContext to watch form values
  const { watch } = useFormContext();
  const value = watch(name);

  return (
    <StyledFormRow>
      {label && (
        <Label $show={!!value} htmlFor={children.props.id} $isError={error}>
          {label}
        </Label>
      )}
      {children}
      {error ? (
        <Message $isError>{error.message}</Message>
      ) : (
        helperText && <Message>{helperText}</Message>
      )}
    </StyledFormRow>
  );
}

export default FormRow;
