import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

import './polyfills';
import reducer from 'store/reducers';
import App from 'components';

const store = createStore(reducer, applyMiddleware(logger, thunk));

render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('app')
);
