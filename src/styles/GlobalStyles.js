import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
  --color-yellow: #f4e041;
  --color-light-yellow: #ffea5c;
  --color-blue: #00bdd3;
  --color-light-gray: #f8f8f8;
  --color-gray: #B4B4B4;
  --color-black: #000;
  --color-white: #fff;
  --color-red: #b91c1c;

  --radius-sm: 3px;
  --radius-circle: 80px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

@font-face {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('https://fonts.gstatic.com/s/nunito/v16/XRXV3I6Li01BKofINeaBTMnFcQ.woff2') format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191,+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

body {
  font-family: 'Nunito', sans-serif;
  background-color: var(--color-light-gray);
  color: var(--color-black);
  min-height: 100vh;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

img {
  max-width: 100%;
}

input:-webkit-autofill {
  transition: background-color 5000s ease-in-out 0s;
}

input[type='file'] {
  display: none;
}

.media {
  @media (max-width: 1024px) {
    padding: 0 60px;
  }
  @media (max-width: 768px) {
    padding: 0 32px;
  }
  @media (max-width: 360px) {
    padding: 0 16px;
  }
}
`;

export default GlobalStyles;
