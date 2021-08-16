import React, {
  Switch,
  Route,
  BrowserRouter as Router,
} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import ListagemRestaurantes from './Pages/ListagemRestaurantes';
import DetalhesRestaurante from './Pages/DetalhesRestaurante';

const queryClient = new QueryClient();
const theme = createMuiTheme();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
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
    </QueryClientProvider>
  );
};

export default App;
