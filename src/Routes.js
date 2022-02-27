import { object } from 'prop-types';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router/immutable';

import Main from './containers/Main';
import LogIn from './containers/login/Login';

function Routes({ history }) {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/login' component={LogIn} />
      </Switch>
    </ConnectedRouter>
  );
}

Routes.propTypes = {
  history: object.isRequired
};

export default Routes;
