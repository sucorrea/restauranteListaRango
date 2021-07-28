import React, { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import Home from './Pages/ListagemRestaurantes';
import Cardapio from './Pages/DetalhesRestaurante';

function App() {
  const theme = createMuiTheme();
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/restaurantes/:id">
            <Cardapio />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
