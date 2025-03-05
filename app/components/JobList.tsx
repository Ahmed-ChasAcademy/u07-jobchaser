'use client'
import React, { useState } from "react";
import data from "./data";
import Card from "./jobCard";

const JobList = () => {
  const [search, setSearch] = useState("");

  // Filter jobs based on search input
  const filteredJobs = data.filter((job) => {
    return (
      job.position.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase()) ||
      job.role.toLowerCase().includes(search.toLowerCase())
    );
  });

  const renderJob = filteredJobs.map((job) => (
    <Card
      key={job.id}
      id={job.id}
      company={job.company}
      logo={job.logo}
      position={job.position}
      role={job.role}
      level={job.level}
      postedAt={job.postedAt}
      tools={job.tools}
      languages={job.languages}
      location={job.location}
      contract={job.contract}
    />
  ));

  return (
    <>
      <div style={{ marginBottom: "20px", textAlign: "center" }}>
        <input
          type="text"
          placeholder="Search jobs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "10px",
            fontSize: "1rem",
            width: "100%",
            maxWidth: "400px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
      </div>
      <section className="job-list-grid">{renderJob}</section>
    </>
  );
};

export default JobList;
