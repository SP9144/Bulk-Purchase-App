import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import UsersList from './components/users-list.component'
import CreateUser from './components/create-user.component'
import LoginUser from './components/login-user.component'
import Vendor from './components/vendor.component'
import Vendor_disppdt from './components/vendor-disp-pdt.component'
import Vendor_addpdt from './components/vendor-add-pdt.component'


function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="navbar-brand">App</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">Users</Link>
              </li>
              <li className="navbar-item">
                <Link to="/create" className="nav-link">Register</Link>
              </li>
              <li className="navbar-item">
                <Link to="/login" className="nav-link">Login</Link>
              </li>
            </ul>
          </div>
        </nav>

        <br/>
        <Route path="/" exact component={UsersList}/>
        <Route path="/create" component={CreateUser}/>
        <Route path="/login" component={LoginUser}/>
        <Route path="/vendor/:id" component={Vendor}/>
        <Route path="/vendor/disp_pdt/:id" component={Vendor_disppdt}/>
        <Route path="/vendor/add_pdt/:id" component={Vendor_addpdt}/>
      </div>
    </Router>
  );
}

export default App;
