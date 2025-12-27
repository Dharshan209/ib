"use client";
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { MapPin, Phone, Mail, Send, AlertTriangle, CheckCircle2 } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormStatus {
  submitted: boolean;
  error: boolean;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<FormStatus>({
    submitted: false,
    error: false,
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus({
      submitted: true,
      error: false,
      message: 'Thank you! Your message has been sent successfully.'
    });
    
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', message: '' });
      setFormStatus({ submitted: false, error: false, message: '' });
    }, 5000);
  };

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-black text-primary mb-4">Connect With Us</h1>
          <div className="w-24 h-2 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Have questions about our products or services? Our team is here to provide the support you need.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-10">
            <div className="bg-primary rounded-[3rem] p-12 text-white shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 transition-transform duration-500 group-hover:scale-150"></div>
              
              <h2 className="text-3xl font-black mb-10">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary uppercase tracking-widest text-xs mb-1">Our Office</h4>
                    <p className="text-slate-200 leading-relaxed">
                      No. 14(51), First Floor, Brindhavan Street Extn,<br />
                      West Mambalam, Chennai - 600033
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary uppercase tracking-widest text-xs mb-1">Phone Numbers</h4>
                    <div className="space-y-1">
                      <p><a href="tel:7373739309" className="hover:text-secondary transition-colors">7373739309</a> / <a href="tel:9566997865" className="hover:text-secondary transition-colors">9566997865</a></p>
                      <p><a href="tel:04435949528" className="hover:text-secondary transition-colors">044-35949528</a></p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary uppercase tracking-widest text-xs mb-1">Email Us</h4>
                    <p><a href="mailto:admin@indianbiologicals.com" className="hover:text-secondary transition-colors">admin@indianbiologicals.com</a></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[3rem] overflow-hidden shadow-xl border-8 border-slate-50 aspect-video lg:aspect-square relative group">
              <iframe
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31103.658353016267!2d80.2105136!3d13.0412781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266f751928135%3A0x9d47028931eb7a89!2sWest%20Mambalam%2C%20Chennai%2C%20Tamil%20Nadu%20600033!5e0!3m2!1sen!2sin!4v1713358906810!5m2!1sen!2sin"
                className="absolute inset-0 w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 bg-slate-50 rounded-[3rem] p-10 md:p-16 border border-slate-100">
            <h3 className="text-3xl font-black text-primary mb-10">Send a Message</h3>
            
            {formStatus.submitted && (
              <div className={`mb-8 p-6 rounded-3xl animate-fade-in ${formStatus.error ? 'bg-red-50 text-red-700 border border-red-100' : 'bg-green-50 text-green-700 border border-green-100'}`}>
                <div className="flex items-center gap-3">
                  <span className="shrink-0">
                    {formStatus.error ? <AlertTriangle className="w-6 h-6" /> : <CheckCircle2 className="w-6 h-6" />}
                  </span>
                  <p className="font-bold">{formStatus.message}</p>
                </div>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-500 uppercase tracking-widest ml-1">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white border-2 border-slate-100 rounded-2xl px-6 py-4 outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all"
                    placeholder="Full Name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white border-2 border-slate-100 rounded-2xl px-6 py-4 outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all"
                    placeholder="name@email.com"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-500 uppercase tracking-widest ml-1">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-white border-2 border-slate-100 rounded-2xl px-6 py-4 outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all"
                  placeholder="+91-00000-00000"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-500 uppercase tracking-widest ml-1">Your Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-white border-2 border-slate-100 rounded-2xl px-6 py-4 outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all min-h-[150px] resize-none"
                  placeholder="How can we help you today?"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-primary text-white font-black text-lg py-5 rounded-2xl shadow-xl shadow-primary/20 hover:bg-primary-dark transition-all hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3 group"
              >
                Send Message
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;