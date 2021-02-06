import React, { useState } from 'react';
import Button from '../Button';

export const LABEL = 'LABEL';

//class Header extends React.Component
function Header() {
  const [state, setState] = useState(true);
  const [sum, setSum] = useState({anterior: 0, actual: 0});
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count => count + 1);
    setSum(sum => {
      setState(!state);
      return ({anterior: sum.actual, actual: sum.actual + 1})
    });
  };

  return (
    <>
      count: {count}
      <br />
      anterior: {sum.anterior}
      <br />
      actual: {sum.actual}
      <br />
      <Button onClick={handleClick} state={state}/>
      {sum.actual}
    </>
  )
}

export default Header;