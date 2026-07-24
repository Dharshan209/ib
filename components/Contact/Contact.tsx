"use client";
import React, { useState, FormEvent } from 'react';
import Link from 'next/link';

const Contact = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="pt-10 pb-20 px-6 md:px-7 bg-paper min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-2 items-center text-[13px] text-ink-2 mb-6">
          <Link href="/" className="text-green-ink">Home</Link>
          <span className="text-ink-3">/</span>
          <span className="text-ink">Contact</span>
        </div>
        <div className="font-mono text-xs tracking-[.14em] text-green-ink uppercase mb-3 reveal">Get in touch</div>
        <h1 className="font-semibold text-4xl md:text-[42px] tracking-[-0.03em] text-navy mb-3 reveal" style={{ animationDelay: '60ms' }}>Contact Indian Biologicals</h1>
        <p className="text-[17px] text-ink-2 max-w-[56ch] mb-9 reveal" style={{ animationDelay: '120ms' }}>
          For product information, prescriber support or distribution enquiries. Our medical affairs team responds within two business days.
        </p>

        <div className="grid lg:grid-cols-[1.25fr_.75fr] gap-9 items-start">
          {/* form */}
          <div className="reveal reveal-left bg-surface border border-line rounded-lg shadow-[var(--e-2)] p-7">
            {!sent ? (
              <form onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-[18px]">
                  <div>
                    <label className="block text-[13px] font-semibold text-ink mb-1.5">Full name</label>
                    <input
                      placeholder="Dr. Anjali Rao"
                      required
                      className="w-full font-sans text-[15px] text-ink bg-surface border border-line-strong rounded-md px-3.5 py-2.5 focus:outline-none focus:border-green-400 focus:ring-[3px] focus:ring-green-400/30"
                    />
                  </div>
                  <div>
                    <label className="block text-[13px] font-semibold text-ink mb-1.5">Institution email</label>
                    <input
                      type="email"
                      placeholder="anjali@hospital.org"
                      required
                      className="w-full font-sans text-[15px] text-ink bg-surface border border-line-strong rounded-md px-3.5 py-2.5 focus:outline-none focus:border-green-400 focus:ring-[3px] focus:ring-green-400/30"
                    />
                  </div>
                  <div>
                    <label className="block text-[13px] font-semibold text-ink mb-1.5">Role</label>
                    <div className="relative">
                      <select className="w-full font-sans text-[15px] text-ink bg-surface border border-line-strong rounded-md py-2.5 pl-3.5 pr-8 appearance-none cursor-pointer">
                        <option>Clinician / prescriber</option>
                        <option>Distributor / trade partner</option>
                        <option>Patient / caregiver</option>
                        <option>Other</option>
                      </select>
                      <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-ink-3 font-mono pointer-events-none">▾</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[13px] font-semibold text-ink mb-1.5">Subject</label>
                    <div className="relative">
                      <select className="w-full font-sans text-[15px] text-ink bg-surface border border-line-strong rounded-md py-2.5 pl-3.5 pr-8 appearance-none cursor-pointer">
                        <option>Product information</option>
                        <option>Distribution enquiry</option>
                        <option>Medical / prescriber support</option>
                        <option>Adverse-event report</option>
                      </select>
                      <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-ink-3 font-mono pointer-events-none">▾</span>
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-[13px] font-semibold text-ink mb-1.5">Message</label>
                    <textarea
                      rows={4}
                      placeholder="How can we help?"
                      required
                      className="w-full font-sans text-[15px] text-ink bg-surface border border-line-strong rounded-md px-3.5 py-2.5 resize-y focus:outline-none focus:border-green-400 focus:ring-[3px] focus:ring-green-400/30"
                    ></textarea>
                  </div>
                </div>
                <div className="flex justify-between items-center flex-wrap gap-3 mt-5">
                  <span className="text-[12.5px] text-ink-3 max-w-[38ch]">By submitting you confirm the information is for professional use where applicable.</span>
                  <button
                    type="submit"
                    className="font-semibold text-[15px] text-white bg-green-600 hover:bg-green-700 rounded-md px-6 py-3 transition-colors"
                  >
                    Send enquiry
                  </button>
                </div>
              </form>
            ) : (
              <div className="flex gap-3.5 items-start p-[22px] bg-success-bg border border-[#CDE8B4] rounded-md">
                <span className="text-success font-bold text-xl">✓</span>
                <div>
                  <div className="font-semibold text-[17px] text-success mb-1">Enquiry received</div>
                  <div className="text-sm text-ink-2">Thank you — our medical affairs team will respond within two business days. (Demo form — no data is sent.)</div>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-3.5 font-semibold text-sm text-green-ink bg-surface border border-line-strong rounded-md px-4 py-2.5"
                  >
                    Send another
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* details */}
          <div className="flex flex-col gap-4">
            <div className="reveal reveal-right bg-surface border border-line rounded-lg p-[22px]" style={{ animationDelay: '80ms' }}>
              <div className="font-mono text-[11px] tracking-[.1em] uppercase text-green-ink mb-3">Our office</div>
              <div className="text-[14.5px] leading-relaxed text-ink-2">
                Indian Biologicals<br />
                No. 14(51), First Floor,<br />
                Brindhavan Street Extn,<br />
                West Mambalam, Chennai — 600033<br />
                Tamil Nadu, India
              </div>
            </div>
            <div className="reveal reveal-right bg-surface border border-line rounded-lg p-[22px]" style={{ animationDelay: '160ms' }}>
              <div className="font-mono text-[11px] tracking-[.1em] uppercase text-green-ink mb-3">Reach us</div>
              <div className="flex flex-col gap-2 text-[14.5px] text-ink-2">
                <span><span className="text-ink-3">Email · </span><a href="mailto:admin@indianbiologicals.com" className="text-green-ink hover:text-green-700">admin@indianbiologicals.com</a></span>
                <span><span className="text-ink-3">Phone · </span><a href="tel:7373739309" className="text-green-ink hover:text-green-700">73737 39309</a> / <a href="tel:9566997865" className="text-green-ink hover:text-green-700">95669 97865</a></span>
                <span><span className="text-ink-3">Landline · </span><a href="tel:04435949528" className="text-green-ink hover:text-green-700">044-3594 9528</a></span>
              </div>
            </div>
            <div className="reveal reveal-right aspect-[4/3] border border-line rounded-lg overflow-hidden shadow-sm" style={{ animationDelay: '240ms' }}>
              <iframe
                title="Indian Biologicals — West Mambalam, Chennai"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31103.658353016267!2d80.2105136!3d13.0412781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266f751928135%3A0x9d47028931eb7a89!2sWest%20Mambalam%2C%20Chennai%2C%20Tamil%20Nadu%20600033!5e0!3m2!1sen!2sin!4v1713358906810!5m2!1sen!2sin"
                className="w-full h-full border-0 block"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
