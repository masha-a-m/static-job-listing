import React from "react";
import JobItem from './JobItem';
import './JobList.css'; // Import JobList.css


const JobList = ({ jobs, filters, addFilter }) => {
    //function to determine if a job matches all active filters
    const filterJobs = (job) => {
        if (filters.length === 0) return true; // no filters, show all jobs

        // combine all job's roles, level, languages, and tools into one array
        const jobTags = [
            job.role,
            job.level,
            ...job.languages,
            ...job.tools,
        ];

        //check if every filter is included in jobTags
        return filters.every((filter) => jobTags.includes(filter));
    };

    // filter the jobs based on active filters
    const filteredJobs = jobs.filter(filterJobs);

    return (
        <div className="job-list">
            {filteredJobs.map((job) => (
                <JobItem key={job.id} job={job} addFilter={addFilter} />
            ))}
        </div>
    );  
};

export default JobList;