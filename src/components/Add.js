import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Employees from "./Employees";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";
function Add() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  let navigate = useNavigate();

  const handleSubmit = (e) =>{
    e.preventDefault();

    const ids = uuid();
    let uniqueId = ids.slice(0,8);

    let n = name;
    let a = age;
    
    Employees.push( {id: uniqueId, name: n, age:a});
    navigate('/')
  }
  return (
    <>
      <div>
        <Form className="d-grid gap-2" style={{ margin: "15rem" }}>
          <Form.Group className="mb-2" controlId="formName">
            <Form.Control
              type="text"
              placeHolder="Enter the name"
              required
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-2" controlId="formAge">
            <Form.Control
              type="text"
              placeHolder="Enter the age"
              required
              onChange={(e) => setAge(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Button onClick ={(e)=>handleSubmit(e)} type ="submit">Submit</Button>
        </Form>
      </div>
    </>
  );
}

export default Add;
