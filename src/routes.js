import React from 'react';
import {
  Switch, Route, Router, HashRouter,
} from 'react-router-dom';
import Home from './pages/Home';
import history from './utils/history';
import Country from './pages/Country';
import Layout from './components/Layout';

export default function routes() {
  return (
    <Router history={history}>
      <HashRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/countries" component={Country} />
          </Switch>
        </Layout>
      </HashRouter>
    </Router>
  );
}
