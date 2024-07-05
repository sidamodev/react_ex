import { useState } from "react";

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

  const course = "Half Stack application development";
  const parts = [
    { name: "Fundamentals of React", exercises: 10 },
    { name: "Using props to pass data", exercises: 7 },
    { name: "State of a component", exercises: 14 },
  ];

  return (
    <>
      <Button onClick={increaseByOne} text="plus" />
      <Button onClick={setToZero} text="zero" />
      <Button onClick={decreaseByOne} text="minus" />
      <Display counter={counter} />
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </>
  );
};

const Button = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>;
};

const Display = (props) => {
  return <div>{props.counter}</div>;
};

const Header = ({ course }) => {
  console.log(course);
  return <h1>{course}</h1>;
};

const Total = () => {
  return <></>;
};

const Content = () => {
  return (
    <>
      <Part />
      <Part />
      <Part />
    </>
  );
};

const Part = () => {
  return <></>;
};
export default App;
