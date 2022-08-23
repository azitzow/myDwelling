import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const MaintenancePage = ( { currentUser, categories }) => {
  const [ myMaintenance, setMyMaintenance ] = useState([]);
  const { propertyId } = useParams();

  useEffect(() => {
    if (propertyId !== undefined) {
      fetch(`/properties/${propertyId}/maintenance`)
        .then((res) => res.json())
        .then((data) => setMyMaintenance(data))
    }
  }, [propertyId]);

  const toggleCompleted = (e) => {
    // if unchecked -> checked, mark as complete (http)
    // if checked -> unchecked, un-do the complete state (http)
  }

  return (
    <div className='maintenance-page-container'>
      <h1>List of Maintenances</h1>

      {categories.map(category => {
        return (
          <section key={category.id}>
            <h2>{category.title}</h2>
            <ul>
              {
                myMaintenance
                  .filter(maintenance => maintenance.category_id === category.id)
                  .map(maintenance => {
                    return (<li key={maintenance.id}>
                      <input
                        type="checkbox"
                        name={maintenance.name}
                        value={maintenance.id}
                        onChange={toggleCompleted}
                        />
                      <span>(${maintenance.estimated_cost || 0}) </span>
                      <label htmlFor={maintenance.name}>{maintenance.name}</label>
                    </li>)
                  })
              }
            </ul>
          </section>
          );
      })}
    </div>
  );
}
