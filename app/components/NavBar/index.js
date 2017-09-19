/**
*
* NavBar
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { Button, Dropdown, Menu, Image } from 'semantic-ui-react'
import './assets/destiny_ghost.gif'

class NavBar extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  handleItemClick = (e, { name }) => console.log('clicked')
  render() {
    return (
      <Menu size='massive' inverted>
        <Menu.Item name='Destiny Ghost' onClick={this.handleItemClick} />
        <Menu.Item name='About' onClick={this.handleItemClick} />

        <Menu.Menu position='right'>
          <Menu.Item>
            <Button primary inverted id='login-button'>Login With Bungie</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

NavBar.propTypes = {

};

export default NavBar;
