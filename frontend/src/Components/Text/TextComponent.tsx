// TextComponent.js
import React from 'react';
import './TextComponent.css';

function TextComponent(props: { text: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) {
  return (
    <div className="text-component">
      {props.text}
    </div>
    
  );
}

export default TextComponent;
