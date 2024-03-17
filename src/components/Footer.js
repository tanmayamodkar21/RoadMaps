import React from "react";
import { pageLinks, socialLinks } from "./Data";

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {pageLinks.map((link) => {
          const { id, herf, text } = link;
          return (
            <li key={id}>
              <a href={herf} className="footer-link">
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="footer-icons">
        {socialLinks.map((socialLink) => {
          const { icon, herf } = socialLink;
          return (
            <li>
              <a
                href={herf}
                target="_blank"
                rel="noreferrer"
                className="footer-icon"
              >
                <i className={icon}></i>
              </a>
            </li>
          );
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
