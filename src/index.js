import React from 'react'
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux';
import { bankingReducer } from './reducers/bankingReducer';
import { Provider } from 'react-redux';
import { rootReducer } from './reducers/combineReducer';


const store= createStore(rootReducer)


ReactDOM.render(
<Provider store={store}>
<App/>
</Provider>
, document.getElementById('root'))


