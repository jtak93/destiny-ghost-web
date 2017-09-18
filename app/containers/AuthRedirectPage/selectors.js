import { createSelector } from 'reselect';

/**
 * Direct selector to the authRedirectPage state domain
 */
const selectAuthRedirectPageDomain = () => (state) => state.get('authRedirectPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by AuthRedirectPage
 */

const makeSelectAuthRedirectPage = () => createSelector(
  selectAuthRedirectPageDomain(),
  (substate) => substate.toJS()
);

export default makeSelectAuthRedirectPage;
export {
  selectAuthRedirectPageDomain,
};
