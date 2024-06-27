import styled from 'styled-components';

const Container = styled.div`
  /* max-width: 380px; */
  position: relative;
  padding: 0.75rem 0;
  display: flex;
  align-items: center;
  // conditionally change border color of the input
  border: ${(props) =>
    props.$error
      ? '2px solid var(--color-red)'
      : '1px solid var(--color-gray)'};
  border-radius: var(--radius-sm);
  border-left: none;

  // conditionally change text color of the input
  span {
    color: ${(props) =>
      props.$fileLoaded && !props.$error
        ? 'var(--color-black)'
        : 'var(--color-gray)'};
    margin-left: 100px;
  }
`;

const Label = styled.label`
  position: absolute;
  display: block;
  border: 1px solid var(--color-black);
  padding: 0.75rem 1rem;
  // conditionally change border color of the button
  border: ${(props) =>
    props.$error
      ? '2px solid var(--color-red)'
      : '1px solid var(--color-black)'};
  border-top-left-radius: var(--radius-sm);
  border-bottom-left-radius: var(--radius-sm);
  cursor: pointer;
`;

function FileUploader({ avatar, error, children }) {
  return (
    <Container $fileLoaded={avatar} $error={error}>
      {children}
      <Label $error={error} htmlFor='file-input'>
        Upload
      </Label>
      <span>{avatar && !error ? avatar.name : 'Upload your photo'}</span>
    </Container>
  );
}

export default FileUploader;
