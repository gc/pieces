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
      <Route exact path={`/`} render={(props) => <App {...props} pieces={MetaData.pieces} />}/>
      {MetaData.stores.map(store => {
        return <Route exact path={`/${store.name}/:piece?`} render={
            (props) => <App {...props} pieces={MetaData.pieces.filter(p => p.store === store.name)} store={store.name} />
        } />
      })}
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('root'));


registerServiceWorker();
