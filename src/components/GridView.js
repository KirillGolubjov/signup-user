import styled from 'styled-components';

/**
 * GridView component
 *
 * This component creates a responsive grid layout with different column configurations
 * based on the viewport width.
 */

export const GridView = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-gap: 29px;
  width: 100%;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (max-width: 360px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;
