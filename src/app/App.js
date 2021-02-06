import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext"
import LoginDoctor from './components/doctorLogin/loginDoctor';
import LoginPatient from './components/patientLogin/loginPatient';
import DashboardPatient from './components/patientDashboard/dashboardPatient';
import PrivateRoute from './components/privateRoute';
import './App.css';


function App() { 
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/" component={DashboardPatient} />
            <PrivateRoute path="/patientLogin" component={LoginPatient} />
            <Route exact path="/doctorLogin" component={LoginDoctor} />
          </Switch>
        </AuthProvider>
      </Router> 
    </div>
  )
}

export default App;