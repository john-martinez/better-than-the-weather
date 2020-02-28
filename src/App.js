import React from 'react';
import MainView from './components/MainView/MainView';
import Header from './components/Header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={MainView}/>
          <Route path="/test/:city" component={MainView} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
