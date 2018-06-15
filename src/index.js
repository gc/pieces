import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import MetaData from "./assets/metadata";
import './index.css';
import App from './App';
import NotFound from './components/NotFound';
import registerServiceWorker from './registerServiceWorker';


const routes = (
  <BrowserRouter>
    <Switch>
      {MetaData.stores.map(store => {
        return <Route exact path={`/${store.name}`} render={
            (props) => <App {...props} pieces={MetaData.pieces.filter(p => p.store === store.name)} />
        } />
      })}
      {MetaData.stores.map(store => {
        return <Route exact path={`/${store.name}/:piece`} render={
            (props) => <App {...props} pieces={MetaData.pieces.filter(p => p.store === store.name)} />
        } />
      })}
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('root'));


registerServiceWorker();
