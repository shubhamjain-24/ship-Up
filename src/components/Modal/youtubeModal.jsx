// YouTubeModal.jsx
import React from "react";
import Modal from "react-bootstrap/Modal";
import './youtubeModal.css'

// YouTubeModal Component
const YouTubeModal = ({ show, onHide }) => {
  return (
    // Bootstrap Modal Component
    <Modal show={show} onHide={onHide} size="lg" centered>
      {/* Modal Header with Custom Styling */}
      <Modal.Header className="custom-modal-header">
        <Modal.Title>YouTube Video</Modal.Title>
        {/* Close Button with Custom Styling */}
        <button type="button" className="btn-close custom_button btn-close-white btn-lg" aria-label="Close" onClick={onHide}>
          ×
        </button>
      </Modal.Header>

      {/* Modal Body */}
      <Modal.Body>
        {/* Responsive Container for YouTube Video */}
        <div className="embed-responsive embed-responsive-16by9">
          {/* YouTube Video Iframe */}
          <iframe
            className="embed-responsive-item"
            src="https://www.youtube.com/embed/4JJn4C44Csw"
            title="YouTube Video"
            allowFullScreen
          ></iframe>
        </div>
      </Modal.Body>
    </Modal>
  );
};

// Export YouTubeModal Component
export default YouTubeModal;
