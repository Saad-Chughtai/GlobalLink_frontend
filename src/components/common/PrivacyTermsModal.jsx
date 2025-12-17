import { useState } from 'react';
import Modal from './Modal';
import './Modal.css';

const PrivacyTermsModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('privacy'); // 'privacy' or 'terms'

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Privacy Policy & Terms of Service">
      <div className="privacy-terms-modal">
        {/* Tab Navigation */}
        <div className="modal-tabs">
          <button
            className={`modal-tab ${activeTab === 'privacy' ? 'active' : ''}`}
            onClick={() => setActiveTab('privacy')}
          >
            Privacy Policy
          </button>
          <button
            className={`modal-tab ${activeTab === 'terms' ? 'active' : ''}`}
            onClick={() => setActiveTab('terms')}
          >
            Terms of Service
          </button>
        </div>

        {/* Content */}
        <div className="modal-tab-content">
          {activeTab === 'privacy' ? (
            <div className="privacy-content">
              <h3>Privacy Policy</h3>
              <p><strong>Last Updated:</strong> {new Date().toLocaleDateString()}</p>
              
              <h4>1. Information We Collect</h4>
              <p>
                We collect information that you provide directly to us when you:
              </p>
              <ul>
                <li>Fill out consultation forms on our website</li>
                <li>Contact us via email or phone</li>
                <li>Subscribe to our newsletter</li>
                <li>Use our services</li>
              </ul>
              <p>
                This information may include your name, email address, phone number, 
                educational background, test scores, and other information relevant 
                to your admissions consulting needs.
              </p>

              <h4>2. How We Use Your Information</h4>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Provide, maintain, and improve our services</li>
                <li>Process and respond to your inquiries and requests</li>
                <li>Send you updates, newsletters, and marketing communications (with your consent)</li>
                <li>Personalize your experience with our services</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h4>3. Information Sharing and Disclosure</h4>
              <p>
                We do not sell, trade, or rent your personal information to third parties. 
                We may share your information only in the following circumstances:
              </p>
              <ul>
                <li>With your explicit consent</li>
                <li>To comply with legal obligations or respond to legal requests</li>
                <li>To protect our rights, privacy, safety, or property</li>
                <li>With service providers who assist us in operating our business</li>
              </ul>

              <h4>4. Data Security</h4>
              <p>
                We implement appropriate technical and organizational measures to protect 
                your personal information against unauthorized access, alteration, disclosure, 
                or destruction. However, no method of transmission over the Internet or 
                electronic storage is 100% secure.
              </p>

              <h4>5. Your Rights</h4>
              <p>You have the right to:</p>
              <ul>
                <li>Access and receive a copy of your personal information</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to or restrict processing of your information</li>
                <li>Withdraw consent at any time</li>
              </ul>

              <h4>6. Contact Us</h4>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p>
                <strong>Email:</strong> privacy@fortunaadmissions.com<br />
                <strong>Phone:</strong> (555) 123-4567
              </p>
            </div>
          ) : (
            <div className="terms-content">
              <h3>Terms of Service</h3>
              <p><strong>Last Updated:</strong> {new Date().toLocaleDateString()}</p>
              
              <h4>1. Acceptance of Terms</h4>
              <p>
                By accessing and using Fortuna Admissions' services, you accept and agree 
                to be bound by the terms and provision of this agreement. If you do not 
                agree to these terms, please do not use our services.
              </p>

              <h4>2. Services Provided</h4>
              <p>
                Fortuna Admissions provides admissions consulting services including but 
                not limited to:
              </p>
              <ul>
                <li>Application strategy and planning</li>
                <li>Essay review and editing</li>
                <li>Interview preparation</li>
                <li>School selection guidance</li>
                <li>Profile assessment and positioning</li>
              </ul>

              <h4>3. Client Responsibilities</h4>
              <p>As a client, you agree to:</p>
              <ul>
                <li>Provide accurate and complete information</li>
                <li>Respect deadlines and timelines established by your consultant</li>
                <li>Communicate professionally and respectfully</li>
                <li>Use our services in accordance with all applicable laws and regulations</li>
                <li>Not share login credentials or access to proprietary materials</li>
              </ul>

              <h4>4. Payment Terms</h4>
              <p>
                Payment terms will be specified in your service agreement. All fees are 
                non-refundable unless otherwise stated in writing. Late payments may result 
                in suspension of services.
              </p>

              <h4>5. Intellectual Property</h4>
              <p>
                All materials, documents, templates, and content provided by Fortuna 
                Admissions are proprietary and protected by copyright. You may not 
                reproduce, distribute, or share these materials without written permission.
              </p>

              <h4>6. Limitation of Liability</h4>
              <p>
                Fortuna Admissions provides consulting services and guidance. We do not 
                guarantee admission to any school or program. Our services are advisory 
                in nature, and final decisions regarding applications rest solely with 
                the client and the educational institutions.
              </p>

              <h4>7. Confidentiality</h4>
              <p>
                We maintain strict confidentiality regarding all client information and 
                application materials. We will not share your information with third 
                parties except as required by law or with your explicit consent.
              </p>

              <h4>8. Termination</h4>
              <p>
                Either party may terminate the service agreement with written notice. 
                Upon termination, all outstanding fees remain due, and access to 
                proprietary materials will be revoked.
              </p>

              <h4>9. Changes to Terms</h4>
              <p>
                We reserve the right to modify these terms at any time. Continued use 
                of our services after changes constitutes acceptance of the modified terms.
              </p>

              <h4>10. Contact Information</h4>
              <p>
                For questions about these Terms of Service, please contact us at:
              </p>
              <p>
                <strong>Email:</strong> legal@fortunaadmissions.com<br />
                <strong>Phone:</strong> (555) 123-4567
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="modal-footer">
          <button className="btn btn-primary" onClick={onClose}>
            I Understand
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default PrivacyTermsModal;

