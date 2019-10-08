import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducer from 'store/reducers';
import App from './App';

const store = createStore(reducer, applyMiddleware(logger, thunk));

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
