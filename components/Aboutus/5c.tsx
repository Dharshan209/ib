"use client";
import React from "react";
import {
  Building2,
  Heart,
  Award,
  HandHeart,
  Lightbulb
} from 'lucide-react';

const coreValues = [
  {
    name: "Culture",
    description: "Building an environment of excellence and innovation that fosters growth and achievement at every level.",
    icon: Building2
  },
  {
    name: "Compassion",
    description: "Treating everyone with dignity, care and respect, ensuring empathetic service in all our interactions.",
    icon: Heart
  },
  {
    name: "Competency",
    description: "Continuously improving our skills, knowledge and expertise to deliver the highest-quality solutions.",
    icon: Award
  },
  {
    name: "Caring",
    description: "Putting patients' needs at the centre of everything we do, with genuine concern for their wellbeing.",
    icon: HandHeart
  },
  {
    name: "Concept",
    description: "Innovating with purpose and vision, developing groundbreaking ideas to transform healthcare.",
    icon: Lightbulb
  }
];

const FiveC = () => {
  return (
    <div>
      <div className="font-mono text-xs tracking-[.14em] text-green-ink uppercase mb-3">What guides us</div>
      <h2 className="font-semibold text-[30px] tracking-[-0.02em] text-ink mb-2">Our core values — the 5Cs</h2>
      <p className="text-base text-ink-2 max-w-[60ch] mb-7">
        Five principles that guide our daily operations and long-term vision, ensuring we deliver exceptional healthcare with integrity and purpose.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {coreValues.map((value, index) => (
          <div key={index} className="bg-surface border border-line rounded-lg p-[22px]">
            <div className="w-11 h-11 bg-green-50 rounded-lg flex items-center justify-center mb-4 text-green-ink">
              <value.icon className="w-5 h-5" />
            </div>
            <div className="font-mono text-[11px] text-ink-3 mb-2">{`0${index + 1}`}</div>
            <div className="font-semibold text-lg text-navy mb-2">{value.name}</div>
            <div className="text-[13.5px] leading-relaxed text-ink-2">{value.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FiveC;
