import { useState, useEffect } from 'react';
import { MaintenanceCard } from './MaintenanceCard';

export const MaintenancePage = ( { currentUser }) => {
  const [ myMaintenance, setMyMaintenance ] = useState([])

  useEffect(() => {
    fetch('/maintenances')
    .then((res) => res.json())
    .then((data) => setMyMaintenance(data))
  }, [currentUser]);

  const onDelete = (id) => {
    const updatedMaintenanceList = myMaintenance.filter((maintenance) => maintenance.id !== id);
    setMyMaintenance(updatedMaintenanceList)
  };

  const maintenance = myMaintenance.map((maintenance) => {
    return <MaintenanceCard key={maintenance.id} maintenance={ maintenance } onDelete={ onDelete }/>
  });


  return (
    <div>
      <h1>Recommended, required or custom maintenances for your Dwelling</h1>
      { maintenance }
    </div>
  )
}