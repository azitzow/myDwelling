import { useNavigate } from 'react-router-dom';

export const CategoryCard = ({ category, currentUser }) => {
  const { title, image } = category;
  const navigate = useNavigate();
  console.log(currentUser);

  const handleClick = () => {
    if (currentUser) {
      alert("Welcome to your Dwelling's List page, Click on view my maintenance list button to view your properties maintenance list.");
      navigate("/myDwellings");
    } else {
    alert("Sign up to view this content!");
    navigate('/signup');
    }
  };

  return (
    <div className='category-card' onClick={ handleClick }>
      <h3>{ title }</h3>
      <img src={ image } alt={ title } />
      <p className="view"> Click to view </p>
    </div>
  );
}