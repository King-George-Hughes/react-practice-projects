import React from "react";

const Counter = () => {
  const state = {
    count: 0,
    imgUrl: "http://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"],
  };

  const styles = {
    fontSize: 15,
    fontWeight: "bold",
  };

  return (
    <div className="container">
      <h1>Hello Wolrd</h1>
      {/* <img src={state.imgUrl} alt="" /> */}
      <span style={styles} className={"badge bg-" + changeColor() + " m-2"}>
        {formatCounter()}
      </span>
      <button onClick={handleIncrement} className="btn btn-secondary btn-sm">
        Increment
      </button>
      <div>
        <ul>
          <p>{state.tags.length === 0 && "Create new tags!"}</p>
          {renderTags()}
        </ul>
      </div>
    </div>
  );

  function handleIncrement() {
    console.log('Icrement clicked')
  }

  function renderTags() {
    return state.tags.length === 0 ? (
      <h6>There are no tags!</h6>
    ) : (
      state.tags.map((tag) => (
        <li key={tag}>
          <h5>{tag}</h5>
        </li>
      ))
    );
  }

  function formatCounter() {
    const { count } = state;
    return count === 0 ? "Zero" : count;
  }

  function changeColor() {
    const { count } = state;
    return count === 0 ? "warning" : "primary";
  }
};

export default Counter;
