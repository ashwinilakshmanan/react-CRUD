import React from "react";
import { Button, Table } from "react-bootstrap";
import Employees from "./Employees";

function Home() {
  return (
    <>
      <div style={{ margin: "10rem" }}>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {
                Employees && Employees.length > 0
                ?
                Employees.map((item)=>{
                    return(
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                        </tr>
                    )
                })
                :
                "No data is available"
            }
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default Home;
