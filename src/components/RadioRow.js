import styled from 'styled-components';

/**
 * This is a styled container for radio input elements and their labels,
 * ensuring consistent alignment and spacing.
 */

export const StyledRadioRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 7px;

  /*
    Remove the bottom margin for the last child to avoid extra space.
   */
  &:last-child {
    margin-bottom: 0;
  }
`;

function RadioRow({ children, label }) {
  return (
    <StyledRadioRow>
      {children}
      {label && <label htmlFor={children.props.id}>{label}</label>}
    </StyledRadioRow>
  );
}

export default RadioRow;
