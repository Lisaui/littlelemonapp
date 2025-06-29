// src/components/Footer.js
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        {/* Other footer sections like contact/address can go here if you want */}

        <div className="footer-section social-media">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <svg
              aria-label="Facebook"
              role="img"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#ffcc00"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22 12.07C22 6.48 17.52 2 12 2S2 6.48 2 12.07c0 5 3.66 9.13 8.44 9.95v-7.05h-2.54v-2.9h2.54v-2.2c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.25.2 2.25.2v2.5h-1.28c-1.26 0-1.66.78-1.66 1.58v1.8h2.83l-.45 2.9h-2.38v7.05C18.34 21.2 22 17.05 22 12.07z" />
            </svg>

            <svg
              aria-label="Instagram"
              role="img"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#ffcc00"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 2A3.75 3.75 0 004 7.75v8.5A3.75 3.75 0 007.75 20h8.5a3.75 3.75 0 003.75-3.75v-8.5A3.75 3.75 0 0016.25 4h-8.5zm8.9 1.7a1 1 0 110 2 1 1 0 010-2zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z" />
            </svg>

            <svg
              aria-label="Twitter"
              role="img"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#ffcc00"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22 5.8a8.6 8.6 0 01-2.5.7 4.3 4.3 0 001.9-2.4 8.6 8.6 0 01-2.7 1 4.3 4.3 0 00-7.4 3.9 12.3 12.3 0 01-8.9-4.5 4.3 4.3 0 001.3 5.7 4.3 4.3 0 01-2-.6v.06a4.3 4.3 0 003.5 4.2 4.3 4.3 0 01-1.9.07 4.3 4.3 0 004 3 8.6 8.6 0 01-5.3 1.8A8.8 8.8 0 012 18a12.1 12.1 0 006.6 1.9c7.9 0 12.3-6.5 12.3-12.3l-.01-.56A8.8 8.8 0 0022 5.8z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Little Lemon. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
