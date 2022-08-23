import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const PropertyForm = () => {
  const [ formData, setFormData ] = useState({
    name: '',
    address: '',
    image: ''
  })

  const navigate = useNavigate();
  const { name, address, image } = formData;

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('/properties', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify(formData)
    }).then( (resp) => {
      if (resp.ok) {
        resp.json().then( (user) => {
          navigate('/myDwellings');
        });
      } else {
        resp.json().then((json) => alert(json.errors));
      }
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  }

  return (
    <div>
      <form className='property-form-container' onSubmit={ handleSubmit }>
        <h1>Create a new Dwelling</h1>

        <label className='label'>Name</label>
        <input
        type='text'
        required
        onChange={ handleChange }
        name='name'
        value={ name }
        ></input>

        <label className='label' >Address</label>
        <input
        type='text'
        required
        onChange={ handleChange }
        name='address'
        value={ address }
        ></input>

        <label className='label'>Image</label>
        <input
        type='text'
        onChange={ handleChange }
        name='image'
        value={ image }
        ></input>

        <button className='cursor-pointer' type='submit' >Create</button>
      </form>
    </div>
  )
}