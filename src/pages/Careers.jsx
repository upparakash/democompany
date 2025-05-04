import React, { useState } from 'react';
import './Careers.css';

export default function Careers() {
  const [showModal, setShowModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const jobOpenings = [
    {
      id: 1,
      title: 'Frontend Developer',
      location: 'Bangalore',
      description: 'Build responsive web interfaces using React, HTML, and CSS. Collaborate with UX/UI teams to deliver visually appealing and performant applications.'
    },
    {
      id: 2,
      title: 'Backend Developer',
      location: 'Hyderabad',
      description: 'Design and implement scalable backend services using Node.js, Express, and MongoDB. Ensure API security, performance, and reliability.'
    },
    {
      id: 3,
      title: 'Full Stack Developer',
      location: 'Remote',
      description: 'Work across both frontend and backend stacks to build full-featured web apps. Must be proficient in MERN or similar stacks.'
    },
    {
      id: 4,
      title: 'DevOps Engineer',
      location: 'Pune',
      description: 'Manage CI/CD pipelines, automate infrastructure using tools like Docker and Kubernetes, and monitor cloud environments.'
    },
    {
      id: 5,
      title: 'UI/UX Designer',
      location: 'Chennai',
      description: 'Create intuitive user interfaces and seamless user experiences. Proficiency in Figma or Adobe XD is preferred.'
    },
  ];

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedJob(null);
  };

  const handleResumeUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      alert(`Resume uploaded for ${selectedJob.title}: ${file.name}`);
      handleCloseModal();
    }
  };

  return (
    <div className="careers-container">
      <h2>Software Job Openings</h2>
      <ul className="job-list">
        {jobOpenings.map((job) => (
          <li key={job.id} className="job-card">
            <h3>{job.title}</h3>
            <p><strong>Location:</strong> {job.location}</p>
            <p className="job-description">{job.description}</p>
            <button onClick={() => handleApplyClick(job)}>Apply</button>
          </li>
        ))}
      </ul>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Apply for {selectedJob.title}</h3>
            <input type="file" accept=".pdf,.doc,.docx" onChange={handleResumeUpload} />
            <button onClick={handleCloseModal}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}
