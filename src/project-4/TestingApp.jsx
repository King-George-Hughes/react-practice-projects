import React, { useState } from "react";
import memeData from "../MemeData";
import boxes from "../boxes";
import Counting from "./Counting";
import Boxes from "./Boxes";
import Form from "./Form";
import WindowsWidth from "./WindowsWidth";

const TestingApp = () => {
  function handleClick() {
    console.log("You clicked me!");
  }

  function handleHover() {
    console.log("You hovered over me!");
  }

  function imgUrl() {
    const memeArr = memeData.data.memes;
    const randomNumber = Math.trunc(Math.random() * memeArr.length);
    console.log(randomNumber);

    // const {url} = memeArr[randomNumber];
    const url = memeArr[randomNumber].url;
    console.log(url);
  }

  //   Challenge 1
  const [things, setThings] = useState(["Things 1"]);

  const thingsEl = things.map((thing) => <p key={thing}>{thing}</p>);

  function addThings() {
    const newThing = `Things ${things.length + 1}`;
    setThings((prevState) => [...prevState, newThing]);
    // thingsArr.push(newThing);
    console.log(newThing);
  }

  //   Challenge 2
  const [isImportant, setInsImportant] = useState(true);

  function changeImportant() {
    setInsImportant((prevState) => !prevState);
  }

  //   Challenge 3
  const [count, setCount] = useState(0);
  function subtractCount() {
    setCount((prevState) => prevState - 1);
  }
  function addCount() {
    setCount((prevState) => prevState + 1);
  }

  // console.log("App component rendered !");

  //  challenge 4
  const [square, setSquare] = useState(boxes);

  const handleToggle = (id) => {
    console.log("Clicked");
    console.log(id);

    setSquare((prevState) => {
      return prevState.map((square) => {
        return square.id === id ? { ...square, on: !square.on } : square;
      });
    });

    // OR
    // setSquare((prevState) => {
    //   const newSquares = [];

    //   for (let i = 0; i < prevState.length; i++) {
    //     const currentSquare = prevState[i];

    //     if (currentSquare.id === id) {
    //       const updatedSquare = {
    //         ...currentSquare,
    //         on: !currentSquare.on,
    //       };
    //       newSquares.push(updatedSquare);
    //     } else {
    //       newSquares.push(currentSquare);
    //     }
    //   }
    //   return newSquares;
    // });
  };
  const box = square.map((box) => (
    <Boxes
      key={box.id}
      on={box.on}
      id={box.id}
      handleToggle={() => handleToggle(box.id)}
      // handleToggle={handleToggle}
    />
  ));

  // Challenge 5
  const [message, setMessage] = useState(["a", "b"]);

  // Challenge 6
  const [show, setshow] = useState(true);

  function showWidth() {
    setshow((prevState) => !prevState);
  }

  return (
    <div>
      <div className="container">
        <h1 onMouseOver={handleHover}>Yolo</h1>
        <button onClick={handleClick} className="btn btn-warning">
          Click Me
        </button>
        <button onClick={imgUrl} className="btn btn-success ms-5">
          Change Img
        </button>
        <br />
        <h1>----------------------------------</h1>
        <button onClick={addThings} className="btn btn-secondary">
          Add Item
        </button>
        <br />
        {thingsEl}
        <h1>----------------------------------</h1>
        <h4>Is state important to know</h4>
        <span
          onClick={changeImportant}
          className="bg-secondary display-1 p-2 text-white"
          style={{ borderRadius: "50%" }}
        >
          {isImportant ? "Yes" : "No"}
        </span>
        <h1>----------------------------------</h1>
        <button onClick={subtractCount} className="btn btn-secondary">
          -
        </button>
        {/* <span className="fs-1 fw-bold px-1">{count}</span> */}
        <Counting number={count} />
        <button onClick={addCount} className="btn btn-secondary">
          +
        </button>
        <h1>------------------------------------</h1>
        <h2>Boxes will go here</h2>
        <div className="boxes d-inline-flex flex-wrap">{box}</div>
        <h1>------------------------------------</h1>
        {message.length > 0 ? (
          <h1>
            You have {message.length} unread{" "}
            {message.length > 1 ? "messages" : "message"}!
          </h1>
        ) : (
          <h1>You're all caught up!</h1>
        )}
        <h1>------------------------------------</h1>
        <Form />
        <h1>-----------------------------------</h1>
        <div className="mb-5">
          <button onClick={showWidth}>Toggle WindowTracker</button>
          {show && <WindowsWidth />}
        </div>
      </div>
    </div>
  );
};

export default TestingApp;
