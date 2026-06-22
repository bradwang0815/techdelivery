import { MdArrowOutward, MdCopyright, MdEmail, MdLocationOn } from "react-icons/md";
import "./styles/Contact.css";
import { config } from "../config";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useMemo } from "react";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const socialLinks = useMemo(
    () =>
      [
        { label: "Github", href: config.contact.github },
        { label: "Linkedin", href: config.contact.linkedin },
      ].filter((link) => link.href && link.href !== "#"),
    []
  );

  useEffect(() => {
    const contactTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".contact-section",
        start: "top 80%",
        end: "bottom center",
        toggleActions: "play none none none",
      },
    });

    contactTimeline
      .fromTo(
        ".contact-header",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      )
      .fromTo(
        ".contact-card",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: "power3.out" },
        "-=0.45"
      )
      .fromTo(
        ".contact-footer",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
        "-=0.3"
      );

    return () => {
      contactTimeline.kill();
    };
  }, []);

  return (
    <section className="contact-section section-container" id="contact">
      <div className="contact-container">
        <header className="contact-header">
          <p className="contact-eyebrow">{config.ui.contact.title}</p>
          <h2 className="contact-name">{config.developer.fullName}</h2>
          <p className="contact-subtitle">{config.ui.contact.subtitle}</p>
          <p className="contact-role">{config.developer.title}</p>
        </header>

        <div className="contact-grid">
          <article className="contact-card">
            <div className="contact-card-icon" aria-hidden="true">
              <MdEmail />
            </div>
            <div className="contact-card-content">
              <h3>{config.ui.contact.email}</h3>
              {config.contact.email ? (
                <a
                  href={`mailto:${config.contact.email}`}
                  className="contact-link"
                  data-cursor="disable"
                >
                  {config.contact.email}
                </a>
              ) : (
                <span className="contact-muted">—</span>
              )}
            </div>
          </article>

          <article className="contact-card">
            <div className="contact-card-icon" aria-hidden="true">
              <MdLocationOn />
            </div>
            <div className="contact-card-content">
              <h3>{config.ui.contact.location}</h3>
              <p className="contact-value">{config.social.location}</p>
            </div>
          </article>
        </div>

        {socialLinks.length > 0 && (
          <div className="contact-social">
            <h3>{config.ui.contact.social}</h3>
            <ul className="contact-social-list">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-link"
                    data-cursor="disable"
                  >
                    {link.label}
                    <MdArrowOutward />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        <footer className="contact-footer">
          <p className="contact-credit">
            {config.ui.contact.designedBy}{" "}
            <span>{config.developer.fullName}</span>
          </p>
          <p className="contact-copyright">
            <MdCopyright aria-hidden="true" />
            <span>{new Date().getFullYear()}</span>
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
