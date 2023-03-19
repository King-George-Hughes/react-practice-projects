import React, { useEffect, useState } from "react";
// import memeData from "../MemeData";

const MemeActions = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1bij.jpg",
  });
  const [allMeme, setAllMeme] = useState([]);
  // const [allMeme, setAllMeme] = useState(memeData);

  function displayMemeImage(e) {
    e.preventDefault();
    const memeArr = allMeme.data.memes;
    const randomNumber = Math.trunc(Math.random() * memeArr.length);
    console.log(randomNumber);

    // const {url} = memeArr[randomNumber];
    const url = memeArr[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
    console.log(url);
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setMeme((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }

  console.log("Yolo");

  useEffect(() => {
    async function getMemes() {
      const response = await fetch(`https://api.imgflip.com/get_memes`);
      const data = await response.json();
      setAllMeme(data);
    }

    getMemes();

    // // OR
    // fetch(`https://api.imgflip.com/get_memes`)
    //   .then((response) => response.json())
    //   .then((data) => setAllMeme(data));
  }, [meme.randomImage]);

  // Styles
  const style1 = {
    width: "100%",
    height: "550px",
    position: "relative",
    textAlign: "center",
  };
  const style2 = {
    position: "absolute",
    top: "5%",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 1,
  };
  const style3 = {
    position: "absolute",
    bottom: "5%",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 1,
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <form action="" className="form">
          <div className="col-12">
            <div className="w-100 d-inline-flex">
              <input
                type="text"
                name="topText"
                placeholder="top text"
                onChange={handleChange}
                value={meme.topText}
                className="form-control form-control-lg me-3"
              />
              <input
                type="text"
                name="bottomText"
                placeholder="bottom text"
                onChange={handleChange}
                value={meme.bottomText}
                className="form-control form-control-lg ms-3"
              />
            </div>
          </div>
          <div className="col-12">
            <button
              className="btn btn-primary btn-lg mt-4 w-100"
              onClick={displayMemeImage}
            >
              Get a new meme image 🖼️
            </button>
          </div>
        </form>
        <div className="col-12 my-4" style={style1}>
          <img
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            className="image-fluid"
            // src={memeImage}
            src={meme.randomImage}
            alt=""
          />
          <h2 style={style2} className="text-light fw-bold display-2">
            {meme.topText}
          </h2>
          <h2 style={style3} className="text-light fw-bold display-2">
            {meme.bottomText}
          </h2>
          {/* <h2>{meme.randomImage}</h2> */}
        </div>
      </div>
    </div>
  );
};

export default MemeActions;
