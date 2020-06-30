export const SELECTED_MENU = 'SELECTED_MENU';

export const selectedMenu = (menu) => {
    return ({
        type: SELECTED_MENU,
        menu: menu,
    });
};
