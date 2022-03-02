import { object } from 'prop-types';
import { Provider } from 'react-redux';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Routes from './Routes';

const theme = createTheme(); // generate theme

const App = ({ history, store }) => {
  return (
    <Provider store={store}>
      {/* MUI use context API feature of React to Use a Provider to pass the current Theme to the tree below, any component can read it, no matter how deep it is */}
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
