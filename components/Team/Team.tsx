"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Linkedin, X, Mail } from 'lucide-react';

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
    image: '/Team/mohan.webp',
    bio: 'A visionary leader with decades of experience in wellness innovation and entrepreneurship. Mr. Mohan has been instrumental in shaping the strategic direction of Indian Biologicals, focusing on bringing international quality diagnostics to the Indian market.',
    linkedin: '#',
    expertise: ['Strategic Leadership', 'Business Innovation', 'Healthcare Entrepreneurship']
  },
  {
    name: 'M. Periaiah',
    role: 'Founder',
    image: '/Team/Periaiah.webp',
    bio: 'Co-founder with strong strategic foresight and commitment to health solutions. With a deep understanding of the healthcare ecosystem, Mr. Periaiah has driven the organization towards excellence in product development and market expansion.',
    linkedin: '#',
    expertise: ['Strategy', 'Project Management', 'Market Research']
  },
  {
    name: 'Ganesan P. M',
    role: 'Business Development Director',
    image: '/Team/ganesan.webp',
    bio: 'His innovations have consistently built trusted brands in Indian Biologicals. He has a passion for building powerful brands from scratch and possesses an innate ability to identify market gaps in Women\'s Health.',
    linkedin: '#',
    expertise: ['Brand Building', 'Market Strategy', 'Strategic Partnerships']
  },
  {
    name: 'Dr. S. Prabakaran MD',
    role: 'Chief Scientific Advisor',
    image: '/Team/prabakaran.webp',
    bio: 'He is a Medical Graduate. He did his Post Graduation in Transfusion Medicine from PGI Chandigarh. Dr. Prabakaran ensures that all our products meet the highest scientific standards and clinical relevance.',
    linkedin: '#',
    expertise: ['Transfusion Medicine', 'Clinical Research', 'Scientific Excellence']
  },
  {
    name: 'N. Ilangovan',
    role: 'Head – Plant Operations',
    image: '/Team/ilangovan.webp',
    bio: 'A multi-skilled Industrial expert and Lead with over 30 years of experience across INDIA with various therapy areas on Pharmaceutical manufacturing, Validation, GMP & Regulatory affairs.',
    linkedin: '#',
    expertise: ['Manufacturing', 'GMP Compliance', 'Operational Excellence']
  },
  {
    name: 'Mrs. Arul Priya',
    role: 'Finance & HR Manager',
    image: '/Team/arulpriya.webp',
    bio: 'She has more than 18 years of successful managerial experience in various companies with different working cultures. She manages the core organizational assets with a focus on sustainable growth and people development.',
    linkedin: '#',
    expertise: ['Financial Management', 'HR Strategy', 'Organizational Growth']
  },
  {
    name: 'T Venkatachalam',
    role: 'Product Development Manager',
    image: '/Team/Venkatachalan.webp',
    bio: 'T Venkatachalam is a well-regarded leader in the life sciences field, and he\'s currently the Product Development Manager at Indian Biologicals Private Limited. He excelled academically, being the District Topper in school and earning a University Gold Medal in his MSc in Chemistry. This mix of scholarly achievements and real-world experience enables him to tackle product innovation with a unique blend of mathematical skill and scientific knowledge. At Indian Biologicals, he leads the charge in turning complicated biological ideas into healthcare solutions that are ready for the market, keeping the company at the leading edge of the industry.',
    linkedin: '#',
    expertise: ['Product Innovation', 'Chemistry', 'Healthcare Solutions', 'Scientific Knowledge']
  },
  {
    name: 'Mrs. Yuvashree. N',
    role: 'Product Trainer',
    image: '/Team/yuvashri.webp',
    bio: 'Mrs. Yuvashree is a Product Trainer with proven expertise in product science, pharmacology, and clinical applications. She is a Bachelor of Pharmacy graduate and a Gold Medalist, demonstrating outstanding academic achievement and a strong foundation in pharmaceutical sciences. She specializes in delivering clear, structured, and evidence-based training on mechanism of action, clinical benefits, and safety profiles, enabling teams to communicate product information with confidence, accuracy, and regulatory compliance.',
    linkedin: '#',
    expertise: ['Product Science', 'Pharmacology', 'Clinical Applications', 'Regulatory Compliance']
  },
  {
    name: 'Dharshan Senthil',
    role: 'Chief Technical Officer',
    image: '/Team/Dharshan.webp',
    bio: 'An innovative and strategic technical professional with strong expertise in report management, data analysis, and high-impact digital presentation development. As Technical Head, he plays a vital role in ensuring accurate reporting, data integrity, and effective technical communication, thereby supporting informed management decisions and organizational excellence through structured execution and digital precision.',
    linkedin: '#',
    expertise: ['Report Management', 'Data Analysis', 'Digital Presentation']
  },
];

