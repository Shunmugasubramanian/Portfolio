import React from "react";
import "./Certifications.css";
import CertCard from "./CertCard";


const certifications = [
    {
      logo: "/images/hclimg.avif",
      title: "Internship – Full Stack Development",
      organization: "HCL Tech",
      description: "Worked on full-stack React js with deployment in cloud AWS (June 2025 – July 2025)",
      link: "https://drive.google.com/file/d/1R3ZoC3ZqtJlWAb_p4ukdVBsD27UyPAkh/view?usp=drive_link",
    },
    {
      logo: "/images/Oracle.jpg",
      title: "Database Programming with SQL",
      organization: "Oracle Academy",
      description: "Certified in SQL fundamentals",
      link: "https://drive.google.com/file/d/1vxDV4QriHUcEZUnpV5z0unY5R6H3kZYh/view?usp=sharing",
    },
    {
      logo: "/images/Meta.avif",
      title: "Introduction to Front-End Development",
      organization: "Meta (Coursera)",
      description: "Learned fundamentals of front-end technologies",
      link: "https://drive.google.com/file/d/1yDqgjO1eqMpXa0_63yGTAFYPESjIBZ_q/view?usp=sharing",
    },
    {
      logo: "images/mongo.png",
      title: "Introduction to MongoDB for Students",
      organization: "MongoDB University",
      description: "Covered CRUD, schema design, and queries",
      link: "https://drive.google.com/file/d/1yNjwinhVf7iaHq4sZ6HMhjqp7mTL35ob/view?usp=sharing",
    },
    {
      logo: "images/ibm.jpg",
      title: "Machine Learning with Python",
      organization: "Cognitive Class.ai (IBM)",
      description: "Hands-on machine learning with Python",
      link: "https://drive.google.com/file/d/1oPcxhP_eSHKoaH1BaQQDDHiExJxh_aFK/view?usp=sharing",
    },
    {
      logo: "images/toronto.jpg",
      title: "Learn to Program: The Fundamentals (Python)",
      organization: "University Of Toronto (Coursera)",
      description: "Learned Python basics and programming concepts",
      link: "https://drive.google.com/file/d/1y82l-PJPMZJEqYYMpP1XXxliC8NUvvHw/view?usp=sharing",
    },
    {
      logo: "images/scaler.jpg",
      title: "Learn Fundamentals of Operating System",
      organization: "Certification from Scaler",
      description: "Learned about Operating Systems",
      link: "https://drive.google.com/file/d/1yOfAGTZ7ivfEbtlBPxhSOvPmLVCmlBpm/view?usp=sharing",
    },
  ];
  
function Certifications() {

  return (
    <section id="certifications" className="certifications-section" data-aos="fade-up">
      <h2 className="certifications-title">Certifications & Achievements</h2>
      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <CertCard key={index} {...cert} />
        ))}

        {/* LeetCode Card */}
        <a
          href="https://leetcode.com/Shunmugasubramanian/"
          target="_blank"
          rel="noopener noreferrer"
          className="cert-card leetcode-card"
        >
          <img
            src="https://leetcard.jacoblin.cool/Shunmugasubramanian?theme=dark&font=Nunito&ext=contest"
            alt="LeetCode Stats"
            className="leetcode-img"
          />
          <h3>LeetCode Profile</h3>
          <p>Click to view full profile and problem stats</p>
        </a>
      </div>
    </section>
  );
}

export default Certifications;
