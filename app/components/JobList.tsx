import React from "react";
import data from "./data";
import Card from "./jobCard";

const JobList = () => {
  const renderJob = data.map((job) => {
    return (
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
    );
  });

  return (
    <>
      <section className="job-list-grid">{renderJob}</section>
    </>
  );
};

export default JobList;
