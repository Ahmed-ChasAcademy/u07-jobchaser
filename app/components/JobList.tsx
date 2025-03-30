"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSearch } from "./store/jobSlice";
import { RootState } from "./store/store";
import Card from "./jobCard";

const JobList = () => {
  const dispatch = useDispatch();
  const search = useSelector((state: RootState) => state.jobs.search);
  const jobs = useSelector((state: RootState) => state.jobs.jobs);

 
  const filteredJobs = jobs.filter((job) =>
    [job.position, job.company, job.role].some((field) =>
      field.toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <>
      <div style={{ marginBottom: "20px", textAlign: "center" }}>
        <input
          type="text"
          placeholder="Search jobs..."
          value={search}
          onChange={(e) => dispatch(setSearch(e.target.value))}
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
      <section className="job-list-grid">
        {filteredJobs.map((job) => (
          <Card key={job.id} {...job} />
        ))}
      </section>
    </>
  );
};

export default JobList;
