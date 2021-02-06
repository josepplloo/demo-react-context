import React from 'react';
import { useTheme } from '../../contexts/ThemeContext'; 

const Label = ({text, children}) =>  {
 return ( `${text ? '☽' : '☼'} ${children}`);
};

function Button({onClick, state}) {
  const handleClick = () => {
    setTheme();
    onClick()
  }
  const myLabel = 'Click me!';
  const [theme, setTheme] = useTheme();

  return (
    <button onClick={handleClick} style={{ background: theme.background, color: theme.foreground }}>
      <Label text={state} >
        {myLabel}
      </Label>
    </button>
  )
}

export default Button;
