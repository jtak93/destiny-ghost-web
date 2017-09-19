import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
    background-color: #002537;
    color: #F5F8F9
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  #login-button {
    background-color: #032F3E;
    color: #F5F8F9
  }

  #login-button:hover {
    background-color: #02212B;
  }

  #login-button:active {
    background-color: #000203;
  }

  #get-started {
    background-color: #032F3E;
    color: #F5F8F9
  }

  #get-started:hover {
    background-color: #02212B;
  }

  #get-started:active {
    background-color: #000203;
  }

  #home-container {
    min-height: 700px;
    background: url("https://destinyghost.me/assets/destiny_ghost-min.gif") no-repeat center;
  }
`;
