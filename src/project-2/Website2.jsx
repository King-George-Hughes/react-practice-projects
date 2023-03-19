import React from "react";
import Navbar from "./Navbar";
import Heero from "./Heero";
import Card from "./Card";
import Data from "../Data";

const Website2 = () => {
  // Test 1
  const num = [1, 2, 3, 4, 5];
  const squared = num.map((n) => n * n);
  console.log(num);
  console.log(squared);

  // Test 2
  const names = ["alice", "bob", "charlie", "danielle"];
  const capName = names.map(
    (name) => name[0].toUpperCase() + name.slice(1)
    // name.slice().split("")[0].toUpperCase().concat(name.slice(1))
  );
  console.log(capName);

  // Test 3
  const pokemon = ["Bulbasaur", "Charmander", "Squirtle"];
  const rendHtml = pokemon.map((el) => `<h1>${el}</h1>`);
  console.log(rendHtml);

  // Date
  const cards = Data.map((data) => {
    return (
      <Card
        key={data.id}
        data={data}
        // {...data}
        // img={data.img}
        // rating={data.rating}
        // reviewCount={data.reviewCount}
        // country={data.country}
        // title={data.title}
        // price={data.price}
        // openSpots={data.openSpots}
      />
    );
  });

  return (
    <div>
      <Navbar />
      <Heero />
      <div className="container d-flex card-container">
        {/* <Card name="Amma" life="Kwaku" isMe={true} />
        <Card name="Amma" life="Kwaku" isMe={false} /> */}
        {/* <Card /> */}
        {cards}
      </div>
    </div>
  );
};

export default Website2;
