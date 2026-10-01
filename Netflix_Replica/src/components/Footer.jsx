import { useState } from "react";

function Footer() {
  return (
    <section className="footer">
      <div className="footer-all">
        <div className="footer-one">
          <ul>
            <li>FAQ</li>
            <li>Media Center</li>
            <li>Ways to Watch</li>
            <li>Cookie Preferences</li>
            <li>Speed Test</li>
          </ul>
        </div>

        <div className="footer-two">
          <ul>
            <li>Help Center</li>
            <li>Jobs</li>
            <li>Cookie Preferences</li>
            <li>Legal Notices</li>
          </ul>
        </div>

        <div className="footer-three">
          <ul>
            <li>Account</li>
            <li>Ways to Watch</li>
            <li>Corporate Information</li>
            <li>Only on Netflix</li>
          </ul>
        </div>
      </div>

      <img src="/images/Netflix_logo.svg" alt="logo" />
    </section>
  );
}

export default Footer;
