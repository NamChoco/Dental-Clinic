// TextComponent.js
import React from 'react';
import './TextComponent.css';

function TextCom2(props: { text: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) {
  return (
    <div className="text-com2">
      {props.text}
    </div>
  );
}

export default TextCom2;