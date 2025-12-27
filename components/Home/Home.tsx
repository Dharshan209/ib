"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Calendar, 
  Users, 
  FlaskConical, 
  Stethoscope, 
  Venus, 
  Baby, 
  Leaf,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

const Home = () => {
  const stats = [
    { icon: Calendar, label: "13+ Years in Service", desc: "Over a decade of dedicated service to healthcare professionals." },
    { icon: Users, label: "500+ Customers", desc: "Our products reach healthcare facilities across the entire country." },
    { icon: FlaskConical, label: "35+ Years of Experience", desc: "Backed by decades of combined industry and scientific expertise." },
    { icon: Stethoscope, label: "Trusted by Doctors", desc: "Healthcare professionals across India rely on our quality products." }
  ];

  const categories = [
    { title: "Women's Health", icon: Venus, desc: "Comprehensive solutions for hormonal balance and wellness." },
    { icon: Baby, title: "Infertility", desc: "Advanced support for reproductive health and fertility." },
    { icon: Leaf, title: "Life Sciences", desc: "Innovative bioscience products and research solutions." }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-primary/20 z-10"></div>
          <Image 
            src="/doctor-home.svg" 
            alt="Healthcare Hero" 
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-20 pt-20 h-full flex flex-col justify-center">
          {/* Hero text removed as per user request */}
        </div>
      </section>

      {/* Stats/About Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">Why Indian Biologicals?</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6"></div>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
              We bridge the gap between scientific advancement and clinical application, providing trusted solutions for healthcare providers nationwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
                <div className="w-16 h-16 bg-slate-50 text-secondary flex items-center justify-center rounded-2xl mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <stat.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{stat.label}</h3>
                <p className="text-slate-500 leading-relaxed">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-extrabold text-primary mb-6 leading-tight">
                Specialized Care for Every <span className="text-secondary">Stage of Life</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Our portfolio is carefully curated to address the most pressing needs in modern healthcare, with a primary focus on women&apos;s well-being and reproductive health.
              </p>
              <div className="space-y-6">
                {categories.map((cat, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md shrink-0 border border-slate-100">
                      <cat.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary text-lg">{cat.title}</h4>
                      <p className="text-slate-500">{cat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="absolute -inset-4 bg-primary/5 rounded-full blur-3xl"></div>
              <Image 
                src="/IB-logo.svg" 
                alt="Healthcare Innovation" 
                width={500} 
                height={500}
                className="relative z-10 w-full max-w-md mx-auto grayscale opacity-10 drop-shadow-2xl"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-20">
                <div className="bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 max-w-xs">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <ShieldCheck className="w-10 h-10 text-primary" />
                  </div>
                  <div className="text-4xl font-black text-primary mb-1">100%</div>
                  <div className="text-slate-500 font-medium">Quality Assurance in every product we deliver</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full -ml-32 -mb-32"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8">
              Ready to partner with a trusted healthcare leader?
            </h2>
            <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
              Join 500+ doctors and healthcare facilities that rely on Indian Biologicals for superior medical solutions.
            </p>
            <Link href="/contact" className="inline-flex px-10 py-5 bg-secondary text-white rounded-full font-black text-xl hover:bg-white hover:text-primary transition-all shadow-xl hover:-translate-y-2 flex items-center gap-3 group mx-auto w-fit">
              Get in Touch Today
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;