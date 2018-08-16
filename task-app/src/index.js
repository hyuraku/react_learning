import React from 'react';
import ReactDOM from 'react-dom';
// createStore:function which create store, and it is provided by redux
import { createStore,applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import { composeWithDevTools } from 'redux-devtools-extension'

import './index.css';
import reducer from './reducers'
import EventsIndex from './components/event_index';
import EventsNew from './components/event_new';
import EventsShow from './components/event_show';
import registerServiceWorker from './registerServiceWorker';

const enhancer = process.env.NODE_ENV === 'development' ? composeWithDevTools(applyMiddleware(thunk)):applyMiddleware(thunk)

const store = createStore(reducer,enhancer);

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <Switch>
      <Route path='/events/new' component={EventsNew}/ >
      <Route path='/events/:id' component={EventsShow}/ >
      <Route exact path='/events' component={EventsIndex}/ >
      <Route exact path='/' component={EventsIndex}/>
    </Switch>
  </BrowserRouter>
  </Provider>
  , document.getElementById('root')
);
registerServiceWorker();
