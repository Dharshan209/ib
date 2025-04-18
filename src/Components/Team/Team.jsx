import React, { useState, useEffect } from 'react';
import './Team.css';

const teamMembers = [
  {
    name: 'K.P. Mohan',
    role: 'Founder',
    image: '/Team/mohan.svg',
    bio: 'A visionary leader with decades of experience in wellness innovation and entrepreneurship.',
  },
  {
    name: 'M. Periaiah',
    role: 'Founder',
    image: '/Team/Periaiah.svg',
    bio: 'Co-founder with strong strategic foresight and commitment to health solutions.',
  },
  {
    name: 'Ganesan P. M',
    role: 'Business Development Director',
    image: '/Team/ganesan.svg',
    bio: 'His innovations have consistently built trusted brands in Indian Biologicals. He has a passion for building powerful brands from scratch.',
  },
  {
    name: 'Dr. S. Prabakaran MD',
    role: 'Chief Scientific Advisor',
    image: '/Team/prabakaran.svg',
    bio: 'He is a Medical Graduate. He did his Post Graduation in Transfusion Medicine from PGI Chandigarh.',
  },
  {
    name: 'Priyadarshini Manjunath',
    role: 'Consultant Nutritionist',
    image: '/Team/priyadarshini.svg',
    bio: 'She is Expertise on designing personalised meal plan to meet the need of each patient especially for Maternity women, PCOS & Childrens.',
  },
  {
    name: 'N. Ilangovan',
    role: 'Head – Plant Operations',
    image: '/Team/ilangovan.svg',
    bio: 'A multi-skilled Industrial expert and Lead over 30 years of experience across INDIA with various therapy area on Pharmaceutical manufacturing, Validation, GMP & Regulatory affairs.',
  },
  {
    name: 'Mrs. Arul Priya',
    role: 'Finance & HR Manager',
    image: '/Team/arulpriya.svg',
    bio: 'She has more than 18 years of successful managerial experience in various companies with different working cultures. (KPN enterprises, Sri Energy, and KMC Speciality Hospitals).',
  },
];

const Team = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [loadedImages, setLoadedImages] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // Preload team member images
  useEffect(() => {
    let mounted = true;
    const newLoadedImages = {};
    
    const imagePromises = teamMembers.map((member) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = member.image;
        img.onload = () => {
          if (mounted) {
            newLoadedImages[member.image] = true;
          }
          resolve();
        };
        img.onerror = () => {
          if (mounted) {
            newLoadedImages[member.image] = false;
          }
          resolve();
        };
      });
    });

    // Set loading state based on image loading
    Promise.all(imagePromises).then(() => {
      if (mounted) {
        setLoadedImages(newLoadedImages);
        setTimeout(() => setIsLoading(false), 300); // Small delay for smoother transition
      }
    });

    return () => {
      mounted = false;
    };
  }, []);

  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="leadership-section">
      <h2 className="leadership-title">Leadership Team</h2>
      <div className="team-grid">
        {isLoading ? (
          // Loading skeletons
          Array.from({ length: 7 }).map((_, index) => (
            <div className="team-card skeleton" key={`skeleton-${index}`}>
              <div className="image-box skeleton"></div>
              <div className="skeleton-text"></div>
              <div className="skeleton-text-small"></div>
            </div>
          ))
        ) : (
          teamMembers.map((member, index) => (
            <div
              className={`team-card ${activeIndex === index ? 'active' : ''}`}
              key={index}
              onClick={() => handleToggle(index)}
            >
              <div className="image-box">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className={`team-photo ${loadedImages[member.image] ? 'loaded' : ''}`}
                  loading="lazy" 
                />
              </div>
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p className={`team-bio ${activeIndex === index ? 'active' : ''}`}>
                {member.bio}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Team;
