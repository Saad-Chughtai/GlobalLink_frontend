import SEO from '../components/common/SEO';
import './LegalPages.css';

const TermsOfService = () => {
  const lastUpdated = "December 25, 2024";

  return (
    <>
      <SEO 
        title="Terms of Use - Global Link Admissions"
        description="Read the terms and conditions that govern your use of Global Link Admissions website and services."
        keywords="terms of use, terms of service, legal agreement, Global Link Admissions"
      />
      
      <div className="legal-page">
        {/* Hero Section */}
        <section className="legal-hero">
          <div className="container">
            <div className="legal-hero-content">
              <div className="legal-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 9H9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h1>Terms of Use</h1>
              <p className="legal-subtitle">
                These terms govern your use of our website and services. Please read them carefully.
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
                  <li><a href="#acceptance">Acceptance of Terms</a></li>
                  <li><a href="#eligibility">Eligibility</a></li>
                  <li><a href="#use-of-services">Use of Services</a></li>
                  <li><a href="#user-responsibilities">User Responsibilities</a></li>
                  <li><a href="#intellectual-property">Intellectual Property</a></li>
                  <li><a href="#limitation-liability">Limitation of Liability</a></li>
                  <li><a href="#termination">Termination of Access</a></li>
                  <li><a href="#governing-law">Governing Law</a></li>
                  <li><a href="#changes">Changes to Terms</a></li>
                  <li><a href="#contact">Contact Information</a></li>
                </ul>
              </nav>

              {/* Main Content */}
              <div className="legal-main">
                <section id="acceptance" className="legal-section">
                  <h2>1. Acceptance of Terms</h2>
                  <p>
                    By accessing, browsing, or using the Global Link Admissions website ("Website") or any of our 
                    services ("Services"), you acknowledge that you have read, understood, and agree to be bound by 
                    these Terms of Use ("Terms") and all applicable laws and regulations.
                  </p>
                  <p>
                    If you do not agree with any part of these Terms, you must not use our Website or Services. 
                    Your continued use of our Website constitutes your acceptance of these Terms and any modifications thereto.
                  </p>
                </section>

                <section id="eligibility" className="legal-section">
                  <h2>2. Eligibility</h2>
                  <p>
                    To use our Services, you must:
                  </p>
                  <ul>
                    <li>Be at least 18 years of age, or have parental/guardian consent if under 18</li>
                    <li>Have the legal capacity to enter into binding agreements</li>
                    <li>Provide accurate and complete information when creating an account or using our Services</li>
                    <li>Comply with all applicable local, state, national, and international laws and regulations</li>
                  </ul>
                  <p>
                    We reserve the right to refuse service to anyone at our sole discretion.
                  </p>
                </section>

                <section id="use-of-services" className="legal-section">
                  <h2>3. Use of Services</h2>
                  
                  <h3>3.1 Permitted Use</h3>
                  <p>
                    You may use our Website and Services for lawful purposes only. Our Services include:
                  </p>
                  <ul>
                    <li>University admissions consulting and guidance</li>
                    <li>Application review and improvement services</li>
                    <li>Educational resources and information</li>
                    <li>Communication with our consultants and staff</li>
                  </ul>

                  <h3>3.2 Service Limitations</h3>
                  <p>
                    While we provide expert guidance and support, we cannot and do not guarantee:
                  </p>
                  <ul>
                    <li>Admission to any specific educational institution</li>
                    <li>Specific outcomes or results from our consulting services</li>
                    <li>That our advice will be suitable for every individual situation</li>
                    <li>The accuracy of third-party information or resources</li>
                  </ul>
                </section>

                <section id="user-responsibilities" className="legal-section">
                  <h2>4. User Responsibilities</h2>
                  <p>
                    As a user of our Services, you agree to:
                  </p>
                  <ul>
                    <li><strong>Provide Accurate Information:</strong> Supply truthful, accurate, and complete information about yourself and your academic background</li>
                    <li><strong>Maintain Confidentiality:</strong> Keep your account credentials secure and not share them with others</li>
                    <li><strong>Respect Deadlines:</strong> Meet agreed-upon deadlines and timelines for application materials and consultations</li>
                    <li><strong>Professional Communication:</strong> Communicate respectfully and professionally with our staff and consultants</li>
                    <li><strong>Compliance:</strong> Use our Services in accordance with all applicable laws and regulations</li>
                    <li><strong>No Misuse:</strong> Not use our Services for any unlawful, harmful, or fraudulent purposes</li>
                  </ul>
                </section>

                <section id="intellectual-property" className="legal-section">
                  <h2>5. Intellectual Property</h2>
                  
                  <h3>5.1 Our Content</h3>
                  <p>
                    All content on our Website, including but not limited to text, graphics, logos, images, software, 
                    and other materials, is the property of Global Link Admissions or our licensors and is protected 
                    by copyright, trademark, and other intellectual property laws.
                  </p>

                  <h3>5.2 Limited License</h3>
                  <p>
                    We grant you a limited, non-exclusive, non-transferable license to access and use our Website 
                    and Services for personal, non-commercial purposes only. You may not:
                  </p>
                  <ul>
                    <li>Reproduce, distribute, or publicly display our content without permission</li>
                    <li>Modify, adapt, or create derivative works from our materials</li>
                    <li>Use our content for commercial purposes without written consent</li>
                    <li>Remove or alter any copyright, trademark, or other proprietary notices</li>
                  </ul>

                  <h3>5.3 User Content</h3>
                  <p>
                    You retain ownership of any content you provide to us (such as application materials). 
                    By submitting content, you grant us a license to use, review, and provide feedback on 
                    such materials as part of our Services.
                  </p>
                </section>

                <section id="limitation-liability" className="legal-section">
                  <h2>6. Limitation of Liability</h2>
                  
                  <h3>6.1 Disclaimer of Warranties</h3>
                  <p>
                    Our Website and Services are provided "as is" and "as available" without warranties of any kind, 
                    either express or implied, including but not limited to warranties of merchantability, fitness 
                    for a particular purpose, or non-infringement.
                  </p>

                  <h3>6.2 Limitation of Damages</h3>
                  <p>
                    To the maximum extent permitted by law, Global Link Admissions shall not be liable for any 
                    indirect, incidental, special, consequential, or punitive damages, including but not limited to:
                  </p>
                  <ul>
                    <li>Loss of profits, revenue, or business opportunities</li>
                    <li>Loss of data or information</li>
                    <li>Cost of substitute services</li>
                    <li>Emotional distress or other intangible losses</li>
                  </ul>

                  <h3>6.3 Maximum Liability</h3>
                  <p>
                    Our total liability to you for any claims arising from or related to our Services shall not 
                    exceed the amount you paid us for Services in the 12 months preceding the claim.
                  </p>
                </section>

                <section id="termination" className="legal-section">
                  <h2>7. Termination of Access</h2>
                  <p>
                    We reserve the right to terminate or suspend your access to our Website and Services at any time, 
                    with or without cause, and with or without notice, for any reason including:
                  </p>
                  <ul>
                    <li>Violation of these Terms of Use</li>
                    <li>Fraudulent or illegal activity</li>
                    <li>Abusive or inappropriate behavior toward our staff</li>
                    <li>Non-payment of fees for Services</li>
                    <li>Any other reason at our sole discretion</li>
                  </ul>
                  <p>
                    Upon termination, your right to use our Services will cease immediately, but these Terms will 
                    remain in effect regarding any prior use of our Services.
                  </p>
                </section>

                <section id="governing-law" className="legal-section">
                  <h2>8. Governing Law</h2>
                  <p>
                    These Terms shall be governed by and construed in accordance with the laws of [Your State/Country], 
                    without regard to its conflict of law provisions. Any legal action or proceeding arising under 
                    these Terms will be brought exclusively in the courts of [Your Jurisdiction].
                  </p>
                  <p>
                    If any provision of these Terms is found to be unenforceable or invalid, that provision will be 
                    limited or eliminated to the minimum extent necessary so that the remaining Terms will remain in 
                    full force and effect.
                  </p>
                </section>

                <section id="changes" className="legal-section">
                  <h2>9. Changes to Terms</h2>
                  <p>
                    We reserve the right to modify these Terms at any time. When we make changes, we will:
                  </p>
                  <ul>
                    <li>Update the "Last Updated" date at the top of this page</li>
                    <li>Post the revised Terms on our Website</li>
                    <li>Notify users via email for material changes (if you have an account with us)</li>
                    <li>Provide reasonable notice before changes take effect</li>
                  </ul>
                  <p>
                    Your continued use of our Website and Services after any changes constitutes your acceptance 
                    of the new Terms. If you do not agree to the modified Terms, you must stop using our Services.
                  </p>
                </section>

                <section id="contact" className="legal-section">
                  <h2>10. Contact Information</h2>
                  <p>
                    If you have any questions, concerns, or disputes regarding these Terms of Use, please contact us:
                  </p>
                  <div className="contact-info">
                    <p><strong>Email:</strong> legal@globallinkadmissions.com</p>
                    <p><strong>General Inquiries:</strong> info@globallinkadmissions.com</p>
                    <p><strong>Mailing Address:</strong><br />
                    Global Link Admissions<br />
                    Legal Department<br />
                    [Your Business Address]<br />
                    [City, State, ZIP Code]</p>
                  </div>
                  <p>
                    We will make every effort to resolve any issues or concerns you may have regarding these Terms.
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

export default TermsOfService;

