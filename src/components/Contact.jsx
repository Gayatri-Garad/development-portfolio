// import React from "react";
// import { FaInstagram } from "react-icons/fa";
// import { CiFacebook } from "react-icons/ci";
// import { CiLinkedin } from "react-icons/ci";
// import { FaSquareXTwitter } from "react-icons/fa6";
// import { FaGithubSquare } from "react-icons/fa";
// import { SiGmail } from "react-icons/si";

// const Contact = () => {
//   return (
//     <>
//       <div className="container contact" id="contact">
//         <h1>CONTACT ME</h1>
//         <div
//           className="contact-icon"
//           data-aos="zoom-in-up"
//           data-aos-duration="1000"
//         >
//           <a href="https://www.google.com" target="_blank" className="items">
//             <FaInstagram className="icons" />
//           </a>
//           <a href="https://www.google.com" target="_blank" className="items">
//             <CiFacebook className="icons" />
//           </a>
//           <a href="https://www.google.com" target="_blank" className="items">
//             <CiLinkedin className="icons" />
//           </a>
//           <a href="https://www.google.com" target="_blank" className="items">
//             <FaSquareXTwitter className="icons" />
//           </a>
//           <a
//             href="https://github.com/Gayatri-Garad/development-portfolio.git"
//             target="_blank"
//             className="items"
//           >
//             <FaGithubSquare className="icons" />
//           </a>
//           <a
//             href="mailto:garadgaytri09@gmail.com?subject=Hello%20Gayatri&body=Hi%20Gayatri,%0A%0AI%20want%20to%20connect%20with%20you."
//             target="_blank"
//             className="items"
//           >
//             <SiGmail className="icons" />
//           </a>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Contact;


import React, { useState } from "react";
import { FaGithubSquare, FaPhoneAlt } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyPhone = () => {
    navigator.clipboard.writeText("+91 9145305128").catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section id="contact" data-aos="zoom-in-up" data-aos-duration="1000">
      <div className="contact-card">
        <div className="contact-title">Let's build something together</div>
        <div className="contact-sub">Open to React Native and React opportunities</div>

        <div className="contact-details">
          <a href="tel:+919145305128" className="contact-detail-item">
            <FaPhoneAlt style={{ fontSize: 14 }} />
            +91 9145305128
          </a>
          <a
            href="mailto:garadgaytri09@gmail.com?subject=Hello%20Gayatri&body=Hi%20Gayatri,%0A%0AI%20want%20to%20connect%20with%20you."
            className="contact-detail-item"
          >
            <SiGmail style={{ fontSize: 15 }} />
            garadgaytri09@gmail.com
          </a>
        </div>

        <div className="contact-icons">
          <a
            href="mailto:garadgaytri09@gmail.com?subject=Hello%20Gayatri&body=Hi%20Gayatri,%0A%0AI%20want%20to%20connect%20with%20you."
            target="_blank"
            rel="noreferrer"
            className="contact-icon-btn"
            title="Email"
          >
            <SiGmail style={{ fontSize: 19 }} />
          </a>
          <a
            href="https://github.com/Gayatri-Garad/development-portfolio.git"
            target="_blank"
            rel="noreferrer"
            className="contact-icon-btn"
            title="GitHub"
          >
            <FaGithubSquare style={{ fontSize: 20 }} />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="contact-icon-btn"
            title="LinkedIn"
          >
            <CiLinkedin style={{ fontSize: 22 }} />
          </a>
          <button className="contact-icon-btn" onClick={copyPhone} title="Copy phone number">
            <FaPhoneAlt style={{ fontSize: 17 }} />
            <span className={`copy-tip ${copied ? "show" : ""}`}>Copied!</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;