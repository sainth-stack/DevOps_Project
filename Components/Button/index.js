import React from 'react';
// import "./styles.scss"

export default function Button({ text = "", className = "bg-white", handleClick, style, ...rest }) {
  return (
    <button style={{ visibility: `${style}` }} className={"border-green buttonStyle " + className} onClick={() => handleClick ? handleClick() : null} {...rest}>{text}</button>
  )
}
