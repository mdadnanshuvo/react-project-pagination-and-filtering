import _ from 'lodash';


export function Paginate (TotalEmployees, currentPage, pageSize){

  const startIndex = (currentPage - 1) * pageSize;

  return  _(TotalEmployees).slice(startIndex).take(pageSize).value();
}