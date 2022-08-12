import { useState, useEffect } from 'react';
import { Schedule } from "./components/Schedule";
import { LoginForm } from "./components/LoginForm";
import { NavBar } from "./components/NavBar";
import { Sidebar } from "./components/Sidebar";
import { Home } from "./components/Home";
import { SignupForm } from "./components/SignupForm";
import { Routes, Route } from "react-router-dom";
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
        </Routes>
    </div>
  );
};