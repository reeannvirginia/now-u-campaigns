import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Campaigns, Campaign, Homepage } from './domain';
import { TopNav, AnnounceBar } from './components';
import './App.scss';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <AnnounceBar />
        <TopNav />
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/campaigns" exact component={Campaigns} />
          <Route path="/campaigns/:id" exact component={Campaign} />
          <Redirect to={'/'} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
