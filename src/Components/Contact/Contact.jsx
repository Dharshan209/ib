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
    submitted: false, // Not directly used for message display logic anymore, but kept for state clarity
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Indicate submission start and disable button
    setFormStatus({ submitted: false, error: false, message: 'Submitting...' });

    try {
      // IMPORTANT: Replace 'YOUR_FORM_ID' with your actual Formspree form ID
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json' // Important for Formspree to return JSON
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setFormStatus({
          submitted: true, // Mark as submitted successfully
          error: false,
          message: 'Thank you for your message! We will get back to you soon.'
        });
        // Reset form fields
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
        // Optional: Clear the success message after a few seconds
        setTimeout(() => {
          setFormStatus({ submitted: false, error: false, message: '' });
        }, 7000); // Increased timeout for success message
      } else {
        // Try to parse error message from Formspree if the response is not OK
        const data = await response.json().catch(() => ({})); // Catch if response is not JSON
        const errorMessage = data.errors ? data.errors.map(err => err.message || err.error || 'Unknown error').join(', ') : 'Oops! There was a problem submitting your form.';
        setFormStatus({
          submitted: true, // Mark as submission attempted
          error: true,
          message: errorMessage
        });
      }
    } catch (error) {
      // Catch network errors or other issues with the fetch call
      setFormStatus({
        submitted: true, // Mark as submission attempted
        error: true,
        message: 'An unexpected error occurred. Please check your internet connection and try again.'
      });
    }
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
          {/* Contact info items and map remain the same */}
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
                <a href="mailto:admin@indianbiologicals.com">admin@indianbiologicals.com</a>
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
          
          {formStatus.message && (
            <div className="form-message" style={{
              backgroundColor: formStatus.error ? '#FEE2E2' : (formStatus.message === 'Submitting...' ? '#E0E7FF' : '#ECFDF5'),
              color: formStatus.error ? '#B91C1C' : (formStatus.message === 'Submitting...' ? '#3730A3' : '#065F46'),
              padding: '12px 16px',
              borderRadius: '8px',
              marginBottom: '20px',
              border: `1px solid ${formStatus.error ? '#FCA5A5' : (formStatus.message === 'Submitting...' ? '#A5B4FC' : '#A7F3D0')}`
            }}>
              {formStatus.message}
            </div>
          )}
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="form-input" placeholder="Your full name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="form-input" placeholder="your@email.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone" className="form-label">Phone (Optional)</label>
              <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="form-input" placeholder="Your phone number" />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} className="form-input form-textarea" placeholder="How can we help you?" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-button" disabled={formStatus.message === 'Submitting...'}>
              {formStatus.message === 'Submitting...' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;