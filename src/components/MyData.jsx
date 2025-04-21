import React from "react";
import "./MyDataRPG.css";
import profileImg from "../assets/profile.jpg";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaFacebook  } from "react-icons/fa";

export default function MyData() {
  return (
    <div className="rpg-layout">
      <div className="rpg-frame">
        <div className="rpg-header">PROFILE</div>
        <img src={profileImg} className="rpg-avatar" alt="avatar" />
        <div className="rpg-name">Totrakul Butthanu</div>
        <div className="rpg-role">Back End Developer</div>
        <a href="/Resume.pdf" download className="rpg-download-btn">
  <span className="icon">📄</span>
  <span className="text">Download Resume</span>
</a>


        <div className="rpg-stats-wrapper">
          <div className="rpg-stats">
            <div><strong>🎚️ Level:</strong> Junior</div>
            <div><strong>🎂 Age:</strong> 22</div>
            <div><strong>🧭 Experience:</strong> 4 Months</div>
            <div><strong>🛡️ Military :</strong> Exempted</div>
            <div><strong>🎓 Education:</strong> B.Sc. Information Science</div>
          </div>
        </div>

        <div className="rpg-section">
  <h3>📞 Contact</h3>
  <p><FaEnvelope /> totrakulbutthanu@gmail.com</p>
  <p><FaPhoneAlt /> 0957099267</p>
  <p>
    <FaFacebook />{" "}
    <a
      href="https://www.facebook.com/profile.php?id=100009928157618"
      target="_blank"
      rel="noopener noreferrer"
      className="rpg-link"
    >
      NaiTor NarKab
    </a>
  </p>
</div>

      </div>
    </div>
  );
}
