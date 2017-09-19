/**
*
* NavBar
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { Button, Dropdown, Menu } from 'semantic-ui-react'

class NavBar extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  handleItemClick = (e, { name }) => console.log('clicked')
  render() {
    return (
      <Menu size='massive'>
        <Menu.Item name='home' onClick={this.handleItemClick} />
        <Menu.Item name='messages' onClick={this.handleItemClick} />

        <Menu.Menu position='right'>
          <Dropdown item text='Language'>
            <Dropdown.Menu>
              <Dropdown.Item>English</Dropdown.Item>
              <Dropdown.Item>Russian</Dropdown.Item>
              <Dropdown.Item>Spanish</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Item>
            <Button primary>Login With Bungie</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

NavBar.propTypes = {

};

export default NavBar;
