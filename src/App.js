import React, { useState } from 'react';
import uuidv4 from 'uuid/v4';
import ColorButton from './components/ColorButton';
import './App.scss';

function App() {
  const [colors, setColors] = useState([
    {
      title: 'blue',
      count: 0,
    },
    {
      title: 'red',
      count: 0,
    },
    {
      title: 'orange',
      count: 0,
    },
    {
      title: 'green',
      count: 0,
    },
    {
      title: 'purple',
      count: 0,
    },
  ]);
  const colorClick = (color) => {
    const newColors = [...colors];
    const chosenColor = newColors.find((item) => item.title === color);
    chosenColor.count = chosenColor.count + 1;
    setColors(newColors);
  };
  return (
    <div className="container grid">
      {colors.map((item) => (
        <div key={uuidv4()} className="item">
          <ColorButton
            color={item.title}
            count={item.count}
            countClick={colorClick}
          />
        </div>
      ))}
    </div>
  );
}

export default App;
