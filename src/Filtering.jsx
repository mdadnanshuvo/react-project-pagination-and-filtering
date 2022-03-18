import React from 'react';


const Filter = (props) => {

  const {Dept, onDeptChange, currDept} = props;

  

  

  return <ul className = "list-group"> 
  {Dept.map(d => <li key = {d.Department} className = {d === currDept?"list-group-item list-group-item-action active":"list-group-item list-group-item-action"}
  style = {{cursor:"pointer"}}
  onClick = {() => onDeptChange(d)}   >{d.Department}</li>)}
     </ul>

}
export default Filter;