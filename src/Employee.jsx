import React,{Component} from 'react';
import {getEmployee} from './EmployeeInfo.js';
import Pagination from './Pagination.jsx';
import {Paginate} from './Paginate.js';
import Filter from './Filtering.jsx';
import {Departments, getDepartments} from './Departments.js';

class Employee extends Component {
 
  state = {
    Employee: [],
    Departments : [],
    pageSize : 5,
    currentPage : 1,
    currentDept : "CSE"


  }

  componentDidMount () {
    const Department = [{Department :"All Depts"},...getDepartments()]
    this.setState({Employee: getEmployee(), Departments})
  }


  deleteButton = (d) => {
    const Employee = this.state.Employee.filter(e => e.Name !== d.Name)

    this.setState({Employee})
  }

  pageChange = page => {
    this.setState({currentPage : page})
  }
  DeptChange = d => {
    this.setState({currentDept:d, currentPage :1})
  }

  render (){
     
    const { pageSize, currentPage,Employee:AllEmployees,currentDept} = this.state;

    const Filtereddept = currentDept && currentDept.Department ? AllEmployees.filter(f => f.Department === currentDept.Department) : AllEmployees
    
    const Employee = Paginate(Filtereddept,currentPage,pageSize)

    
   
    
   
    return <>
 <h2 className ="text-center">Showing the state of {Filtereddept.length} Employees</h2>
      
    

    <div className = "row">

      <div className = "col-2"><Filter
                  Dept = {Departments}
                  onDeptChange = {this.DeptChange}
                  currDept = {currentDept}     /></div>

      <div className = "col" >
        <table className = "table">
          <thead>
            <tr>
              <th>Name</th>
              <th>ID</th>
               <th>Department</th>
              <th>Salary</th>
              <th>Performance Rate</th>
            </tr>
          </thead>
          <tbody>
            {Employee.map(e =>
             <tr key = {e.Name} className = "text-center">
             <td>{e.Name}</td>
             <td>{e.ID}</td>
             <td>{e.Department}</td>
             <td>{e.Salary}</td>
             <td>{e.Performance}</td>
             <td><button className = "btn btn-sm btn-danger" 
             onClick = {() => this.deleteButton(e)}>Delete </button></td>
           </tr> )}
            
          </tbody>
        </table>
        <Pagination
            totalPages = {Filtereddept.length}
            pageSize = {pageSize}
            onPageChange = {this.pageChange}
            currentPage = {currentPage}
            />
        
         </div>
      </div>
      
      

    </>
  }
}


export default  Employee;