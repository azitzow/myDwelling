import { useNavigate } from 'react-router-dom';

export const CategoryCard = ({ category, currentUser }) => {
  const { id, title, image } = category;
  const navigate = useNavigate();
  console.log(currentUser);
  const handleClick = (event) => {
    if (currentUser) {
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
      <p>Click to view</p>
    </div>
  );
}