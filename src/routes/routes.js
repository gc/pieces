import React from 'react';
import NotFound from '../components/NotFound';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import MetaData from "../assets/metadata";
import App from '../App';

export const routes = (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact path={`/`} render={(props) => <App {...props} pieces={MetaData.pieces} />}/>
      {MetaData.stores.map(store => {
        return <Route exact path={`/${store.name}/:piece?`} render={
            (props) => <App {...props} pieces={MetaData.pieces.filter(p => p.store === store.name)} store={store.name} />
        } key={store.name} />
      })}
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);
