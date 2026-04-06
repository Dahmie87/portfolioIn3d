import { useState,useEffect } from "react";
import NavBar from "../components/navbar";
import { BlurReveal, BlurText } from "../components/blur";
import { Send } from "lucide-react";
import chessIcon from "../assets/social images/chess.png";
import instaIcon from "../assets/social images/insta.jfif";
import phoneIcon from "../assets/social images/phone.png";
import tiktokIcon from "../assets/social images/tiktok.png";
import whatsappIcon from "../assets/social images/whatsapp.png";
import youtubeIcon from "../assets/social images/youtube.png";

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

  .contact-form-submit:disabled {
    cursor: not-allowed;
    opacity: 0.7;
    transform: none;
    box-shadow: none;
  }

  .contact-form-status {
    margin-top: 12px;
    font-size: 13px;
    font-weight: 500;
  }

  .contact-form-status-success {
    color: rgb(22, 163, 74);
  }

  .contact-form-status-error {
    color: rgb(220, 38, 38);
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
    align-items: center;
  }

  .contact-social-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: transform 0.2s ease, opacity 0.2s ease;
  }

  .contact-social-link:hover {
    transform: translateY(-2px);
    opacity: 0.9;
  }

  .contact-social-frame {
    width: 36px;
    height: 36px;
    border: 1px solid rgba(0,0,0,0.12);
    border-radius: 10px;
    background: rgba(255,255,255,0.75);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .contact-social-icon {
    width: 70%;
    height: 70%;
    object-fit: contain;
    display: block;
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
  message: string;
}

export default function ContactPage() {


  useEffect(()=>{window.scrollTo(0,0)})

  const contactApiUrl =
    (import.meta.env.VITE_CONTACT_API_URL as string | undefined) ||
    "http://localhost:8080/api/v1/contact";

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setSubmitMessage("");

    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      message: formData.message.trim(),
    };

    try {
      const response = await fetch(contactApiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || `Request failed with status ${response.status}`);
      }

      setFormData({ name: "", email: "", message: "" });
      setSubmitStatus("success");
      setSubmitMessage("Message sent successfully.");
    } catch (error) {
      setSubmitStatus("error");
      setSubmitMessage(
        error instanceof Error && error.message
          ? error.message
          : "Failed to send message. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
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

                  <button type="submit" className="contact-form-submit" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : <>Send message<Send size={16} /></>}
                  </button>

                  {submitStatus !== "idle" && (
                    <p
                      className={`contact-form-status ${submitStatus === "success" ? "contact-form-status-success" : "contact-form-status-error"}`}
                      role="status"
                      aria-live="polite"
                    >
                      {submitMessage}
                    </p>
                  )}
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
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="contact-social-link" title="Instagram" aria-label="Instagram">
                      <span className="contact-social-frame">
                        <img src={instaIcon} alt="Instagram" className="contact-social-icon" />
                      </span>
                    </a>
                    <a href="https://wa.me" target="_blank" rel="noopener noreferrer" className="contact-social-link" title="WhatsApp" aria-label="WhatsApp">
                      <span className="contact-social-frame">
                        <img src={whatsappIcon} alt="WhatsApp" className="contact-social-icon" />
                      </span>
                    </a>
                    <a href="tel:+2340000000000" className="contact-social-link" title="Phone" aria-label="Phone">
                      <span className="contact-social-frame">
                        <img src={phoneIcon} alt="Phone" className="contact-social-icon" />
                      </span>
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="contact-social-link" title="YouTube" aria-label="YouTube">
                      <span className="contact-social-frame">
                        <img src={youtubeIcon} alt="YouTube" className="contact-social-icon" />
                      </span>
                    </a>
                    <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="contact-social-link" title="TikTok" aria-label="TikTok">
                      <span className="contact-social-frame">
                        <img src={tiktokIcon} alt="TikTok" className="contact-social-icon" />
                      </span>
                    </a>
                    <a href="https://chess.com" target="_blank" rel="noopener noreferrer" className="contact-social-link" title="Chess" aria-label="Chess">
                      <span className="contact-social-frame">
                        <img src={chessIcon} alt="Chess" className="contact-social-icon" />
                      </span>
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
