import React, {
  Switch,
  Route,
  BrowserRouter as Router,
} from 'react-router-dom';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import ListagemRestaurantes from './Pages/ListagemRestaurantes';
import DetalhesRestaurante from './Pages/DetalhesRestaurante';

const App = () => {
  const theme = createMuiTheme();

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/restaurantes/:id">
            <DetalhesRestaurante />
          </Route>
          <Route exact path="/">
            <ListagemRestaurantes />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
