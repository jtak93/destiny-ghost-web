/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Container, Button } from 'semantic-ui-react'
import { FormattedMessage } from 'react-intl';
import messages from './messages';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props)
    this.bungieLogin = this.bungieLogin.bind(this)
  }

  bungieLogin() {
    console.log('bungie login')
    window.location = 'https://www.bungie.net/en/OAuth/Authorize?client_id=21342&response_type=code'
  }
  render() {
    return (
      <div>
        <Container textAlign='center' id='home-container'>
          <h1>
            <FormattedMessage {...messages.header} />
          </h1>
          <Button primary inverted onClick={this.bungieLogin} id='get-started'>Get Started</Button>
        </Container>
      </div>
    );
  }
}
