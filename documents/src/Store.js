import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from './reducers';

let StoreModel = {
    modals: {},
    page_home: {},
    page_a: {},
    page_b: {},
    page_c: {},
    global_menu: {
        menus: [
            { code: 'a', label: 'Home',   to: '/',  select: true },
            { code: 'b', label: 'Page A', to: '/a', select: false },
            { code: 'c', label: 'Page B', to: '/b', select: false },
            { code: 'd', label: 'Page C', to: '/c', select: false },
        ],
    },
};

const Store = createStore(
    rootReducer,
    StoreModel,
    applyMiddleware(
        thunk,
        logger,
    ),
);

export default Store;
