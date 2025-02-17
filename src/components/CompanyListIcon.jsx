import React from 'react';
import { deleteCompany } from '../services/CompanyServices';

const CompanyListIcon = ({ company, onDelete }) => {
  const handleDelete = async () => {
    try {
      await deleteCompany(company.id);
      onDelete(company.id);
    } catch (error) {
      console.error('Error deleting company:', error);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden w-full h-full p-4 border-1 border-black">
      <div className="space-y-2 flex flex-col h-full">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-lg font-medium text-gray-800">{company.name}</h2>
            <p className="text-xs text-gray-500">{company.location}</p>
          </div>
          <span
            className={`px-2 py-0.5 rounded-full text-white text-xs font-medium ${
              company.applied ? 'bg-green-500' : 'bg-yellow-500'
            }`}
          >
            {company.applied ? 'Applied' : 'Not Applied'}
          </span>
        </div>

        {/* Contact Info */}
        <div className="space-y-1 flex-grow">
          <p className="text-sm text-gray-600">
            <strong>Contact:</strong> {company.contact}
          </p>
        </div>

        {/* Delete Button */}
        <div className="flex justify-end">
          <button
            onClick={handleDelete}
            className="bg-red-500 text-black text-sm px-4 py-2 rounded-lg border-1 border-black"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompanyListIcon;
