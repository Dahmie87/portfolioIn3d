import React, { useState } from 'react';
import {  MessageCircle, Phone, Send, Twitter, Youtube } from 'lucide-react';

export const ContactOption1: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-5xl mx-auto py-16">
      <style>{`
        .option1-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 56px;
          align-items: start;
        }

        .option1-header h2 {
          font-size: 40px;
          font-weight: 600;
          letter-spacing: -0.02em;
          line-height: 1.1;
          margin-bottom: 18px;
          color: rgba(0, 0, 0, 0.92);
        }

        .option1-header p {
          font-size: 15px;
          color: rgba(0, 0, 0, 0.58);
          line-height: 1.75;
          margin-bottom: 34px;
        }

        .option1-contact-info {
          border-top: 1px solid rgba(0, 0, 0, 0.12);
          padding-top: 28px;
        }

        .info-item {
          margin-bottom: 24px;
        }

        .info-label {
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(0, 0, 0, 0.38);
          margin-bottom: 8px;
          font-weight: 600;
        }

        .info-value {
          font-size: 15px;
          color: rgba(0, 0, 0, 0.9);
          font-weight: 500;
        }

        .option1-form {
          border-top: 1px solid rgba(0, 0, 0, 0.12);
          padding-top: 28px;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-label {
          font-size: 13px;
          font-weight: 600;
          color: rgba(0, 0, 0, 0.9);
          display: block;
          margin-bottom: 8px;
        }

        .form-input,
        .form-textarea {
          width: 100%;
          padding: 12px 14px;
          border: 1px solid rgba(0, 0, 0, 0.12);
          border-radius: 10px;
          font-size: 14px;
          font-family: inherit;
          transition: all 0.25s ease;
          background: rgba(0, 0, 0, 0.01);
        }

        .form-input:focus,
        .form-textarea:focus {
          outline: none;
          border-color: rgba(0, 0, 0, 0.35);
          background: #fff;
          box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.06);
        }

        .form-textarea {
          resize: vertical;
          min-height: 130px;
        }

        .submit-btn {
          background: rgba(0, 0, 0, 0.92);
          color: #fff;
          border: none;
          padding: 12px 24px;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.25s ease;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
        }

        @media (max-width: 768px) {
          .option1-container {
            grid-template-columns: 1fr;
            gap: 36px;
          }

          .option1-header h2 {
            font-size: 32px;
          }
        }
      `}</style>

      <div className="option1-container">
        <div className="option1-header">
          <h2>Get In Touch</h2>
          <p>
            Have a project in mind or want to collaborate? Reach out and let&apos;s
            build something useful and elegant together.
          </p>

          <div className="option1-contact-info">
            <div className="info-item">
              <div className="info-label">Email</div>
              <div className="info-value">omotayodamilare07@gmail.com</div>
            </div>
            <div className="info-item">
              <div className="info-label">Location</div>
              <div className="info-value">Lagos, Nigeria</div>
            </div>
            <div className="info-item">
              <div className="info-label">Social</div>
              <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
                <a href="#" className="text-slate-500 hover:text-slate-900 transition" aria-label="GitHub">
                  <MessageCircle size={20} />
                </a>
                <a href="#" className="text-slate-500 hover:text-slate-900 transition" aria-label="LinkedIn">
                  <Phone size={20} />
                </a>
                <a href="#" className="text-slate-500 hover:text-slate-900 transition" aria-label="Twitter">
                  <Twitter size={23} />
                </a>
                 <a href="#" className="text-slate-500 hover:text-slate-900 transition" aria-label="Twitter">
                  <Youtube size={25} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="option1-form">
          <div className="form-group">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              className="form-textarea"
            />
          </div>

          <button type="button" className="submit-btn">
            Send Message <Send size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

const ContactSection: React.FC = () => {
  return (
    <div className="bg-white">
      <ContactOption1 />
    </div>
  );
};

export default ContactSection;
