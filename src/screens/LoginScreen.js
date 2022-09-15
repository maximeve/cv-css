import React from "react";
import {useState} from 'react';
import './LoginScreen.css';

export default function LoginScreen() {
    const [companyState, setcompanyState] = useState(false)


    const onToggleCompanyHandler = () => {
        setcompanyState(!companyState)
    };

    const handleSubmit = (e) => {
      e.preventDefault()
        alert('Submitted')
        let info = {
          'company' : e.target[0].value,
          'name': e.target[1].value,
          'email': e.target[2].value,
          'password': e.target[3].value,
          'street': e.target[4].value,
          'streetnumber': e.target[5].value, 
          'country': e.target[6].value,
          'zip': e.target[7].value,
          'companyname': e.target[8].value

        }
        console.log(info)
    };

  return (
    <div className="login__Container">
      <div className="login__Container_left">
        <img src="./Home.png" alt="Login" className="login__Container_left_img"/>
      </div>
      <div className="login__Container_right">
      <div className="login__Card">
        <h1>Hello</h1>
        <p className="login__Card_intro">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <form className="login__Form" onSubmit={handleSubmit}>
          <label className="login__label">
            Name
            <input type="text" name="name" />
          </label>
          <div className="login__Form__wrapper">
          <label className="login__label">
            Email
            <input type="text" name="email" />
          </label>
          <label className="login__label">
            Password
            <input type="password" name="password" />
          </label>
          </div>
          {companyState === true ? <label className="login__label">
          <div className="login__Form__wrapper">
          <label className="login__label">
            Street
            <input type="text" name="street" />
          </label>
          <label className="login__label">
            Street number
            <input type="text" name="streetnumber" />
          </label>
          </div>
          <div>
          <label className="login__label">
            Country
            <input type="text" name="country" />
          </label>
          <label className="login__label">
            Zip
            <input type="text" name="zip" />
          </label>
          </div>
            Company
            <input type="text" name="company" />
          </label> : ''}
          <input type="submit" value="Register" className="loginScreen__submit"/>
        </form>
        <div className="login__switch">
        <p>Company</p>
        <label className="switch">
            <input type="checkbox" onChange={onToggleCompanyHandler}/>
            <span className="slider round"></span>
        </label>
        </div>
      </div>
      </div>
    </div>
  );
}
