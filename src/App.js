import React from 'react';
import MainView from './components/MainView/MainView';
import Header from './components/Header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NewsList from './components/NewsList/NewsList';
import './App.scss';

function App() {
  return (
    
      <div className="App">
        <BrowserRouter>
          <Header />
            <Switch>
              <Route exact path="/" component={MainView}/>
              <Route exact path="/news" component={MainView}/>
              <Route path="/test/:city" component={MainView} />
            </Switch>
        </BrowserRouter>
      </div>
  );
}

export default App;


