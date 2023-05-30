import React from "react";
import { Button, Table } from "react-bootstrap";
import Employees from "./Employees";
import {Link,useNavigate} from 'react-router-dom'

function Home() {
    let navigate = useNavigate();
    const handleDelete=(id)=>{
        var index = Employees.map((item)=>{
            return item.id;
        }).indexOf(id)
        Employees.splice(index,1);
        navigate('/')
    }
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
            {
                Employees && Employees.length > 0
                ?
                Employees.map((item)=>{
                    return(
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>
                                <Button onClick = {()=>alert(item.id)}>Edit</Button>
                                &nbsp;
                                <Button onClick = {()=>handleDelete(item.id)}>Delete</Button>
                            </td>
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
