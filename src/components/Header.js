import styled from 'styled-components';
import Row from './Row';
import Button from './Button';
import { scrollToContent } from '../utils/helpers';
import Logo from './Logo';

/**
 * StyledHeader component
 *
 * This component styles the header section with flexbox to align items
 * and justify content space-between.
 */

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
`;

function Header() {
  return (
    <StyledHeader className='media'>
      <Logo src='./logo.svg' alt='logo' />
      <Row type='horizontal'>
        <Button onClick={() => scrollToContent('user-list')}>Users</Button>
        <Button onClick={() => scrollToContent('signup-form')}>Sign up</Button>
      </Row>
    </StyledHeader>
  );
}

export default Header;
