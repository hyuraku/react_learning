import React from 'react';
import ReactDOM from 'react-dom';
// createStore:function which create store, and it is provided by redux
import { createStore,applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import './index.css';
import reducer from './reducers'
import EventsIndex from './components/event_index';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer,applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
  <EventsIndex />
  </Provider>
  , document.getElementById('root')
);
registerServiceWorker();
