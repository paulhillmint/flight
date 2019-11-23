import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from '../Header';
import ListPage from '../ListPage';
import DetailPage from '../DetailPage';
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
            </Route>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/'>
              <ListPage />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

const About = () => {
  return <h2 class='App-title code'>About</h2>;
};

export default App;
