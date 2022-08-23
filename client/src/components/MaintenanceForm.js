import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { select } from "react-select";

export const MaintenanceForm = ({ categories, setMyMaintenance }) => {
  const [formData, setFormData] = useState({
    name: "",
    category_id: "",
  });

  const navigate = useNavigate();
  const { name, category_id } = formData;

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
          console.log(data);
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

  const handleClick = () => {
    // TO DO update state here??
  };

  return (
    <div className="maintenance-form-container">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Create Custom Maintenance</h1>

        <label>Maintenance</label>
        <input
          type="text"
          onChange={handleChange}
          name="name"
          value={name}
        ></input>

        <label> Select A Category </label>
        <select name="category_id" onChange={handleChange} value={category_id}>
          <option defaultValue="Select An Option"> Select An Option </option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.title}
            </option>
          ))}
        </select>

        <button onClick={handleClick} type="submit">
          {" "}
          Create{" "}
        </button>
      </form>
    </div>
  );
};
