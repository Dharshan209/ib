"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Quote, Linkedin, X, ExternalLink } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin: string;
  expertise: string[];
}

const teamMembers: TeamMember[] = [
  {
    name: 'K.P. Mohan',
    role: 'Founder',
    image: '/Team/mohan.svg',
    bio: 'A visionary leader with decades of experience in wellness innovation and entrepreneurship. Mr. Mohan has been instrumental in shaping the strategic direction of Indian Biologicals, focusing on bringing international quality diagnostics to the Indian market.',
    linkedin: '#',
    expertise: ['Strategic Leadership', 'Business Innovation', 'Healthcare Entrepreneurship']
  },
  {
    name: 'M. Periaiah',
    role: 'Founder',
    image: '/Team/Periaiah.svg',
    bio: 'Co-founder with strong strategic foresight and commitment to health solutions. With a deep understanding of the healthcare ecosystem, Mr. Periaiah has driven the organization towards excellence in product development and market expansion.',
    linkedin: '#',
    expertise: ['Strategy', 'Project Management', 'Market Research']
  },
  {
    name: 'Ganesan P. M',
    role: 'Business Development Director',
    image: '/Team/ganesan.svg',
    bio: 'His innovations have consistently built trusted brands in Indian Biologicals. He has a passion for building powerful brands from scratch and possesses an innate ability to identify market gaps in Women\'s Health.',
    linkedin: '#',
    expertise: ['Brand Building', 'Market Strategy', 'Strategic Partnerships']
  },
  {
    name: 'Dr. S. Prabakaran MD',
    role: 'Chief Scientific Advisor',
    image: '/Team/prabakaran.svg',
    bio: 'He is a Medical Graduate. He did his Post Graduation in Transfusion Medicine from PGI Chandigarh. Dr. Prabakaran ensures that all our products meet the highest scientific standards and clinical relevance.',
    linkedin: '#',
    expertise: ['Transfusion Medicine', 'Clinical Research', 'Scientific Excellence']
  },
  {
    name: 'N. Ilangovan',
    role: 'Head – Plant Operations',
    image: '/Team/ilangovan.svg',
    bio: 'A multi-skilled Industrial expert and Lead with over 30 years of experience across INDIA with various therapy areas on Pharmaceutical manufacturing, Validation, GMP & Regulatory affairs.',
    linkedin: '#',
    expertise: ['Manufacturing', 'GMP Compliance', 'Operational Excellence']
  },
  {
    name: 'Mrs. Arul Priya',
    role: 'Finance & HR Manager',
    image: '/Team/arulpriya.svg',
    bio: 'She has more than 18 years of successful managerial experience in various companies with different working cultures. She manages the core organizational assets with a focus on sustainable growth and people development.',
    linkedin: '#',
    expertise: ['Financial Management', 'HR Strategy', 'Organizational Growth']
  },
  {
    name: 'T Venkatachalam',
    role: 'Product Development Manager',
    image: '/Team/Venkatachalan.svg',
    bio: 'T Venkatachalam is a well-regarded leader in the life sciences field, and he\'s currently the Product Development Manager at Indian Biologicals Private Limited. He excelled academically, being the District Topper in school and earning a University Gold Medal in his MSc in Chemistry. This mix of scholarly achievements and real-world experience enables him to tackle product innovation with a unique blend of mathematical skill and scientific knowledge. At Indian Biologicals, he leads the charge in turning complicated biological ideas into healthcare solutions that are ready for the market, keeping the company at the leading edge of the industry.',
    linkedin: '#',
  expertise: ['Product Innovation', 'Chemistry', 'Healthcare Solutions', 'Scientific Knowledge']
  },
  {
    name: 'N. Yuvashri',
    role: 'Clinical Study Startup Associate',
    image: '/Team/yuvashri.svg',
    bio: 'N. Yuvashri is a Clinical Study Startup Associate with extensive experience in clinical research and pharmacovigilance. A University Gold Medalist in B. Pharmacy, she specializes in site initiation, regulatory compliance, and clinical document handling. Her background includes significant contributions to clinical study startups at Ethos Clinical Research and Kairos R&D Solution, where she managed complex R&D projects and ensured adherence to ICH-GCP and FDA-IRB standards.',
    linkedin: '#',
    expertise: ['Clinical Research', 'Pharmacovigilance', 'Regulatory Compliance', 'Medical Writing', 'Clinical Trial Coordination']
  },
];

