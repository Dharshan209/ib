"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import './Team.css';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

const teamMembers: TeamMember[] = [
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
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="leadership-section">
      <h2 className="leadership-title">Leadership Team</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div
            className={`team-card ${activeIndex === index ? 'active' : ''}`}
            key={index}
            onClick={() => handleToggle(index)}
          >
            <div className="image-box">
              <Image 
                src={member.image} 
                alt={member.name} 
                width={200}
                height={200}
                className="team-photo"
                priority={index < 3}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                unoptimized={member.image.endsWith('.svg')}
              />
            </div>
            <h3 className="team-name">{member.name}</h3>
            <p className="team-role">{member.role}</p>
            <p className={`team-bio ${activeIndex === index ? 'active' : ''}`}>
              {member.bio}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
