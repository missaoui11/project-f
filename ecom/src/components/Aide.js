import React from 'react';
import './Aide.css'; 

function Aide() {
  return (
    <div className="aide-container">
      <h2 className="aide-title">Need Help?</h2>
      <p className="aide-description">
        Welcome to our help center! Here are some common topics to get you started:
      </p>
      <ul className="aide-topics">
        <li>📦 How to track your order</li>
        <li>🔒 Account management tips</li>
        <li>💳 Payment and refund policies</li>
        <li>📞 Contact customer support</li>
      </ul>
      <p className="aide-contact">
        Still have questions? Feel free to reach out to us at 
        <a href="mailto:support@example.com" className="aide-email"> support@example.com</a> 
        or call us at <span className="aide-phone">+1 234 567 890</span>.
      </p>
    </div>
  );
}

export default Aide;