const Team = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  console.log("Rendering Team Members:", teamMembers.length, teamMembers.map(m => m.name));

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const openModal = (member: TeamMember) => {
    setSelectedMember(member);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedMember(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-black text-primary mb-4 flex items-center justify-center gap-4">
            Our Leadership Team
            <span className="inline-flex items-center justify-center px-4 py-1 text-2xl font-black bg-primary/5 text-primary/40 rounded-2xl border border-primary/10">
              {teamMembers.length}
            </span>
          </h1>
          <div className="w-24 h-2 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Leading with purpose, innovation, and scientific excellence to transform Indian healthcare.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {isLoading ? (
            Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="bg-slate-50 rounded-[2.5rem] p-8 h-80 shimmer"></div>
            ))
          ) : (
            teamMembers.map((member, index) => (
              <div 
                key={index} 
                onClick={() => openModal(member)}
                className="group bg-white rounded-[2.5rem] p-8 border border-slate-100 hover:border-primary/20 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,51,102,0.1)] hover:-translate-y-2 flex flex-col cursor-pointer relative overflow-hidden animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/2 rounded-bl-[100px] transform translate-x-10 -translate-y-10 group-hover:translate-x-5 group-hover:-translate-y-5 transition-transform duration-500"></div>

                <div className="flex items-center gap-6 mb-8 relative z-10">
                  <div className="relative w-24 h-24 rounded-2xl overflow-hidden bg-slate-50 shadow-sm border-2 border-white transition-all duration-500 group-hover:scale-105">
                    <Image 
                      src={member.image} 
                      alt={member.name} 
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-primary transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-secondary font-bold text-sm tracking-widest uppercase mb-2">
                      {member.role}
                    </p>
                  </div>
                </div>

                <div className="relative flex-1 z-10">
                  <Quote className="absolute -left-2 -top-2 w-8 h-8 text-primary/5 transition-colors" />
                  <p className="text-slate-600 leading-relaxed text-sm relative z-10 pl-2 line-clamp-3 italic">
                    {member.bio}
                  </p>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-slate-50 pt-6 relative z-10">
                  <span className="text-primary font-bold text-xs uppercase tracking-tighter group-hover:text-secondary transition-colors">
                    View Full Profile
                  </span>
                  <div className="flex gap-3">
                    <a 
                      href={member.linkedin} 
                      onClick={(e) => e.stopPropagation()}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all duration-300"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Profile Modal */}
      {selectedMember && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 animate-fade-in">
          <div 
            className="absolute inset-0 bg-primary/40 backdrop-blur-md"
            onClick={closeModal}
          ></div>
          
          <div className="bg-white w-full max-w-4xl rounded-[3rem] shadow-2xl relative z-[110] overflow-hidden flex flex-col md:flex-row animate-scale-up">
            <button 
              onClick={closeModal}
              className="absolute top-6 right-6 w-12 h-12 bg-slate-100 hover:bg-primary hover:text-white rounded-2xl flex items-center justify-center transition-all z-20 group"
            >
              <X className="w-6 h-6 group-hover:rotate-90 transition-transform" />
            </button>

            <div className="md:w-2/5 relative h-80 md:h-auto bg-slate-50">
              <Image 
                src={selectedMember.image} 
                alt={selectedMember.name} 
                fill
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent md:hidden"></div>
            </div>

            <div className="md:w-3/5 p-10 md:p-16 flex flex-col justify-center">
              <div className="mb-8">
                <span className="inline-block px-4 py-1 bg-secondary/10 text-secondary text-xs font-black uppercase tracking-widest rounded-full mb-4">
                  Team Member
                </span>
                <h2 className="text-4xl font-black text-primary mb-2">{selectedMember.name}</h2>
                <p className="text-xl font-bold text-slate-500 uppercase tracking-widest scale-y-90 origin-left">{selectedMember.role}</p>
              </div>

              <div className="space-y-6 flex-1">
                <div>
                  <h4 className="text-xs font-black text-primary uppercase tracking-widest mb-4 opacity-50 flex items-center gap-2">
                    Professional Biography
                    <div className="h-px bg-primary/10 flex-1"></div>
                  </h4>
                  <p className="text-slate-600 leading-relaxed text-lg italic">
                    {selectedMember.bio}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-black text-primary uppercase tracking-widest mb-4 opacity-50 flex items-center gap-2">
                    Core Expertise
                    <div className="h-px bg-primary/10 flex-1"></div>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedMember.expertise.map((exp, i) => (
                      <span key={i} className="px-5 py-2 bg-slate-50 border border-slate-100 rounded-xl text-sm font-bold text-primary/70">
                        {exp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-12 flex flex-wrap gap-4">
                <a 
                  href={selectedMember.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-primary text-white font-black py-4 px-8 rounded-2xl shadow-xl shadow-primary/20 hover:bg-slate-900 transition-all flex items-center justify-center gap-3 active:scale-95"
                >
                  <Linkedin className="w-6 h-6" />
                  Connect on LinkedIn
                </a>
                <button 
                  onClick={() => window.location.href = 'mailto:admin@indianbiologicals.com'}
                  className="w-16 h-16 border-2 border-primary/10 text-primary rounded-2xl flex items-center justify-center hover:bg-primary/5 transition-all"
                >
                  <ExternalLink className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Team;
