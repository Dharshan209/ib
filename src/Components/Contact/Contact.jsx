import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate form submission
    setFormStatus({
      submitted: true,
      error: false,
      message: 'Thank you for your message! We will get back to you soon.'
    });
    
    // Reset form after successful submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      
      setFormStatus({
        submitted: false,
        error: false,
        message: ''
      });
    }, 5000);
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h2 className="contact-title">Contact Us</h2>
        <p className="contact-subtitle">
          Have questions or inquiries? We're here to help. Reach out to us using any of the methods below.
        </p>
      </div>

      <div className="contact-layout">
        <div className="contact-info-section">
          <div className="info-card">
            <div className="info-item">
              <span className="info-label">Address:</span>
              <div className="info-content">
                No. 14(51), First Floor, Brindhavan Street Extn,<br />
                West Mambalam, Chennai - 600033
              </div>
            </div>
            
            <div className="info-item">
              <span className="info-label">Phone:</span>
              <div className="info-content">
                <a href="tel:7373739309">7373739309</a> / <a href="tel:9566997865">9566997865</a><br />
                <a href="tel:04435949528">044-35949528</a>
              </div>
            </div>
            
            <div className="info-item">
              <span className="info-label">Email:</span>
              <div className="info-content">
                <a href="mailto:admin@indianbiologicals.com">contact@yourcompany.com</a>
              </div>
            </div>
            
            <div className="info-item">
              <span className="info-label">Hours:</span>
              <div className="info-content">
                Monday - Friday: 9:00 AM - 6:00 PM<br />
                Saturday: 9:00 AM - 2:00 PM<br />
                Sunday: Closed
              </div>
            </div>
          </div>
          
          <div className="map-container">
            <iframe
              title="Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31103.658353016267!2d80.2105136!3d13.0412781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266f751928135%3A0x9d47028931eb7a89!2sWest%20Mambalam%2C%20Chennai%2C%20Tamil%20Nadu%20600033!5e0!3m2!1sen!2sin!4v1713358906810!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        
        <div className="contact-form-section">
          <h3 className="form-title">Send Us a Message</h3>
          
          {formStatus.submitted && (
            <div className="form-message" style={{ 
              backgroundColor: formStatus.error ? '#FEE2E2' : '#ECFDF5',
              color: formStatus.error ? '#B91C1C' : '#065F46',
              padding: '12px 16px',
              borderRadius: '8px',
              marginBottom: '20px' 
            }}>
              {formStatus.message}
            </div>
          )}
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                placeholder="Your full name"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                placeholder="your@email.com"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone" className="form-label">Phone (Optional)</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="form-input"
                placeholder="Your phone number"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-input form-textarea"
                placeholder="How can we help you?"
                rows="5"
                required
              ></textarea>
            </div>
            
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;