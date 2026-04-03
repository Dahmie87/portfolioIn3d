import { useState,useEffect } from "react";
import NavBar from "../components/navbar";
import { BlurReveal, BlurText } from "../components/blur";
import { Send } from "lucide-react";

const styles = `
  .contact-root {
    font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  }
  
  .contact-container {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: start;
    padding: 80px 0;
  }

  @media (max-width: 768px) {
    .contact-container {
      grid-template-columns: 1fr;
      gap: 48px;
      padding: 48px 0;
    }
  }

  .contact-header {
    margin-bottom: 80px;
    text-align: center;
  }

  .contact-eyebrow {
    font-size: 11px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: rgba(0,0,0,0.35);
    margin-bottom: 20px;
    font-weight: 500;
    display: block;
  }

  .contact-title {
    font-size: clamp(32px, 4vw, 56px);
    font-weight: 500;
    letter-spacing: -0.03em;
    line-height: 1.1;
    color: rgba(0,0,0,0.9);
    margin-bottom: 16px;
  }

  .contact-subtitle {
    font-size: 15px;
    font-weight: 400;
    line-height: 1.75;
    color: rgba(0,0,0,0.55);
    max-width: 600px;
    margin: 0 auto;
  }

  /* Form Styles */
  .contact-form-group {
    margin-bottom: 24px;
  }

  .contact-form-label {
    display: block;
    font-size: 13px;
    font-weight: 500;
    color: rgba(0,0,0,0.7);
    margin-bottom: 8px;
    letter-spacing: -0.01em;
  }

  .contact-form-input,
  .contact-form-textarea {
    width: 100%;
    padding: 12px 16px;
    font-size: 14px;
    font-family: inherit;
    border: 1px solid rgba(0,0,0,0.12);
    border-radius: 10px;
    background: rgba(255,255,255,0.6);
    color: rgba(0,0,0,0.85);
    transition: border-color 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease;
    outline: none;
  }

  .contact-form-input::placeholder,
  .contact-form-textarea::placeholder {
    color: rgba(0,0,0,0.35);
  }

  .contact-form-input:focus,
  .contact-form-textarea:focus {
    border-color: rgba(0,0,0,0.28);
    background: rgba(255,255,255,0.9);
    box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  }

  .contact-form-textarea {
    resize: vertical;
    min-height: 120px;
  }

  .contact-form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }

  @media (max-width: 768px) {
    .contact-form-row {
      grid-template-columns: 1fr;
    }
  }

  .contact-form-submit {
    width: 100%;
    padding: 14px 28px;
    margin-top: 12px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background: rgba(0,0,0,0.88);
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: -0.01em;
    cursor: pointer;
    transition: all 0.2s ease;
    font-family: inherit;
  }

  .contact-form-submit:hover {
    background: rgba(0,0,0,1);
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  }

  .contact-form-submit:active {
    transform: translateY(0);
  }

  /* Info Section */
  .contact-info-section {
    display: flex;
    flex-direction: column;
  }

  .contact-info-block {
    margin-bottom: 48px;
  }

  .contact-info-label {
    font-size: 11px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: rgba(0,0,0,0.35);
    margin-bottom: 12px;
    font-weight: 500;
    display: block;
  }

  .contact-info-value {
    font-size: 16px;
    font-weight: 500;
    color: rgba(0,0,0,0.85);
    line-height: 1.6;
    word-break: break-all;
  }

  .contact-info-value a {
    color: rgba(0,0,0,0.85);
    text-decoration: none;
    border-bottom: 2px solid rgba(0,0,0,0.15);
    transition: border-color 0.2s ease;
  }

  .contact-info-value a:hover {
    border-bottom-color: rgba(0,0,0,0.4);
  }

  .contact-social-links {
    display: flex;
    gap: 16px;
    margin-top: 16px;
    flex-wrap: wrap;
  }

  .contact-social-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border: 1px solid rgba(0,0,0,0.12);
    border-radius: 10px;
    background: rgba(255,255,255,0.5);
    color: rgba(0,0,0,0.6);
    text-decoration: none;
    transition: all 0.2s ease;
    font-size: 16px;
  }

  .contact-social-link:hover {
    border-color: rgba(0,0,0,0.25);
    background: rgba(0,0,0,0.05);
    color: rgba(0,0,0,0.85);
  }

  .contact-availability {
    margin-top: 40px;
    padding: 20px;
    background: linear-gradient(135deg, rgba(16,185,129,0.08) 0%, rgba(16,185,129,0.03) 100%);
    border: 1px solid rgba(16,185,19,0.15);
    border-radius: 12px;
  }

  .contact-availability-label {
    font-size: 11px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: rgba(16,185,19,0.7);
    margin-bottom: 8px;
    font-weight: 500;
    display: block;
  }

  .contact-availability-text {
    font-size: 14px;
    color: rgba(16,195,19,0.85);
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .status-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: rgba(16,185,19,1);
    animation: pulse 2s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }
`;

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactPage() {


  useEffect(()=>{window.scrollTo(0,0)})

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link
    const mailtoLink = `mailto:omotayodamilare@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoLink;
    
    // Show success message
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="contact-root text-slate-900 min-h-screen">
      <style>{styles}</style>
      
      <div className="md:mx-10 my-2 bg-white rounded-4xl shadow-sm overflow-hidden md:overflow-visible md:rounded-4xl md:min-h-screen relative">
        <NavBar />

        <div className="px-6 md:px-8 py-16 md:py-20">
          {/* Header */}
          <BlurReveal delay={0.1} className="contact-header">
            <span className="contact-eyebrow">Get in touch</span>
            <BlurText
              tag="h1"
              text="Let's work together"
              baseDelay={0.2}
              stagger={0.06}
              className="contact-title"
            />
            <p className="contact-subtitle">
              Have a project in mind or want to discuss opportunities? I'd love to hear from you.
            </p>
          </BlurReveal>

          {/* Content Grid */}
          <BlurReveal delay={0.35}>
            <div className="contact-container">
              
              {/* Left: Contact Form */}
              <div>
                <form onSubmit={handleSubmit}>
                  <div className="contact-form-row">
                    <div className="contact-form-group">
                      <label className="contact-form-label">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="contact-form-input"
                        required
                      />
                    </div>

                    <div className="contact-form-group">
                      <label className="contact-form-label">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="contact-form-input"
                        required
                      />
                    </div>
                  </div>

                  <div className="contact-form-group">
                    <label className="contact-form-label">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is this about?"
                      className="contact-form-input"
                      required
                    />
                  </div>

                  <div className="contact-form-group">
                    <label className="contact-form-label">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me more about your project or inquiry..."
                      className="contact-form-textarea"
                      required
                    />
                  </div>

                  <button type="submit" className="contact-form-submit">
                    {submitted ? "Message sent! ✓" : <>Send message<Send size={16} /></>}
                  </button>
                </form>
              </div>

              {/* Right: Contact Info */}
              <div className="contact-info-section">
                
                <div className="contact-info-block">
                  <span className="contact-info-label">Email</span>
                  <div className="contact-info-value">
                    <a href="mailto:omotayodamilare@gmail.com">
                      omotayodamilare07@gmail.com
                    </a>
                  </div>
                </div>

                <div className="contact-info-block">
                  <span className="contact-info-label">Location</span>
                  <div className="contact-info-value">
                    Lagos, Nigeria
                  </div>
                </div>

                <div className="contact-info-block">
                  <span className="contact-info-label">Connect</span>
                  <div className="contact-social-links">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="contact-social-link" title="GitHub">
                      𝔾
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="contact-social-link" title="Twitter">
                      𝕏
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-social-link" title="LinkedIn">
                      in
                    </a>
                  </div>
                </div>

                <div className="contact-availability">
                  <span className="contact-availability-label">Availability</span>
                  <div className="contact-availability-text">
                    <span className="status-dot" />
                    Available for freelance work
                  </div>
                </div>
              </div>

            </div>
          </BlurReveal>
        </div>
      </div>
    </div>
  );
}
