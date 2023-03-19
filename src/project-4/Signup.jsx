import React, { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirm_password: "",
    newsletter: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  const submitForm = (event) => {
    event.preventDefault();
    console.log(formData);

    if (formData.password === formData.confirm_password) {
      console.log("Successfully signed up");
      formData.newsletter &&
        console.log("Thanks for signing up for news letter");
    } else console.log("Passwords does not match!");
  };

  return (
    <div className="container">
      <form className="form" onSubmit={submitForm}>
        <fieldset>
          <legend>Signup here</legend>

          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <br />
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <br />
          <input
            type="password"
            name="confirm_password"
            className="form-control"
            placeholder="Confirm Password"
            value={formData.confirm_password}
            onChange={handleChange}
          />
          <br />
          <input
            type="checkbox"
            name="newsletter"
            id="newsletter"
            value={formData.newsletter}
            onChange={handleChange}
          />
          <label htmlFor="newsletter" className="mx-4">
            I want to join the newsletter
          </label>
          <br />
          <br />
          <button className="btn btn-primary">Signup</button>
        </fieldset>
      </form>
    </div>
  );
};

export default Signup;
