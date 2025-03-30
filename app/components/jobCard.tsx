import React from "react";
import Image from "next/image";

export interface JobCardProps {
  id: number;
  company: string;
  logo: string;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
}

const JobCard: React.FC<JobCardProps> = ({
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
}) => {
  return (
    <div
      className="job-card"
      style={{
        background: "var(--card-bg)",
        color: "var(--card-text)",
        border: "2px solid var(--border-color)",
      }}
    >

      <div className="title">
        <p className="position">{position}</p>
        <div>
        <Image
        className="logo"
        src={logo}
        alt={`${company} logo`}
        width={100} // Adjust based on your design
        height={100}
      />
      <p className="post-date">{postedAt}</p>
      </div>
      </div>

      <p>
        <b>Company:</b> {company}
      </p>
      <p>
        <b>Location:</b> {location}
      </p>
      <p className="role">
        <b>Role:</b> {role}
      </p>
      <p className="level">
        <b>Level:</b> {level}
      </p>
      <p className="contract">
        <b>Contract:</b> {contract}
      </p>

      <p className="languages">
        <b>Languages:</b> {languages.join(", ")}
      </p>
      {tools.length > 0 ? (
        <p className="tools">
          <b>Tools:</b> {tools.join(", ")}
        </p>
      ) : null}
    </div>
  );
};

export default JobCard;
