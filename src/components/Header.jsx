import { useState } from 'react';
import { addCompany } from '../services/CompanyServices';

const Header = ({ onAdd, onFilter }) => {
  const [company, setCompany] = useState({ name: '', contact: '', location: '', applied: false });
  const [filter, setFilter] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCompany({
      ...company,
      [name]: name === "applied" ? value === "true" : value, // Convert to boolean
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await addCompany(company);
      onAdd(response.data);
      setCompany({ name: '', contact: '', location: '', applied: false });
    } catch (error) {
      console.error('Error adding company:', error);
    }
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    onFilter(e.target.value);
  };

  return (
    <div className="w-full bg-gray-100 shadow-md rounded-md p-4 mb-4">
      <h1 className="font-semibold text-2xl text-gray-800 mb-4 text-center" >My Hitlist</h1>

      {/* Form for Adding Companies */}
      <form onSubmit={handleSubmit} className="flex flex-wrap gap-2">
        <input 
          type="text" 
          name="name" 
          placeholder="Company Name" 
          value={company.name} 
          onChange={handleChange} 
          className="w-full md:w-auto flex-1 rounded border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input 
          type="text" 
          name="contact" 
          placeholder="Contact Info" 
          value={company.contact} 
          onChange={handleChange} 
          className="w-full md:w-auto flex-1 rounded border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input 
          type="text" 
          name="location" 
          placeholder="Location" 
          value={company.location} 
          onChange={handleChange} 
          className="w-full md:w-auto flex-1 rounded border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select 
          name="applied" 
          value={company.applied} 
          onChange={handleChange} 
          className="w-full md:w-auto rounded border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value={false}>Not Applied</option>
          <option value={true}>Applied</option>
        </select>
        <button 
          type="submit" 
          className="bg-blue-500 text-black border-2 border-black px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add Company
        </button>
      </form>

      {/* Filter Input */}
      <input 
        type="text" 
        placeholder="Search Company Name" 
        value={filter} 
        onChange={handleFilterChange} 
        className="w-full md:w-auto rounded border px-4 py-2 mt-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default Header;
