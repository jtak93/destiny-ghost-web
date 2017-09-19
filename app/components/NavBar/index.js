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
import { push } from 'react-router-redux';
import { connect } from 'react-redux';

class NavBar extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  handleItemClick = (e, { url }) => this.props.push(url)
  render() {
    return (
      <Menu size='massive' inverted>
        <Menu.Item name='Destiny Ghost' url='/' onClick={this.handleItemClick} />
        <Menu.Item name='about' url='/about' onClick={this.handleItemClick} />

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

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    push: (url) => dispatch(push(url)),
  }
}

export default connect(null, mapDispatchToProps)(NavBar);
