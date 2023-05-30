import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import Employees from "./Employees";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";

function Edit() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [id, setId] = useState("");

  const navigate = useNavigate();

  var index = Employees.map((item) => {
    return item.id;
  }).indexOf(id);

  const handleSubmit = (e) => {
    e.preventDefault();
    let a = Employees[index];
    a.name = name;
    a.age = age;

    navigate("/");
  };
  useEffect(() => {
    setName(localStorage.getItem("name"));
    setAge(localStorage.getItem("age"));
    setId(localStorage.getItem("id"));
  }, []);
  return (
    <>
      <div>
        <Form className="d-grid gap-2" style={{ margin: "15rem" }}>
          <Form.Group className="mb-2" controlId="formName">
            <Form.Control
              type="text"
              placeHolder="Enter the name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-2" controlId="formAge">
            <Form.Control
              type="text"
              placeHolder="Enter the age"
              required
              value={age}
              onChange={(e) => setAge(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Button onClick={(e) => handleSubmit(e)} type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}

export default Edit;
