import React from 'react';
import { connect } from 'react-redux';

import GlobalMenuItem from './GlobalMenuItem';

import { selectedMenu } from '../actions/global_menu.js';

function GlobalMenu (props) {
    const style = {
        root: {
            position: 'fixed',
            left: 0,
            top: 0,
            height: '100%',
            background: 'rgb(235,85,5)',
            padding: '11px',
        },
    };

    const callbacks = {
        click: (e) => {
            let code = e.target.getAttribute('code');
            let menu = props.source.menus.find((d)=> {
                return d.code === code;
            });
            props.selectedMenu(menu);
        }
    };

    return (
        <div style={style.root}>
          {props.source.menus.map((d) => {
              return <GlobalMenuItem key={d.code}
                                     source={d}
                                     callbacks={callbacks} />;
          })}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        source:  state.global_menu,
    };
};

const mapDispatchToProps = (dispatch) => ({
    selectedMenu: (nodes) => {
        return dispatch(selectedMenu(nodes));
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(GlobalMenu);
