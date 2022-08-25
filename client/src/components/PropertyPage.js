import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export const PropertyPage = ( ) => {
  const [ formData, setFormData ] = useState({
    name: '',
    address: '',
    image: ''
  });
  const { id } = useParams();
  const navigate =useNavigate();
  useEffect( () => {
    fetch(`/properties/${id}`)
    .then((res) => res.json())
    .then((data) => {
      setFormData(data)
    })
  }, [id]);

  const { name, address, image } = formData;

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`/properties/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(formData)
    }).then( (res) => {
      if (res.ok) {
        res.json().then((property) => {
          setFormData(property);
          navigate('/myDwellings')
        })
      } else {
        res.json().then((json) => alert(json.errors));
      }
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value});
  };

  return (
    <div className='content-container'>
      <h2>EDIT ALL DESIRED FIELDS</h2>
      <img src={image} alt='a house'/>
      <form className='form-container' onSubmit={ handleSubmit } >
        <label>Name</label>
        <input
        type='text'
        required
        onChange={ handleChange }
        name='name'
        value={ name }
        ></input>

        <label>Address</label>
        <input
        type='text'
        required
        onChange={ handleChange }
        name='address'
        value={ address }
        ></input>

        <label>Image</label>
        <input
        type='text'
        required
        onChange={ handleChange }
        name='image'
        value={ image }
        ></input>

        <button type='submit' className='button'>Submit</button>
      </form>
    </div>
  )
};