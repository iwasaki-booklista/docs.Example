import { combineReducers } from 'redux';

import global_menu from './global_menu';
import modals from './modals';
import page_a from './page_a';
import page_b from './page_b';
import page_c from './page_c';
import page_home from './page_home';

export default combineReducers({
    global_menu,
    modals,
    page_a,
    page_b,
    page_c,
    page_home,
});
