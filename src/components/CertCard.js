import React from "react";

function CertCard({ logo, title, description, link, organization }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="cert-card">
      <img src={logo} alt={organization} className="cert-logo" />
      <h3>{title}</h3>
      <p><strong>{organization}</strong></p>
      <p>{description}</p>
    </a>
  );
}

export default CertCard;
