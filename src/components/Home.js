import React from "react";
import { Button, Table } from "react-bootstrap";
import Employees from "./Employees";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();

  const handleDelete = (id) => {
    var index = Employees.map((item) => {
      return item.id;
    }).indexOf(id);
    Employees.splice(index, 1);
    navigate("/");
  };

  const handleEdit = (id, name, age) => {
    localStorage.setItem("name", name);
    localStorage.setItem("age", age);
    localStorage.setItem("id", id);
  };
  return (
    <>
      <div style={{ margin: "10rem" }}>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Employees && Employees.length > 0
              ? Employees.map((item) => {
                  return (
                    <tr>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.age}</td>
                      <td>
                        <Link to={"/edit"}>
                          <Button
                            onClick={() =>
                              handleEdit(item.id, item.name, item.age)
                            }
                          >
                            Edit
                          </Button>
                        </Link>
                        &nbsp;
                        <Button
                          onClick={() => {
                            handleDelete(item.id);
                            alert(item.id + " is deleted");
                          }}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  );
                })
              : "No data is available"}
          </tbody>
        </Table>
        <br></br>
        <Link to="/create">
          <Button size="lg">Create</Button>
        </Link>
      </div>
    </>
  );
}

export default Home;
