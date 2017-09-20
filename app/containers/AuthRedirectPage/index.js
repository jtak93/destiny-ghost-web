/*
 *
 * AuthRedirectPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectAuthRedirectPage from './selectors';
import messages from './messages';
import { api } from '../../utils/api';

export class AuthRedirectPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    // var urlParams = URLSearchParams.getAll()
    var paramsString = window.location.search
    if (!paramsString) {
      window.alert('no code')
    } else {
      var urlParams = new URLSearchParams(paramsString)
      var code = urlParams.get('code');
      var grant_type = 'authorization_code';
      var client_id = 21342;
      api.post('/App/OAuth/token/', {code, grant_type, client_id})
      .then(resp => {
        localStorage.setItem('bungie-auth', resp.data)
      })
    }

  }

  render() {
    return (
      <div>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

AuthRedirectPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  AuthRedirectPage: makeSelectAuthRedirectPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthRedirectPage);
