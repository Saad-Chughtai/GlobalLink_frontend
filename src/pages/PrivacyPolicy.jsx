import SEO from '../components/common/SEO';
import './LegalPages.css';

const PrivacyPolicy = () => {
  const lastUpdated = "December 25, 2024";

  return (
    <>
      <SEO 
        title="Privacy Policy - Global Link Admissions"
        description="Learn how Global Link Admissions collects, uses, and protects your personal information. Your privacy matters to us."
        keywords="privacy policy, data protection, personal information, Global Link Admissions"
      />
      
      <div className="legal-page">
        {/* Hero Section */}
        <section className="legal-hero">
          <div className="container">
            <div className="legal-hero-content">
              <div className="legal-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h1>Privacy Policy</h1>
              <p className="legal-subtitle">
                Your privacy matters to us. This policy explains how we collect, use, and protect your personal information.
              </p>
              <div className="last-updated">
                Last Updated: {lastUpdated}
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="legal-content">
          <div className="container">
            <div className="legal-wrapper">
              {/* Side Navigation */}
              <nav className="legal-nav">
                <ul>
                  <li><a href="#introduction">Introduction</a></li>
                  <li><a href="#information-collection">Information We Collect</a></li>
                  <li><a href="#information-use">How We Use Your Information</a></li>
                  <li><a href="#data-protection">Data Protection & Security</a></li>
                  <li><a href="#cookies">Cookies & Tracking</a></li>
                  <li><a href="#third-party">Third-Party Sharing</a></li>
                  <li><a href="#user-rights">Your Rights</a></li>
                  <li><a href="#policy-updates">Policy Updates</a></li>
                  <li><a href="#contact">Contact Information</a></li>
                </ul>
              </nav>

              {/* Main Content */}
              <div className="legal-main">
                <section id="introduction" className="legal-section">
                  <h2>1. Introduction</h2>
                  <p>
                    Global Link Admissions ("we," "our," or "us") is committed to protecting and respecting your privacy. 
                    This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you 
                    visit our website, use our services, or interact with us in any way.
                  </p>
                  <p>
                    We understand that your personal information is important to you, and we take our responsibility to 
                    protect it seriously. This policy applies to all information collected through our website, services, 
                    and any related communications.
                  </p>
                </section>

                <section id="information-collection" className="legal-section">
                  <h2>2. Information We Collect</h2>
                  
                  <h3>2.1 Personal Information</h3>
                  <p>We may collect the following personal information when you use our services:</p>
                  <ul>
                    <li><strong>Contact Information:</strong> Name, email address, phone number, mailing address</li>
                    <li><strong>Academic Information:</strong> Educational background, test scores, academic goals, transcripts</li>
                    <li><strong>Application Details:</strong> University preferences, program interests, application materials</li>
                    <li><strong>Communication Records:</strong> Messages, consultation notes, feedback, and correspondence</li>
                    <li><strong>Payment Information:</strong> Billing details (processed securely through third-party providers)</li>
                  </ul>

                  <h3>2.2 Technical Information</h3>
                  <p>We automatically collect certain technical information when you visit our website:</p>
                  <ul>
                    <li><strong>Device Information:</strong> IP address, browser type, operating system, device identifiers</li>
                    <li><strong>Usage Data:</strong> Pages visited, time spent, click patterns, referral sources</li>
                    <li><strong>Location Data:</strong> General geographic location based on IP address</li>
                    <li><strong>Cookies:</strong> Small data files stored on your device (see Cookies section below)</li>
                  </ul>
                </section>

                <section id="information-use" className="legal-section">
                  <h2>3. How We Use Your Information</h2>
                  <p>We use your information for the following purposes:</p>

                  <h3>3.1 Application Processing</h3>
                  <ul>
                    <li>Providing admissions consulting services</li>
                    <li>Reviewing and improving application materials</li>
                    <li>Matching you with appropriate universities and programs</li>
                    <li>Facilitating communication with educational institutions</li>
                  </ul>

                  <h3>3.2 Communication and Support</h3>
                  <ul>
                    <li>Responding to your inquiries and providing customer support</li>
                    <li>Sending service-related notifications and updates</li>
                    <li>Scheduling consultations and appointments</li>
                    <li>Providing educational content and resources</li>
                  </ul>

                  <h3>3.3 Service Improvement</h3>
                  <ul>
                    <li>Analyzing usage patterns to improve our website and services</li>
                    <li>Conducting research to enhance our consulting methodologies</li>
                    <li>Developing new features and services</li>
                    <li>Ensuring website security and preventing fraud</li>
                  </ul>
                </section>

                <section id="data-protection" className="legal-section">
                  <h2>4. Data Protection & Security</h2>
                  
                  <h3>4.1 Secure Storage</h3>
                  <p>
                    We implement industry-standard security measures to protect your personal information, including:
                  </p>
                  <ul>
                    <li>SSL encryption for data transmission</li>
                    <li>Secure servers with regular security updates</li>
                    <li>Regular data backups and disaster recovery procedures</li>
                    <li>Secure file storage with access controls</li>
                  </ul>

                  <h3>4.2 Limited Access</h3>
                  <p>
                    Access to your personal information is restricted to authorized personnel who need it to provide 
                    our services. All staff members are trained on privacy protection and bound by confidentiality agreements.
                  </p>

                  <h3>4.3 Industry-Standard Safeguards</h3>
                  <p>
                    While we strive to protect your information, no method of transmission over the internet or 
                    electronic storage is 100% secure. We continuously monitor and update our security practices 
                    to maintain the highest level of protection possible.
                  </p>
                </section>

                <section id="cookies" className="legal-section">
                  <h2>5. Cookies & Tracking Technologies</h2>
                  <p>
                    We use cookies and similar tracking technologies to enhance your browsing experience and 
                    analyze website usage. Cookies are small text files stored on your device that help us:
                  </p>
                  <ul>
                    <li>Remember your preferences and settings</li>
                    <li>Analyze website traffic and user behavior</li>
                    <li>Provide personalized content and recommendations</li>
                    <li>Improve website functionality and performance</li>
                  </ul>
                  <p>
                    You can control cookie settings through your browser preferences. However, disabling cookies 
                    may affect the functionality of our website.
                  </p>
                </section>

                <section id="third-party" className="legal-section">
                  <h2>6. Third-Party Sharing</h2>
                  <p>
                    We do not sell, trade, or rent your personal information to third parties. We may share your 
                    information only in the following limited circumstances:
                  </p>
                  <ul>
                    <li><strong>Service Providers:</strong> Trusted partners who assist in providing our services (e.g., payment processors, email services)</li>
                    <li><strong>Educational Institutions:</strong> Universities and schools as part of the application process (with your explicit consent)</li>
                    <li><strong>Legal Requirements:</strong> When required by law, court order, or government regulation</li>
                    <li><strong>Business Protection:</strong> To protect our rights, property, or safety, or that of our users</li>
                  </ul>
                  <p>
                    All third parties are contractually obligated to maintain the confidentiality and security of your information.
                  </p>
                </section>

                <section id="user-rights" className="legal-section">
                  <h2>7. Your Rights</h2>
                  <p>You have the following rights regarding your personal information:</p>
                  <ul>
                    <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                    <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                    <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal requirements)</li>
                    <li><strong>Portability:</strong> Request transfer of your information to another service provider</li>
                    <li><strong>Objection:</strong> Object to certain uses of your information</li>
                    <li><strong>Restriction:</strong> Request limitation of how we process your information</li>
                  </ul>
                  <p>
                    To exercise these rights, please contact us using the information provided in the Contact section below.
                  </p>
                </section>

                <section id="policy-updates" className="legal-section">
                  <h2>8. Policy Updates</h2>
                  <p>
                    We may update this Privacy Policy from time to time to reflect changes in our practices or 
                    legal requirements. When we make significant changes, we will:
                  </p>
                  <ul>
                    <li>Update the "Last Updated" date at the top of this policy</li>
                    <li>Notify you via email if you have an account with us</li>
                    <li>Post a notice on our website highlighting the changes</li>
                    <li>Provide additional notice for material changes that affect your rights</li>
                  </ul>
                  <p>
                    We encourage you to review this policy periodically to stay informed about how we protect your information.
                  </p>
                </section>

                <section id="contact" className="legal-section">
                  <h2>9. Contact Information</h2>
                  <p>
                    If you have any questions, concerns, or requests regarding this Privacy Policy or our 
                    data practices, please contact us:
                  </p>
                  <div className="contact-info">
                    <p><strong>Email:</strong> privacy@globallinkadmissions.com</p>
                    <p><strong>General Inquiries:</strong> info@globallinkadmissions.com</p>
                    <p><strong>Mailing Address:</strong><br />
                    Global Link Admissions<br />
                    Privacy Department<br />
                    [Your Business Address]<br />
                    [City, State, ZIP Code]</p>
                  </div>
                  <p>
                    We will respond to your inquiry within 30 days of receipt.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PrivacyPolicy;

