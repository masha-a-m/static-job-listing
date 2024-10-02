import React from "react";
import './JobItem.css'; // Importing JobItem.css
const JobItem = ({ job, addFilter }) => {
    const {
        company,
        logo,
        new: isNew,
        featured,
        position,
        role, 
        level, 
        postedAt,
        contract,
        location,
        languages,
        tools,
    } = job;

    //combine all tags that can be clicked
    const jobTags = [role, level, ...languages, ...tools];

    return (
        <div className={`job-item ${featured ? 'featured' : ''}`}>
        <img src={logo} alt={`${company} logo`} className="company-logo" />
        <div className="job-details">
            <div className="company-info">
            <span className="company-name">{company}</span>
            {isNew && <span className="badge new">NEW!</span>}
            {featured && <span className="badge featured">FEATURED</span>}
            </div>
        <h2 className="position">{position}</h2>
        <div className="job-meta">
            <span className="posted-time">{postedAt}</span>
            <span className="dot">•</span>
            <span className="contract-type">{contract}</span>
            <span className="dot">•</span>
            <span className="job-location">{location}</span>
        </div>
        </div>
        <div className="job-tags">
            {jobTags.map((tag, index) => (
               <span
                key={index}
                className="tag"
                onClick={() => addFilter(tag)}
                >
                {tag}
                </span>
            ))}
        </div>
        </div>
    );
};

export default JobItem;