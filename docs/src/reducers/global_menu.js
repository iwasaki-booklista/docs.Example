import { SELECTED_MENU } from '../actions/global_menu.js';

const selectedMenu = (state, action) => {
    let new_state = {...state};

    for (let m of new_state.menus)
        m.select = (m.code===action.menu.code);

    return new_state;
};

const global_menu = (state = [], action) => {
    switch (action.type) {

    case SELECTED_MENU:
        return selectedMenu(state, action);

    default:
        return state;
    }
};

export default global_menu;
