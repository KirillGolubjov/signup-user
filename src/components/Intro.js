import styled from 'styled-components';
import Heading from './Heading';
import Button from './Button';
import Row from './Row';
import { Background } from './Background';
import { INTRO_TEXT } from '../data/consts';
import { scrollToContent } from '../utils/helpers';

/**
 * Intro component
 *
 * This component renders the introductory section of the page with a heading,
 * some text, and a sign-up button.
 */

const Content = styled.div`
  max-width: 380px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--color-white);
  p {
    text-align: center;
    margin-top: 21px;
  }

  button {
    margin-top: 32px;
  }
`;

function Intro() {
  return (
    <Background>
      <Row className='media' style={{ margin: '0 auto' }}>
        <Content>
          <Heading as='h1'>Test assignment for front-end developer</Heading>
          <p>{INTRO_TEXT}</p>
          <Button onClick={() => scrollToContent('signup-form')}>
            Sign up
          </Button>
        </Content>
      </Row>
    </Background>
  );
}

export default Intro;
