import React, { Component } from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import pic1 from "../assests/Pickup_Illustration.png";
import pic2 from "../assests/ps.png";
import axios from 'axios';

import { FormErrors } from './FormErrors';

class landingbody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      formErrors: { name: "", email: "" },
      emailValid: false,
      nameValid: false,
      formValid: false,
    };
  }


  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
                  () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let nameValid = this.state.nameValid;

    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'name':
        nameValid = value.length >= 3;
        fieldValidationErrors.name = nameValid ? '': ' is too short';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    emailValid: emailValid,
                    nameValid: nameValid
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.nameValid});
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }

 

  render() {

  const PostData = async (e) => {
    e.preventDefault(); 
    const name = this.state.name; 
    const email = this.state.email; 
    console.log(name, email); 

    const res = await fetch('/register', {
      method: "POST", 
      headers: {
        "Content-Type": "application/json"
        
      },
      body: JSON.stringify({
       name, email
      })
    }); 
    const data = await res.json(); 
    if(data){
      window.alert("Registration Successful");
      console.log(data); 
    }
  }
    return (
      <div>
        <Row>
          <Col md={6} sm={12}>
              <div className="landingbody-maindiv">
                <div className="p1">
                  <p>vehicle maintainence from the comfort of your home</p>
                </div>
                <div className="p2">
                  <p>
                    Open auto soothes the hassle of maintaining your vehicle and
                    helps you deal with unexpected repairs worry free.{" "}
                  </p>
                  <br />
                </div>
                <Form method='POST'>
                    <div>
                    <div className="panel panel-default">
                        <FormErrors formErrors={this.state.formErrors} />
                    </div>
                <div className="inp1 inps">
                  <input
                  name="name"
                    className="inp-grp"
                    type="text"
                    placeholder="Enter your name"
                    value={this.state.name}
                    onChange={this.handleUserInput} 
                  />
                </div>
                <div className="inp2 inps">
                  <input
                  name="email"
                    className="inp-grp"
                    type="email"
                    placeholder="Enter your email"
                    value={this.state.email}
                    onChange={this.handleUserInput} 
                  />
                </div>
                <button className="inp-grp inp-btn" type="submit" disabled={!this.state.formValid} onClick={PostData}>
                  Submit
                </button>
                </div>
                </Form>
              </div>
            
          </Col>
          <Col md={6} sm={12}>
            <img className="img1" src={pic1} alt="" />
          </Col>
        </Row>
        <div className="landingpage-body2">
          <Row>
            <Col md={6} sm={12}>
              <img className="img1" src={pic2} alt="" />
            </Col>
            <Col md={6} sm={12}>
              <div className="landingbody-maindiv">
                <div className="p1">
                  <p>focused on time saving</p>
                </div>
                <div className="p2">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                  <br />
                </div>
                <a className="inp-grp inp-grp-a">Download The Mobile App</a>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
export default landingbody;
