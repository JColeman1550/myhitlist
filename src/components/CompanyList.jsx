import React from 'react';
import CompanyListIcon from './CompanyListIcon';

const CompanyList = ({ companies, onDelete }) => {
  return (
    <div>
      {companies.map(company => (
        <CompanyListIcon key={company.id} company={company} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default CompanyList;
