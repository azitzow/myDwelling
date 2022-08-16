import image from '../images/move-in.png'

export const MaintenanceCard = ( { maintenance, onDelete }) => {
  const { name, description, category } = maintenance;
  console.log(name)
  return (
    <div>
      <h3>{ name }</h3>
      <p>{`Category Type: ${ category }`}</p>
      <p>{`Action: ${ description }`}</p>
      { name === 'Move-In' ? <img src={ image } alt={ name } width='500' height='400'/> : null }
    </div>
  );
};