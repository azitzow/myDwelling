import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { select } from "react-select";

export const MaintenanceForm = ({ categories }) => {
  const [formData, setFormData] = useState({
    name: "",
    category_id: "",
    estimated_cost: "",
    property_id: "",
  });
  const [ myProperties, setMyProperties ] = useState([]);


  const { name, category_id, property_id, estimated_cost } = formData;
  const navigate = useNavigate();

  useEffect( () => {
    fetch('/properties')
    .then( (res) => res.json())
    .then((data) => setMyProperties(data))
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("/maintenances", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          setFormData(data);
          navigate(`/myDwellings`);
        });
      } else {
        res.json().then((data) => {
          alert(data.errors);
        });
      }
    });
  };

  return (
    <div className="content-container">
      <form className="form-container" onSubmit={handleSubmit}>
        <h1>Create Custom Maintenance</h1>

        <label>Maintenance</label>
        <input
          type="text"
          onChange={handleChange}
          name="name"
          value={name}
        ></input>

        <label> Select A Dwelling </label>
        <select name="property_id" onChange={handleChange} value={property_id}>
          <option defaultValue="Select An Option"> Select An Option </option>
          {myProperties.map((property) => (
            <option key={property.id} value={property.id}>
              {property.name}
            </option>
          ))}
        </select>

        <label> Select A Category </label>
        <select name="category_id" onChange={handleChange} value={category_id}>
          <option defaultValue="Select An Option"> Select An Option </option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.title}
            </option>
          ))}
        </select>

        <label>Estimated Cost</label>
        <input
          type="text"
          onChange={handleChange}
          name="estimated_cost"
          value={estimated_cost}
        ></input>

        <button type="submit">Create</button>
      </form>
    </div>
  );
};
