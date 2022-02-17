import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import About from './About';

export default class Menu extends Component {
  render() {
    return (
      <div>
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
          {/* Brand Logo */}
          <a href="index3.html" className="brand-link">
            {/* <img src="./dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} /> */}
            <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
            <span className="brand-text font-weight-light">AdminLTE 3</span>
          </a>
          {/* Sidebar */}
          <div className="sidebar">
            {/* Sidebar user panel (optional) */}
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
              <div className="image">
                <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
              </div>
              <div className="info">
                <a href="#" className="d-block">Alexander Pierce</a>
              </div>
            </div>
            {/* Sidebar Menu */}
            <nav className="mt-2">
              <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                {/* Add icons to the links using the .nav-icon class
           with font-awesome or any other icon font library */}
                <li className="nav-item has-treeview menu-open">

                  <ul className="nav nav-treeview">


                    {/* <Link to="/About">About</Link>
                <Link to="/Login">Login</Link> */}


                    <li className="nav-header">Student Info</li>
                    <li className="nav-item">
                      <Link to="/NewReg" className="nav-link">
                        <i className="nav-icon far fa-circle text-danger" />
                        <p className="text">Registration</p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/UserList" className="nav-link">                       
                          <i className="nav-icon far fa-circle text-warning" />
                          <p>List of Students</p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        <i className="nav-icon far fa-circle text-info" />
                        <p>Edit/Update</p>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              {/* /.sidebar-menu */}
            </nav>
          </div>
          {/* /.sidebar */}
        </aside>
      </div>

    )
  }
}
