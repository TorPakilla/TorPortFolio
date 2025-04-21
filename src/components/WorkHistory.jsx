import React from "react";
import "./WorkHistory.css";

const workEntries = [
  {
    company: "Extend IT Resource Co., Ltd.",
    duration: "2024 – 2025",
    position: "Internship",
  },
  {
    company: "Your Next Company",
    duration: "2025 – 2026",
    position: "Junior Developer",
  },
];

export default function WorkHistory() {
  return (
    <div className="work-history-bar">
      {workEntries.map((e, i) => (
        <div key={i} className="work-history-entry">
          <strong>🏢 {e.company}</strong> – {e.position} ({e.duration})
        </div>
      ))}
    </div>
  );
}
