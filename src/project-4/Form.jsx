import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isFriendly: false,
    employment: "",
    favColor: "",
  });
  //   const [lastName, setLastName] = useState("");
  //   console.log(formData.favColor);

  function handleChange(event) {
    // console.log(event.target.value);
    const { name, value, type, checked } = event.target;

    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });

    // console.log(formData);
  }

  //   function handleLastNameChange(event) {
  //     console.log(event.target.value);

  //     setLastName(event.target.value);
  //   }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Submitted");
    console.log(formData);
  }

  return (
    <div>
      <form className="w-50 mx-auto" onSubmit={handleSubmit}>
        <input
          className="form-control"
          type="text"
          placeholder="first name...."
          onChange={handleChange}
          name="firstName"
          value={formData.firstName}
        />
        <input
          className="form-control"
          type="text"
          placeholder="last name...."
          onChange={handleChange}
          name="lastName"
          value={formData.lastName}
        />
        <input
          className="form-control"
          type="email"
          placeholder="email...."
          onChange={handleChange}
          name="email"
          value={formData.email}
        />
        <textarea
          className="form-control"
          value={formData.comments}
          onChange={handleChange}
          name="comments"
          id=""
          cols="30"
          rows="5"
        />
        <input
          type="checkbox"
          id="isFriendly"
          checked={formData.isFriendly}
          onChange={handleChange}
          name="isFriendly"
        />
        <label htmlFor="isFriendly">Are you friendlya?</label>
        <br />
        <fieldset className="form-control">
          <legend>Current employment status</legend>
          <input
            type="radio"
            id="unemployed"
            name="employment"
            value="unemployed"
            checked={formData.employment === "unemployed"}
            onChange={handleChange}
          />
          <label htmlFor="unemployed">Unemployed</label>
          <br />
          <input
            type="radio"
            id="part_time"
            name="employment"
            value="part_time"
            checked={formData.employment === "part_time"}
            onChange={handleChange}
          />
          <label htmlFor="part_time">Part_time</label>
          <br />
          <input
            type="radio"
            id="full_time"
            name="employment"
            value="full_time"
            checked={formData.employment === "full_time"}
            onChange={handleChange}
          />
          <label htmlFor="full_time">Full_time</label>
        </fieldset>
        <label htmlFor="favColor">What is your favorite color!</label>
        <select name="favColor" id="favColor" onChange={handleChange}>
          <option value="">---Choose a color----</option>
          <option value="red">Red</option>
          <option value="yellow">Yellow</option>
          <option value="blue">blue</option>
          <option value="green">green</option>
          <option value="black">black</option>
          <option value="purple">purple</option>
        </select>
        <br />
        <br />
        <button className="btn btn-primary">Submit</button>
      </form>
      <h1 className="mb-5">{formData.firstName}</h1>
    </div>
  );
};

export default Form;
