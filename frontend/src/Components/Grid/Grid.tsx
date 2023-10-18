import React from 'react';
import './Grid.css';

function Grid(props: { children: any; }){
    const {children} = props;
    return(
        <div className="grid">
            {children}

        </div>
    );
}

export default Grid;