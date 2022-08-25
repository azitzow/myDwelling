import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SignupForm = () => {
  const [ formData, setFormData ] = useState({
    username: "",
    phoneNumber: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const { username, phoneNumber, email, password } = formData;

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json",
      },
      body: JSON.stringify(formData)
    }).then( (res) => {
      if (res.ok) {
        res.json().then( (user) => {
          navigate("/login");
        });
      } else {
        res.json().then((json) => alert(json.errors));
      }
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  }

  return (
    <div className="content-container">
      <form className="form-container" onSubmit={ handleSubmit }>
      <h1>Sign Up</h1>

        <label>Username</label>
        <input
        type='text'
        required
        onChange={ handleChange }
        name='username'
        value={ username }
        ></input>

        <label>Email</label>
        <input
        type='email'
        required
        onChange={ handleChange }
        name='email'
        value={ email }
        ></input>

        <label>Phone Number</label>
        <input
        type='phone-input'
        onChange={ handleChange }
        name='phoneNumber'
        value={ phoneNumber }
        ></input>

        <label>Password</label>
        <input
        type='password'
        required
        onChange={ handleChange }
        name='password'
        value={ password }
        ></input>
        <button type="submit" >Signup</button>
      </form>
    </div>
  );
};