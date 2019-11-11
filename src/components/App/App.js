import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Header from '../Header';
import DetailPage from '../DetailPage';
import Footer from '../Footer/Footer';

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
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

const Home = () => {
  return <h2 class='App-title code'>Welcome to Flight</h2>;
};

const About = () => {
  return <h2 class='App-title code'>About</h2>;
};

export default App;
