// import { useState, useEffect } from 'react'
import { PropertyCard } from './PropertyCard'

export const PropertiesPage = ({myProperties, setMyProperties}) => {
  const onDelete = (id) => {
    const updatedPropertyList = myProperties.filter((property) => property.id !== id);
    setMyProperties(updatedPropertyList)
  };

  const property = myProperties.map( (property) => {
    return <PropertyCard key={ property.id } property={ property } onDelete={ onDelete }/>
  });


  return (
    <div>
      <h1>My Dwellings List</h1>
      { property }
    </div>
  );
};