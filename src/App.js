import React from 'react';
import MainView from './components/MainView/MainView';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={MainView}/>
          <Route path="/test/:city" component={MainView} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
