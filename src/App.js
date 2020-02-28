import React from 'react';
import MainView from './components/MainView/MainView';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NewsList from './components/NewsList/NewsList';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={MainView}/>
          <Route path="/test/:city" component={MainView} />
        </Switch>
        <NewsList />
      </div>
    </BrowserRouter>
  );
}

export default App;
