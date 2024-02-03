import { useEffect, useState } from "react"
import { deleteEmployee, listEmployees } from "../services/EmployeeService"
import { useNavigate } from "react-router-dom"

const ListEmployeeComponent = () => {
  const [employees, setEmployees] = useState([])

  function getAllEmployees(){
    listEmployees().then((response) => {
      setEmployees(response.data);
    }).catch(error => {
      console.error(error);
    })
  }

  useEffect(() => {
    getAllEmployees();
  }, [])

  const navigator=useNavigate();
  function addNewEmployee(){
    navigator('/add-employee')
  }

  function updateEmployee(id){
    navigator(`/edit-employee/${id}`)
  }

  function removeEmployee(id){
    console.log(id);
    deleteEmployee(id).then(()=>{
      getAllEmployees();
      
    }).catch(error=>{
      console.error(error)
    })
  }

  return (
    <div className="container">
      <h2 className="text-center">List of Employees</h2>
      <button className="btn btn-primary mb-2" onClick={addNewEmployee}>Add Employee</button>
      <table className="table table-striped table-border">
        <thead>
          <tr>
            <th className="tbh"> Id</th>
            <th className="tbh"> First Name</th>
            <th className="tbh"> Last Name</th>
            <th className="tbh"> Email</th>
            <th className="tbh">Actions</th>
          </tr>
        </thead>
        <tbody className="tbh">
          {
            employees.map(employee =>
              <tr key={employee.id}>
                <td >{employee.id}</td>
                <td>{employee.firstName}</td> 
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td><button className="btn btn-info m-1" onClick={()=>updateEmployee(employee.id)}>Update</button>
                
                <button className="btn btn-danger" onClick={()=>removeEmployee(employee.id)}>Delete</button>
                </td>
                
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  )
}

export default ListEmployeeComponent