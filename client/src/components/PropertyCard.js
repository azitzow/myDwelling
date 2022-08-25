import { useEffect, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

export const PropertyCard = ({ property, onDelete }) => {
  const [ maintenances, setMaintenances] = useState([]);
  const { id, name, address, image } = property;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/propertyPage/${id}`);
  };
  const handleOnClick = () => {
    navigate(`/maintenancePage/${id}`);
  };

  const handleDelete = () => {
    fetch(`/properties/${id}`, {
      method: 'DELETE',
    })
    .then(alert('Successfully deleted this Dwelling!'))
    .then(onDelete(id));
  };

  // GET all PropertyMaintenances
  useEffect(() => {
    fetch(`/properties/${id}/maintenance`)
    .then(res => res.json())
    .then( (propertyMaintenance) => {
      setMaintenances(propertyMaintenance)
    })
  }, [id])

  const sum = (previousValue, currentValue) => previousValue + currentValue;
  const zero = 0;

  // ADD all the estimated costs and display on card
  const estimatedCosts = useMemo(() => {
      return maintenances
        .map((maintenance) => maintenance.estimated_cost)
        .reduce(sum, zero);
    },
    [maintenances, sum, zero]
  );

  // Check which maintenence has been completed
  const completedCosts = useMemo(() => {
      return maintenances
        .filter((propertyMaintenance) => propertyMaintenance.completed === true)
        .map((maintenance) => maintenance.estimated_cost)
        .reduce(sum, zero);
    },
    [maintenances, sum, zero]
  );

  return (
    <div className='property-card-container'>
      <h2>{ name }</h2>
      <p>{ address }</p>
      <img src={image} alt={name} width='500' height='400' />
      <p>
        <button onClick={ handleClick }>View/Edit Dwelling</button>
        <button onClick={ handleDelete }>Delete Dwelling</button>
        <button onClick={ handleOnClick }>View My Maintenance List</button>
      </p>
      <p>Estimated Maintenance Costs: ${ estimatedCosts } </p>
      <p>Completed Maintenance Total: ${ completedCosts }</p>

    </div>
  )
}