import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class Login extends Component {

  constructor() {
    super();

    this.state = {
     
      employees : [
        
        {name: 'Luna', emailId:'luna@gmail.com', password:'123'}, 
        {name: 'Lily', emailId:'lily@gmail.com', password:'123'}, 
        {name: 'Kai', emailId:'kai@gmail.com', password:'123'}, 
        {name: 'Ibuki', emailId:'ibuki@gmail.com', password:'123'}, 
        {name: 'Deepika', emailId:'deepika@gmail.com', password:'123'}, 
        {name: 'Max', emailId:'max@gmail.com', password:'123'} 
      ]
      
    }

    this.emailId = React.createRef();
    this.password = React.createRef();
  }

  loginSubmit = () => {
  let emailId = this.emailId.current.value;
  let password = this.password.current.value;

  let employee = null;
  localStorage.setItem("emailId", emailId); 

  if (emailId === "Admin" && password === "Admin") {
    alert("Admin Login Success");
    console.log("Admin Authenticated Successfully");
    window.open('home', "_self");
    return;
  }

  this.state.employees.forEach((emp) => {
    if (emp.emailId === emailId && emp.password === password) {
      employee = emp;
    }
  });

  if (employee) {
    alert("Login Success From Employee ");
    console.log("Authenticated Successfully (Employee)");
    console.log(employee);
    window.open('home', "_self");
    return;
  }

  let storedUser = localStorage.getItem("user");
  if (storedUser) {
    let parsedUser = JSON.parse(storedUser);
    if (parsedUser.emailId === emailId && parsedUser.password === password) {
      alert("Login Success (From LocalStorage)");
      console.log("Authenticated Successfully (LocalStorage)");
      console.log(parsedUser);
      window.open('home', "_self");
      return;
    }
  }

  alert("Invalid Credentials");
  console.log("Invalid Credentials");
}


  render() {
    return (

<div
  className="container"
  style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
   minHeight: '80vh',
    overflow: 'hidden',
    backgroundColor: '#f0f4f8',
  }}
>
  <div
    style={{
      width: '350px',
      padding: '2rem',
      borderRadius: '12px',
      boxShadow: '0 6px 16px rgba(0, 0, 0, 0.1)',
      backgroundColor: 'white',
    }}
  >
    <h2 
            style={{ 
              textAlign: 'center', 
              marginBottom: '2rem',
              color: '#333',
              fontSize: '2rem',
              fontWeight: '700'
            }}
          >
            Login
          </h2>
    <div style={{ marginBottom: '1.25rem' }}>
      <label htmlFor="email" style={{ fontWeight: '600', color: '#555' }}>Email</label>
      <input
        type="text"
        ref={this.emailId}
        style={{
          width: '100%',
          padding: '0.6rem',
          borderRadius: '6px',
          border: '1px solid #ccc',
          fontSize: '0.95rem',
        }}
      />
    </div>

    <div style={{ marginBottom: '1.75rem' }}>
      <label htmlFor="password" style={{ fontWeight: '600', color: '#555' }}>Password</label>
      <input
        type="password"
        ref={this.password}
        style={{
          width: '100%',
          padding: '0.6rem',
          borderRadius: '6px',
          border: '1px solid #ccc',
          fontSize: '0.95rem',
        }}
      />
    </div>

    <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <button 
              onClick={this.loginSubmit} 
              style={buttonStyle}
            >
              Login
            </button>
          </div>
          <p style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.9rem', color: '#666' }}>
            Don't have an account? <NavLink to="/signup" style={{ color: '#007bff', textDecoration: 'none', fontWeight: 'bold' }}>Sign Up</NavLink>
          </p>
    
  </div>
  
</div>

    )
  }
}

const buttonStyle = {
  width: '100%',
  padding: '0.75rem 1.5rem',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '8px',
  fontSize: '1rem',
  fontWeight: '600',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease'
};