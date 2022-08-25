import { useState, useEffect } from 'react'
import { PropertyCard } from './PropertyCard'

export const PropertiesPage = () => {
  const [ myProperties, setMyProperties ] = useState([]);

  useEffect( () => {
    fetch('/properties')
    .then( (res) => res.json())
    .then((data) => setMyProperties(data))
  }, []);


  const onDelete = (id) => {
    const updatedPropertyList = myProperties.filter((property) => property.id !== id);
    setMyProperties(updatedPropertyList)
  };

  const property = myProperties.map( (property) => {
    return <PropertyCard key={ property.id } property={ property } onDelete={ onDelete }/>
  });


  return (
    <div className='content-container'>
      <h1>My Dwellings List</h1>
      { property }
    </div>
  );
};