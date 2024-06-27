import styled from 'styled-components';

// Intro background
export const Background = styled.div`
  position: relative;
  width: 100%;
  height: 650px;
  display: flex;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  background-image: url('./bg-img.webp');
  background-size: cover;
  background-position: center;
  background-blend-mode: darken;
  @media (max-width: 768px) {
    height: 500px;
  }
`;
