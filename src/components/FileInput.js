import styled from 'styled-components';


/**
 * FileInput
 *
 * Only work in google chrome and safari
 */

const FileInput = styled.input.attrs({ type: 'file' })`
  // Base styles
  border-radius: var(--radius-sm);
  border: ${(props) =>
    props.$error
      ? '2px solid var(--color-red)'
      : '1px solid var(--color-gray)'};
  padding: 0.75rem 1rem;
  padding-left: 5rem;
  color: ${(props) =>
    props.$hasFile && !props.$error
      ? 'var(--color-black)'
      : 'var(--color-light-gray)'};
  outline-color: ${(props) =>
    props.$error ? 'var(--color-red)' : 'var(--color-gray)'};

  // Custom file upload button
  &::-webkit-file-upload-button {
    visibility: hidden;
    width: 0;
  }

  // Styling for the visible part of the file input
  &::before {
    content: 'Upload';
    position: absolute;
    top: 0;
    left: 0;
    padding: 0.75rem 1rem;
    font: inherit;
    background: none;
    color: var(--color-black);
    border: ${(props) =>
      props.$error
        ? '2px solid var(--color-red)'
        : '1px solid var(--color-black)'};
    border-top-left-radius: var(--radius-sm);
    border-bottom-left-radius: var(--radius-sm);
    cursor: pointer;
  }

  // Display text when a file is selected
  &::after {
    display: ${(props) => (props.$hasFile ? 'none' : 'inline')};
    content: 'Upload your photo';
    position: absolute;
    top: 15px;
    left: 100px;
    color: ${(props) =>
      props.$hasFile ? 'var(--color-black)' : 'var(--color-gray)'};
  }
`;

export default FileInput;
