import styled from 'styled-components';

/**
 * RadioInput component
 *
 * This is a styled radio input component with custom styles for checked,
 * active, and focus states.
 */

const RadioInput = styled.input.attrs({ type: 'radio' })`
  width: 20px;
  height: 20px;
  appearance: none; // Remove default styling
  background-color: var(--color-light-gray);
  border: 1px solid var(--color-gray);
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  outline: none;

  /**
   * Checked state
   * 
   * This styling applies when the radio button is checked.
   */
  &:checked::after {
    content: '';
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: var(--color-blue);
    position: absolute;
    top: 50%; // Center it vertically
    left: 50%; // Center it horizontally
    transform: translate(-50%, -50%);
    // Adjust position to center the inner circle
  }

  &:active,
  &:focus {
    border-color: var(--color-blue);
  }
`;

export default RadioInput;
