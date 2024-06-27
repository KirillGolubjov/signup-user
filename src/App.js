import { Toaster } from 'react-hot-toast';
import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';

import Header from './components/Header';
import Main from './pages/Main';

const StyledApp = styled.div`
  margin: 0 auto;
  max-width: 1170px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Header />
        <Main />
      </StyledApp>
      <Toaster
        position='top-right'
        gutter={12}
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: '16px',
            maxWidth: '500px',
            padding: '16px 24px',
            backgroundColor: 'var(--color-light-gray)',
            color: 'var(--color-gray)',
          },
        }}
      />
    </>
  );
}

export default App;
