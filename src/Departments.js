export const Departments = [
  {ID : "1234321",
  Department : "CSE"},

  {ID : "6782134",
  Department : "IT"},

  {ID : "3564232",
  Department : "BBA"}

];


export function getDepartments(){
  return Departments.filter(d => d);

}


