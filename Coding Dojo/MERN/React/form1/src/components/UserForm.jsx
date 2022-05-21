import React, { useState } from "react";

function UserForm() {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  //   const lastNameChange = (e) => {
  //     setLastName(e.target.value);
  //   };
  //   const firstNameChange = (e) => {
  //     setFirstName(e.target.value);
  //   };
  //   const emailChange = (e) => {
  //     setEmail(e.target.value);
  //   };
  //   const passwordChange = (e) => {
  //     setPassword(e.target.value);
  //   };
  //   const confirmPasswordChange = (e) => {
  //     setConfirmPassword(e.target.value);
  //   };
  const validateNameField = (value) => { 
  return value.length < 2 ? "Must have at least least 2 letters":""
  }
  const formSubmit = (e) => {
    e.preventDefault();
    setLastNameError ( validateNameField (lastName) )
    setLastNameError ( validateNameField (firstName) )
    const data = {
      lastName: lastName,
      firstName: firstName,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };
    //todo finish submit
    console.log("DATA: ", data);
  };
  return (
    <div className="form-container">
      <form onSubmit={formSubmit}>
        <div class="header"><h1>First React Form</h1></div>
        <div className="input-container">
          <div>Last Name: </div>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="input-container">
          <div>First Name: </div>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="input-container">
          <div>Email: </div>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-container">
          <div>Password: </div>
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="input-container">
          <div>Confirm Password {" "}</div>
          <input
            type="text"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div class="butters">
          <button className= "btn btn-warning" >Submit</button>
        </div>
        <div className = "display">
          <div>Last Name: {lastName}</div>
          <div>First Name: {firstName}</div>
          <div>Email: {email}</div>
          <div>Password: {password}</div>
          <div>Confirm Password: {confirmPassword}</div>
        </div>
      </form>
    </div>
  );
}

export default UserForm;
