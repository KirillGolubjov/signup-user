import styled from 'styled-components';

// Styled container for the Tooltip component
const StyledTooltip = styled.span`
  display: grid;
  text-align: center;
  position: relative;
`;

// Styled trigger element (text that triggers the tooltip)
const MainText = styled.p`
  overflow: hidden;
  text-overflow: ellipsis; // Show ellipsis (...) for overflowed text
  cursor: pointer;
  margin: 0;
`;

// Styled content of the tooltip
const TooltipText = styled.div`
  z-index: 999; // Ensure tooltip is above other elements
  display: none;
  position: absolute;
  top: 3rem;
  left: 100%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 8px 12px;
  border-radius: 6px;
  white-space: nowrap;
`;

/**
 * Displays a tooltip on hover over the Main text.
 */

const Tooltip = ({ text }) => {
  const handleTooltipToggle = (event) => {
    const tooltip = event.currentTarget.nextSibling;
    tooltip.style.display = event.type === 'mouseover' ? 'block' : 'none';
  };

  return (
    <StyledTooltip>
      <MainText
        onMouseOver={handleTooltipToggle}
        onMouseOut={handleTooltipToggle}
      >
        {text}
      </MainText>
      <TooltipText>{text}</TooltipText>
    </StyledTooltip>
  );
};

export default Tooltip;
