import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 380px;
  width: 100%;
  margin: 0 auto;

  > :not(:last-child) {
    margin-bottom: 50px; // Default margin between form elements
  }
  > :nth-child(3) {
    margin-bottom: 43px; // Specific margin for the third child element
  }

  > :nth-child(4) {
    margin-bottom: 47px; // Specific margin for the fourth child element
  }
`;
