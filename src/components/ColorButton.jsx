import React from 'react';
import './styles.scss'

function ColorButton({ key, color, count, countClick }) {
    const itemClick = () => {
        countClick(color)
    }
  return (
    <button className="colorButton" style={{ background: color }} onClick={itemClick}>
      <p>
      {color}
      </p>
      <p>
          {`(${count})`}
      </p>
    </button>
  );
}

export default ColorButton;
