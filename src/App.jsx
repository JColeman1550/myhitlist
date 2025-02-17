import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import CompanyList from './components/CompanyList';
import { getCompanies, deleteCompany } from './services/CompanyServices';

const App = () => {
  const [companies, setCompanies] = useState([]);
  const [filteredCompanies, setFilteredCompanies] = useState([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await getCompanies();
        console.log("Fetched companies:", response.data); 
        setCompanies(response.data);
        setFilteredCompanies(response.data);
      } catch (error) {
        console.error("Error fetching companies:", error);
      }
    };
    fetchCompanies();
  }, []);

  const handleAddCompany = (newCompany) => {
    setCompanies((prevCompanies) => {
      const updatedCompanies = [...prevCompanies, newCompany];
      setFilteredCompanies(updatedCompanies);
      return updatedCompanies;
    });
  };

  const handleDeleteCompany = async (id) => {
    try {
      await deleteCompany(id);
      setCompanies(companies.filter(company => company.id !== id));
      setFilteredCompanies(companies.filter(company => company.id !== id));
    } catch (error) {
      console.error('Error deleting company:', error);
    }
  };

  const handleFilterCompanies = (filter) => {
    const filtered = companies.filter((company) =>
      company.name.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredCompanies(filtered);
  };

  return (
    <div className="w-screen h-screen bg-white flex justify-center p-10">
      <main className="w-4/5 h-full bg-white rounded px-5 py-4">
        <Header onAdd={handleAddCompany} onFilter={handleFilterCompanies} />
        <CompanyList companies={filteredCompanies} onDelete={handleDeleteCompany} />
      </main>
    </div>
  );
};

export default App;