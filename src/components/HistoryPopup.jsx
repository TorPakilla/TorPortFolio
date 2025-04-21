import React from 'react';
import './HistoryPopup.css';

export default function HistoryPopup({ title, items, onSelect, onClose }) {
  return (
    <div className="history-popup-overlay" onClick={onClose}>
      <div className="history-popup-content" onClick={e => e.stopPropagation()}>
        <div className="popup-header">
          <span>{title}</span>
          <button className="popup-close-btn" onClick={onClose}>×</button>
        </div>
        <div className="popup-list">
          {items.map(({ id, title: itemTitle, date }) => (
            <div key={id} className="popup-item" onClick={() => onSelect(id)}>
              <strong>{itemTitle}</strong>
              <div className="date">{date}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
