import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from '@material-ui/core';
import Navbar from './Navbar';
import HomePage from './HomePage';
import SobrePage from './SobrePage';
import ContatoPage from './ContatoPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Container>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/sobre" component={SobrePage} />
          <Route exact path="/contato" component={ContatoPage} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
