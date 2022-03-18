import React from 'react';
import _ from 'lodash';


const Pagination = props => {

  const {pageSize, totalPages,onPageChange,currentPage} = props;

  
  const pageNumber = Math.ceil(totalPages / pageSize);

  const Pages = _.range(1, pageNumber+1);

  if(Pages.length === 0){
    return <h2>No states To Display</h2>
  };



  return <ul className = "pagination">
    {Pages.map(page => <li key = {page} className = {page === currentPage ? "page-item active" : "page-item"} >
      <a className = "page-link"
      onClick = {() => onPageChange(page)} >{page}</a>
    </li>)}
    
  </ul> 
};


export default Pagination;
