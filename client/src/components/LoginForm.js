import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export const LoginForm = ( { setCurrentUser } ) => {
  const navigate = useNavigate();
  const [ formData, setFormData ] = useState({
    username: '',
    password: ''
  });

  const { username, password } = formData;

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    }).then( (res) => {
      if (res.ok) {
        res.json().then( (user) => {
          setCurrentUser(user);
          navigate('/');
        });
      } else {
        res.json().then( (json) => {
          alert(json.errors);
        });
      }
    });
  };

  return (
    <div className='content-container'>
    <form className='form-container' onSubmit={ handleSubmit }>
      <h1>LOGIN</h1>
      <h2>Please enter your username and password to continue!</h2>

        <label>Username</label>
        <input
          type='text'
          required
          onChange={ handleChange }
          name='username'
          value={ username }
        ></input>

        <label>Password</label>
        <input
          type='password'
          required
          onChange={ handleChange }
          name='password'
          value={ password }
        ></input>
        <button type='submit'>Login</button>
      </form>
    </div>
  )
};