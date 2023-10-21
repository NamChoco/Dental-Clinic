import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';
import './Box.css';
import React from 'react';
function Box(props: { children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }){
    return (
    <div className="centered-container">
        <div className="box">
            {props.children}
        </div>
    </div>
    );
}
   

export default Box;