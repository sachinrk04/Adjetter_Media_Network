import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
 
import Home from './container/Home/Home';
import Header from './components/Header/Header';
import UserDetail from './container/UserDetail/UserDetail';
import UserRepo from './container/UserRepo/UserRepo';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/:username/repositories" component={UserRepo} />
          <Route path="/:username" component={UserDetail} />          
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
