import React from "react";

export interface JobCard {
  id: number;
  company: string;
  logo: string;
  position: string;
  role: string;
  level: string;
  postedAt: String;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
}

const jobCard = ({
  id,
  company,
  logo,
  position,
  role,
  level,
  postedAt,
  contract,
  location,
  languages,
  tools,
}: JobCard) => {
  return ( 
    <div className="job-card" key={id}>
      <div className="title">
        <p className="position">{position}</p>
        <p className="post-date">{postedAt}</p>
      </div>
      <img className="logo" src={logo} alt={`${company}-logo`} />
      <p><b>Company:</b> {company}</p>
      <p><b>Location:</b> {location}</p>

      <p className="role">
        {" "}
        <b>Role: </b>
        {role}
      </p>
      <p className="level">
        <b>Level:</b> {level}
      </p>
      <p className="contract">
        <b>Contract:</b> {contract}
      </p>
      <p className="languages">
        <b>Languages:</b> {languages}
      </p>
      <p className="tools">
        <b>Tools:</b> {tools}
      </p>
      <button>Read More</button>
    </div>
    
    
  );
};

export default jobCard;
