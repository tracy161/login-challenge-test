import { object } from 'prop-types';
import { Provider } from 'react-redux';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Routes from './Routes';

const theme = createTheme();

const App = ({ history, store }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Routes history={history} />
      </ThemeProvider>
    </Provider>
  );
};

App.propTypes = {
  history: object.isRequired,
  store: object.isRequired,
};

export default App;
