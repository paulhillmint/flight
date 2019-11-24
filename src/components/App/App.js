import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from '../Header';
import IndexPage from '../IndexPage';
import ListPage from '../ListPage';
import DetailPage from '../DetailPage';
import AboutPage from '../AboutPage';
import Footer from '../Footer';

import 'normalize.css';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Header />
        <div className='App-content'>
          <Switch>
            <Route path='/flights/:flightId'>
              <DetailPage />
            </Route>
            <Route path='/airlines/:airlineId'>
              <ListPage />
            </Route>
            <Route path='/about'>
              <AboutPage />
            </Route>
            <Route path='/'>
              <IndexPage />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