const founders = teamMembers.filter((m) => m.role === 'Founder');
const leadership = teamMembers.filter((m) => m.role !== 'Founder');

const Team = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const openModal = (member: TeamMember) => {
    setSelectedMember(member);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedMember(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="pt-10 pb-20 px-6 md:px-7 bg-paper min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* breadcrumb */}
        <div className="flex gap-2 items-center text-[13px] text-ink-2 mb-6">
          <Link href="/" className="text-green-ink">Home</Link>
          <span className="text-ink-3">/</span>
          <span className="text-ink">Team</span>
        </div>

        {/* intro */}
        <div className="font-mono text-xs tracking-[.14em] text-green-ink uppercase mb-3 reveal">Our people</div>
        <h1 className="font-semibold text-4xl md:text-[46px] leading-[1.06] tracking-[-0.03em] text-navy mb-4 max-w-[18ch] reveal" style={{ animationDelay: '60ms' }}>
          The people behind Indian Biologicals
        </h1>
        <p className="text-[17px] leading-relaxed text-ink-2 max-w-[58ch] mb-7 reveal" style={{ animationDelay: '120ms' }}>
          A leadership team spanning science, manufacturing, commercial and technology — leading with purpose to advance women&apos;s health across India.
        </p>
        <div className="flex gap-7 border-t border-line pt-5 mb-14 reveal" style={{ animationDelay: '180ms' }}>
          <div>
            <div className="font-grotesk font-bold text-2xl tracking-[-0.02em] text-ink">{teamMembers.length}</div>
            <div className="text-xs text-ink-2">Team members</div>
          </div>
          <div>
            <div className="font-grotesk font-bold text-2xl tracking-[-0.02em] text-ink">{founders.length}</div>
            <div className="text-xs text-ink-2">Founders</div>
          </div>
          <div>
            <div className="font-grotesk font-bold text-2xl tracking-[-0.02em] text-ink">35+</div>
            <div className="text-xs text-ink-2">Years combined expertise</div>
          </div>
        </div>

        {/* founders */}
        <div className="font-mono text-xs tracking-[.14em] text-green-ink uppercase mb-4 reveal">Founders</div>
        <div className="grid md:grid-cols-2 gap-[18px] mb-16">
          {founders.map((member, i) => (
            <button
              key={member.name}
              onClick={() => openModal(member)}
              className="reveal group relative text-left grid grid-cols-[auto_1fr] gap-5 items-center bg-gradient-to-br from-surface to-green-50 border border-line rounded-2xl shadow-[var(--e-2)] p-6 overflow-hidden hover:shadow-[var(--e-3)] hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: `${i * 90}ms` }}
            >
              <div className="absolute inset-0 grid-texture pointer-events-none"></div>
              <div className="relative w-28 h-28 md:w-32 md:h-32 shrink-0 rounded-xl overflow-hidden bg-surface border border-line shadow-sm">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="128px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="relative min-w-0">
                <span className="eyebrow mb-2.5">Founder</span>
                <h3 className="font-semibold text-[22px] tracking-[-0.02em] text-navy mb-2">{member.name}</h3>
                <p className="text-[14px] leading-relaxed text-ink-2 line-clamp-3 mb-3">{member.bio}</p>
                <span className="text-[13px] font-semibold text-green-ink group-hover:underline">View profile →</span>
              </div>
            </button>
          ))}
        </div>

        {/* leadership grid */}
        <div className="flex justify-between items-end flex-wrap gap-4 mb-6 reveal">
          <div>
            <div className="font-mono text-xs tracking-[.14em] text-green-ink uppercase mb-2.5">Leadership &amp; specialists</div>
            <h2 className="font-semibold text-3xl tracking-[-0.02em] text-ink m-0">Driving every function</h2>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[18px]">
          {leadership.map((member, i) => (
            <button
              key={member.name}
              onClick={() => openModal(member)}
              className="reveal reveal-scale group text-left bg-surface border border-line rounded-lg overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
              style={{ animationDelay: `${(i % 3) * 80}ms` }}
            >
              <div className="relative aspect-[4/3] bg-gradient-to-br from-white to-green-50 border-b border-line overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-4 flex flex-col flex-1">
                <div className="font-semibold text-[17px] tracking-[-0.01em] text-navy">{member.name}</div>
                <div className="font-mono text-[10.5px] tracking-[.1em] text-ink-3 uppercase mt-1">{member.role}</div>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {member.expertise.slice(0, 2).map((exp) => (
                    <span key={exp} className="text-[10.5px] font-semibold text-green-ink bg-green-50 border border-green-100 rounded-full px-2.5 py-1">
                      {exp}
                    </span>
                  ))}
                </div>
                <span className="mt-4 text-[13px] font-semibold text-green-ink group-hover:underline">View profile →</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Profile Modal */}
      {selectedMember && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <div className="absolute inset-0 bg-navy/70 backdrop-blur-md animate-fade-in" onClick={closeModal}></div>

          <div className="relative z-[110] bg-surface w-full max-w-3xl rounded-2xl shadow-[var(--e-4)] overflow-hidden flex flex-col md:flex-row max-h-[88vh] animate-scale-up">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-surface border border-line-strong flex items-center justify-center text-ink hover:bg-sunk transition-colors z-20"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="md:w-2/5 relative h-64 md:h-auto bg-gradient-to-br from-white to-green-50 border-b md:border-b-0 md:border-r border-line shrink-0">
              <Image
                src={selectedMember.image}
                alt={selectedMember.name}
                fill
                sizes="(min-width: 768px) 320px, 100vw"
                className="object-cover"
              />
            </div>

            <div className="md:w-3/5 p-7 md:p-9 overflow-y-auto">
              <span className="eyebrow mb-3">{selectedMember.role === 'Founder' ? 'Founder' : 'Team member'}</span>
              <h2 className="font-semibold text-[28px] tracking-[-0.025em] text-navy mb-1">{selectedMember.name}</h2>
              <p className="font-mono text-[11px] tracking-[.12em] text-ink-3 uppercase mb-6">{selectedMember.role}</p>

              <div className="font-mono text-[11px] tracking-[.1em] uppercase text-green-ink mb-2.5">Biography</div>
              <p className="text-[15px] leading-relaxed text-ink-2 mb-6">{selectedMember.bio}</p>

              <div className="font-mono text-[11px] tracking-[.1em] uppercase text-green-ink mb-3">Core expertise</div>
              <div className="flex flex-wrap gap-2 mb-8">
                {selectedMember.expertise.map((exp) => (
                  <span key={exp} className="text-[12px] font-semibold text-ink-2 bg-sunk border border-line rounded-full px-3 py-1.5">
                    {exp}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 flex-wrap">
                <a
                  href={selectedMember.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-semibold text-[14px] text-white bg-green-600 hover:bg-green-700 rounded-md px-5 py-2.5 transition-colors"
                >
                  <Linkedin className="w-4 h-4" /> Connect on LinkedIn
                </a>
                <a
                  href="mailto:admin@indianbiologicals.com"
                  className="inline-flex items-center gap-2 font-semibold text-[14px] text-green-ink bg-surface border border-line-strong hover:bg-green-50 hover:border-green-300 rounded-md px-5 py-2.5 transition-colors"
                >
                  <Mail className="w-4 h-4" /> Email
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Team;
