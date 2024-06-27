import styled, { css } from 'styled-components';

/**
 * This is a styled container that uses flexbox layout.
 * The layout direction and alignment are determined by the `type` prop.
 */

const Row = styled.div`
  display: flex;

  /**
   * Horizontal layout
   * 
   * If the 'type' prop is 'horizontal', arrange children in a row.
   * Children are spaced evenly with a 1rem gap, centered vertically.
   */

  ${(props) =>
    props.type === 'horizontal' &&
    css`
      justify-content: space-between;
      align-items: center;
      gap: 10px;
    `}

  /**
   * Vertical layout
   * 
   * If the 'type' prop is 'vertical', arrange children in a column.
   * Children are centered horizontally with a 50px gap.
   */

  ${(props) =>
    props.type === 'vertical' &&
    css`
      flex-direction: column;
      /* align-items: center; */
      gap: 50px;
    `}
`;

// Default type for Row is 'vertical'
Row.defaultProps = {
  type: 'vertical',
};

export default Row;
