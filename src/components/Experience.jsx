import React from "react";

const Experience = () => {
  return (
    <div className="container experience" id="experience">
      <div className="section-head">
        <span className="section-num">01</span>
        <h2 className="section-title-main">Experience</h2>
      </div>
      <div className="section-underline"></div>
      <div
        className="exp-card"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <div className="exp-header">
          <h2>React Native Developer</h2>
          <span className="exp-duration">Sep 2025 – Present</span>
        </div>
        <h4 style={{ color: "yellowgreen" }}>FlexiLoans, Pune</h4>
        <ul className="exp-points">
          <li>Built a React Native (Expo) mobile app for a digital lending platform on Android and iOS.</li>
          <li>Developed full loan journey — OTP login, KYC via DigiLocker/Aadhaar, document upload, NACH mandate setup.</li>
          <li>Built a dynamic journey flow driven entirely by backend API responses.</li>
          <li>Integrated Firebase, CleverTap, Mixpanel, AppsFlyer, and AppTrove via a single analytics layer.</li>
          <li>Used Zustand (18+ stores) and TanStack React Query for state and API data management.</li>
          <li>Integrated FinBox SDK with secure SALT-based authentication and root/jailbreak detection.</li>
          <li>Added English/Hindi language support using i18next.</li>
          <li>Used Expo EAS Build and expo-updates for OTA releases.</li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;