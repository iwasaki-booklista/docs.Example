import React from 'react';

import { Link } from 'react-router-dom';

function GlobalMenuItem (props) {
    const style = {
        root: {
            normal: {
                color: '#f3f3f3',
                fontWeight: 'bold',
                background: 'none',
                padding: '8px 11px',
                borderRadius: '5px',
                marginTop: '11px',
            },
            selected: {
                color: 'rgb(235,85,5)',
                fontWeight: 'bold',
                background: '#f3f3f3',
                padding: '8px 11px',
                borderRadius: '5px',
                marginTop: '11px',
            },
        },
    };

    const root_style = props.source.select ? style.root.selected : style.root.normal;

    return (
        <Link to={props.source.to}
              style={{textDecoration: 'none'}}>
          <div style={root_style}
               code={props.source.code}
               onClick={props.callbacks.click}>
            {props.source.label}
          </div>
        </Link>
    );
}

export default GlobalMenuItem;
