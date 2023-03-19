import React, { useEffect, useState } from "react";

export const Website5 = () => {
  const [starWarsData, setStarWarsData] = useState({});
  const [count, setCount] = useState(1);

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/${count}`)
      .then((response) => response.json())
      .then((data) => setStarWarsData(data));
    // fetch("https://swapi.dev/api/people/1")
    //   .then((response) => response.json())
    //   .then((data) => setStarWarsData(data));
    //   .then((data) => console.log(data));
  }, [count]);

  return (
    <div>
      <h1>The count is {count}</h1>

      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Get next character
      </button>

      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  );
};
