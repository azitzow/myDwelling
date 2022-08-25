import { useState, useEffect } from 'react';
import { Schedule } from "./components/Schedule";
import { LoginForm } from "./components/LoginForm";
import { Sidebar } from "./components/Sidebar";
import { Home, Page } from "./components/Home";
import { SignupForm } from "./components/SignupForm";
import { PropertiesPage } from "./components/PropertiesPage";
import { PropertyForm } from "./components/PropertyForm";
import { PropertyPage } from "./components/PropertyPage";
import { MaintenancePage } from "./components/MaintenancePage.js";
import { Routes, Route } from "react-router-dom";
import { MaintenanceForm } from "./components/MaintenanceForm";
import "./App.css";

export const App = () => {
  const [ currentUser, setCurrentUser ] = useState(false);
  const [ categories, setCategories ] = useState([]);

  useEffect(() => {
    fetch('/authorized_user')
    .then( (res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
        });
      } else {
        res.json().then((json) => {
          if (json.errors !== undefined) {
            alert(json.errors);
          }
        })
      }
    });
  }, []);

  useEffect (() => {
    fetch('/categories')
    .then( (res) => res.json())
    .then((json) => {
      setCategories(json);
    })
  }, [])

  return (
    <div className="App">
      <Sidebar currentUser={ currentUser } setCurrentUser={ setCurrentUser } />
      <Routes>
          <Route exact path="/" element={<Home categories={ categories }/>}/>
          <Route exact path="/signup" element={ <SignupForm />}/>
          <Route exact path="/login" element={ <LoginForm setCurrentUser={ setCurrentUser }/> }/>
          <Route exact path="/calendar" element={ <Schedule /> } />
          <Route exact path="/createDwelling" element={ <PropertyForm /> } />
          <Route exact path="/myDwellings" element={ <PropertiesPage />} />
          <Route exact path="/propertyPage/:id" element={ <PropertyPage />} />
          <Route exact path="/maintenancePage/:propertyId" element={ <MaintenancePage currentUser={ currentUser} categories={categories} />} />
          <Route exact path="/createMaintenance" element={ <MaintenanceForm categories={ categories } />} />

        </Routes>
    </div>
  );
};
