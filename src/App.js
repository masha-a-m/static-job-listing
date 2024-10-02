import React, { useState, useEffect } from 'react';
// import Home from './Pages/Home';
import Header from './Components/Header';
import JobList from './Components/JobList';
import FilterBar from './Components/FilterBar';
import jobsData from './data/jobs.json'; // Importing the JSON data
import './App.css';


function App() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([]); // State to hold active filters

  useEffect(() => {
    // Initialize jobs from the imported JSON data
    setJobs(jobsData);
  }, []);

  // Function to add a filter
  const addFilter = (filter) => {
    if (!filters.includes(filter)) {
      setFilters([...filters, filter]);
    }
  };

  // Function to remove a filter
  const removeFilter = (filterToRemove) => {
    setFilters(filters.filter((filter) => filter !== filterToRemove));
  };

  // Function to clear all filters
  const clearFilters = () => {
    setFilters([]);
  };

  return (    
    <div className='App bg-bg-body'>
      <Header/>

      <div className=" md:w-9/12 md:flex md:flex-col gap-x-2 mt-20 mx-auto mb-20">
        {filters.length > 0 && (
          <FilterBar
            filters={filters}
            removeFilter={removeFilter}
            clearFilters={clearFilters}
          />
        )}
     
        <JobList jobs={jobs} filters={filters} addFilter={addFilter} />
      </div>
    </div>
  );
}

export default App;
