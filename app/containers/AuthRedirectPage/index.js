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
      // redirect to error
    }

    var urlParams = new URLSearchParams(paramsString)
    var code = urlParams.get('code')
    api.post('/App/OAuth/token/', {code, grant_type: 'authorization_code', client_id: '21342'})
      .then(resp => {
        console.log(resp)
      })
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
