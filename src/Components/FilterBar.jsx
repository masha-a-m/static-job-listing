import React from 'react';
import './FilterBar.css'; // Importing FilterBar.css

const FilterBar = ({ filters, removeFilter, clearFilters }) => {
  return (
    <div className="filter-bar">
      <div className="filter-tags">
        {filters.map((filter, index) => (
          <div key={index} className="filter-tag">
            <span>{filter}</span>
            <button onClick={() => removeFilter(filter)} className="remove-btn">
              ×
            </button>
          </div>
        ))}
      </div>
      <button onClick={clearFilters} className="clear-btn">
        Clear
      </button>
    </div>
  );
};

export default FilterBar;