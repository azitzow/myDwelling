import { useState, useEffect } from 'react';
import { Schedule } from "./components/Schedule";
import { LoginForm } from "./components/LoginForm";
import { NavBar } from "./components/NavBar";
import { Sidebar } from "./components/Sidebar";
import { Home } from "./components/Home";
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

  return (
    <div className="App">
      <NavBar currentUser={ currentUser } setCurrentUser={ setCurrentUser } />
      <Sidebar currentUser={ currentUser } setCurrentUser={ setCurrentUser } />
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/signup" element={ <SignupForm />}/>
          <Route exact path="/login" element={ <LoginForm setCurrentUser={ setCurrentUser }/> }/>
          <Route exact path="/calendar" element={ <Schedule /> } />
          <Route exact path="/createDwelling" element={ <PropertyForm /> } />
          <Route exact path="/myDwellings" element={ <PropertiesPage />} />
          <Route exact path="/propertyPage/:id" element={ <PropertyPage />} />
          <Route exact path="/maintenancePage/:propertyId" element={ <MaintenancePage currentUser={ currentUser } />} />
          <Route exact path="/createMaintenance" element={ <MaintenanceForm />} />
        </Routes>
    </div>
  );
};