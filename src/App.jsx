/* eslint-disable react/prop-types */
import { useState } from "react";
import Profile from "./profile";
import "./App.css";
import ShoppingList from "./fruit";

const App = () => {
  const [counter, setCounter] = useState(0);
  console.log(counter);

  const increaseByOne = () => {
    console.log(counter);
    setCounter(counter + 1);
  };
  const decreaseByOne = () => {
    console.log(counter);

    setCounter(counter - 1);
  };
  const setToZero = () => {
    console.log(counter);

    setCounter(0);
  };

  return (
    <>
      <Button onClick={increaseByOne} text="plus" />
      <Button onClick={setToZero} text="zero" />
      <Button onClick={decreaseByOne} text="minus" />
      <Display counter={counter} />
      <Profile />
      <ShoppingList />
    </>
  );
};

const Button = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>;
};

const Display = ({ counter }) => {
  return <div>{counter}</div>;
};

export default App;
