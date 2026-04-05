import React, { useState } from 'react';
import { Send } from 'lucide-react';
import chessIcon from '../assets/social images/chess.png';
import instaIcon from '../assets/social images/insta.jfif';
import phoneIcon from '../assets/social images/phone.png';
import tiktokIcon from '../assets/social images/tiktok.png';
import whatsappIcon from '../assets/social images/whatsapp.png';
import youtubeIcon from '../assets/social images/youtube.png';

export const ContactOption1: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const contactApiUrl = import.meta.env.VITE_CONTACT_API_URL as string | undefined;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!contactApiUrl) {
      setSubmitStatus('error');
      setSubmitMessage('Contact endpoint is not configured. Set VITE_CONTACT_API_URL.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setSubmitMessage('');

    try {
      const response = await fetch(contactApiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      setSubmitStatus('success');
      setSubmitMessage('Message sent successfully.');
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setSubmitStatus('error');
      setSubmitMessage('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
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

        .submit-btn:disabled {
          cursor: not-allowed;
          opacity: 0.7;
          transform: none;
          box-shadow: none;
        }

        .form-status {
          margin-top: 12px;
          font-size: 13px;
          font-weight: 500;
        }

        .form-status-success {
          color: rgb(22, 163, 74);
        }

        .form-status-error {
          color: rgb(220, 38, 38);
        }

        .social-links {
          display: flex;
          gap: 12px;
          margin-top: 8px;
          flex-wrap: wrap;
          align-items: center;
        }

        .social-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: transform 0.2s ease, opacity 0.2s ease;
        }

        .social-link:hover {
          transform: translateY(-2px);
          opacity: 0.9;
        }

        .social-frame {
          width: 36px;
          height: 36px;
          border: 1px solid rgba(0, 0, 0, 0.12);
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.75);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .social-icon {
          width: 70%;
          height: 70%;
          object-fit: contain;
          display: block;
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
              <div className="social-links">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram" title="Instagram">
                  <span className="social-frame">
                    <img src={instaIcon} alt="Instagram" className="social-icon" />
                  </span>
                </a>
                <a href="https://wa.me" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="WhatsApp" title="WhatsApp">
                  <span className="social-frame">
                    <img src={whatsappIcon} alt="WhatsApp" className="social-icon" />
                  </span>
                </a>
                <a href="tel:+2340000000000" className="social-link" aria-label="Phone" title="Phone">
                  <span className="social-frame">
                    <img src={phoneIcon} alt="Phone" className="social-icon" />
                  </span>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="YouTube" title="YouTube">
                  <span className="social-frame">
                    <img src={youtubeIcon} alt="YouTube" className="social-icon" />
                  </span>
                </a>
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="TikTok" title="TikTok">
                  <span className="social-frame">
                    <img src={tiktokIcon} alt="TikTok" className="social-icon" />
                  </span>
                </a>
                <a href="https://chess.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Chess" title="Chess">
                  <span className="social-frame">
                    <img src={chessIcon} alt="Chess" className="social-icon" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="option1-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="form-input"
                required
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
                required
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
                required
              />
            </div>

            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={16} />
            </button>

            {submitStatus !== 'idle' && (
              <p
                className={`form-status ${submitStatus === 'success' ? 'form-status-success' : 'form-status-error'}`}
                role="status"
                aria-live="polite"
              >
                {submitMessage}
              </p>
            )}
          </form>
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
