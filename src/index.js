import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, applyMiddleware, compose} from 'redux'
import reducer from './reducers/index'
import {Provider} from 'react-redux'
import logger from 'redux-logger'


//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(reducer, applyMiddleware(logger));
//console.log(typeof reducer);

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>, document.getElementById('root'));
registerServiceWorker();
