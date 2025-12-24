import { useNavigate } from 'react-router-dom';
import SEO from '../components/common/SEO';
import Button from '../components/common/Button';
import FAQ from '../components/common/FAQ';
import Card from '../components/common/Card';
import { collegeTestimonials } from '../data/collegeTestimonials';
import './CollegeServices.css';

const CollegeServices = () => {
  const navigate = useNavigate();

  const faqItems = [
    {
      question: 'What does the Fortuna All-Inclusive Application Package include?',
      answer: (
        <>
          <p>
            We've got you covered from start to finish! The All-Inclusive Application Package is designed to support you throughout the entire college application journey. The all inclusive college admissions package offers comprehensive college application support at every stage of the process, whether you're applying to 3 or up to 15 schools – including options across different countries, if you are interested in studying overseas.
          </p>
          <p>
            It begins with an in-depth exploration of your goals and personal profile, followed by strategic college admissions planning, school fit analysis, and a personalized action plan. You'll receive expert guidance on building a smart school list and crafting a detailed timeline. With expert college admissions guidance, you'll develop a compelling, authentic narrative and refine personal statements and supplemental essays through multiple rounds of feedback. The package also includes help with extracurricular strategy, application form consistency, and interview prep.
          </p>
          <p>
            Post-submission, we help you evaluate offers and make an informed, confident final decision. This is our most robust option among our college admissions consulting packages, and includes:
          </p>
          <ul>
            <li>A deep-dive strategy session to assess your goals and academic profile</li>
            <li>Strategic school list development</li>
            <li>A personalized timeline to keep everything on track</li>
            <li>Support for every written component, including the Common App, personal statements, and supplemental essays</li>
            <li>Expert feedback across multiple rounds of revision</li>
            <li>Interview preparation, extracurricular strategy, and application form support</li>
            <li>Post-application guidance to help you assess offers and choose your best-fit school</li>
          </ul>
        </>
      ),
    },
    {
      question: 'How long will the process take?',
      answer: (
        <>
          <p>
            It depends on when you begin. We work with some students as early as 8th or 9th grade, offering support over time with academic planning, extracurricular choices, and summer experiences. Others come to us as sophomores, juniors or even seniors for more intensive application support. For most students, our all inclusive college admissions package typically spans 12 to 18 months, ensuring thoughtful, well-paced progress without last-minute stress.
          </p>
        </>
      ),
    },
    {
      question: "Can't I do this on my own?",
      answer: (
        <>
          <p>
            It's possible – but having expert college admissions guidance makes a major difference. We help you approach every step strategically, avoid common mistakes, and bring your story to life. Our coaches have sat on admissions committees and understand what top colleges look for. With college application coaching, you're not just completing tasks – you're elevating your entire candidacy.
          </p>
        </>
      ),
    },
    {
      question: 'Do I need a writing specialist?',
      answer: (
        <>
          <p>
            Strong writing is essential, but it's not just about grammar. College essays require deep reflection and a clear, authentic voice. While AI tools or teachers may offer suggestions, nothing replaces the one-on-one process of discovering and expressing your story. Our writing specialists are expert editors and seasoned storytellers who help students write with purpose and power. Colleges notice the difference.
          </p>
        </>
      ),
    },
    {
      question: 'Can I add more schools to my package?',
      answer: (
        <>
          <p>
            Absolutely. If additional colleges are added to your list during the process, we can seamlessly integrate their requirements into your existing plan. We already have their application information at our fingertips and can build on the work you've already done, without missing a beat.
          </p>
        </>
      ),
    },
    {
      question: 'How does all the work get done?',
      answer: (
        <>
          <p>
            We use a structured, supportive system to keep students engaged and on track. Each student has a personalized roadmap with clear milestones and deadlines. Coaches assign tasks, track progress, and provide regular check-ins. Parents can opt in for updates and visibility. With our college application coaching and a smart plan in place, students stay organized, motivated, and confident.
          </p>
        </>
      ),
    },
    {
      question: 'What kind of student benefits most from this package?',
      answer: (
        <>
          <p>
            We work with a wide range of students – from those aiming for the Ivy League to students exploring liberal arts colleges, STEM programs, or international options. Whether you're pursuing the IB, A-Levels, or another curriculum, we tailor our approach to your goals. Students who benefit most from our comprehensive college application support want to feel seen, supported, and empowered to tell a meaningful story.
          </p>
        </>
      ),
    },
    {
      question: 'Do you support international applications or non-US schools?',
      answer: (
        <>
          <p>
            Yes. We regularly guide students applying to leading institutions in the UK, Canada, Europe, and beyond. Our team is well-versed in UCAS, the Common App, and other systems. We know how to present your strengths across varied academic and cultural contexts.
          </p>
        </>
      ),
    },
    {
      question: 'Who will I work with?',
      answer: (
        <>
          <p>
            You'll be matched with a coach based on your goals, personality, and working style. We'll discuss who would be a good fit during your free consultation call, and you'll have the opportunity to schedule a fit call with your proposed coach, so you can get to know each other and confirm if the chemistry is right. All of our coaches bring years of experience in college admissions consulting, including former admissions officers from top universities. Depending on your needs, you may also work with a writing specialist or interview coach to strengthen specific areas.
          </p>
        </>
      ),
    },
    {
      question: 'What results do students achieve with this package?',
      answer: (
        <>
          <p>
            Our students are admitted to top U.S. and global universities every year, including Ivy League schools, elite liberal arts colleges, and renowned international institutions. Many earn merit scholarships or honors program placements. Furthermore, our students finish the college application process with clarity, confidence, and a deep sense of personal growth.
          </p>
        </>
      ),
    },
    {
      question: 'How do I get started?',
      answer: (
        <>
          <p>
            Getting started is easy—just reach out for a free consultation! We really take the time to review your profile and have an in-depth discussion about your goals and how we can support you in achieving them.
          </p>
        </>
      ),
    },
  ];

  return (
    <>
      <SEO 
        title="All-Inclusive College Admissions Package"
        description="Crack the Code to Elite College Admissions. Our All-Inclusive Package surrounds students with a team of college admissions experts who guide the entire journey."
        keywords="all-inclusive college admissions package, college application support, college admissions consulting"
        image="/images/college/og-image.jpg"
      />
      <div className="college-services-page">
        {/* Hero Section */}
        <section className="college-services-hero">
          <div className="container">
            <h1 className="college-services-hero-heading">
              <span className="college-services-hero-main">All-Inclusive College</span>
              <br />
              <span className="college-services-hero-sub">Admissions Package</span>
            </h1>
            <h2 className="college-services-hero-tagline">Crack the Code to Elite College Admissions</h2>
            <p className="college-services-hero-description">
              Our All-Inclusive Package surrounds students with a team of college admissions experts who guide the entire journey — from school selection to standout applications. It's our most comprehensive and personalized service, designed to reduce stress, build confidence, and help students put their best self forward.
            </p>
            <Button
              variant="outline"
              size="large"
              onClick={() => navigate('/college/free-consultation')}
              className="college-services-hero-button"
            >
              Book Free Consultation →
            </Button>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="college-services-how-it-works">
          <div className="container">
            <h2 className="college-services-section-heading">How It Works</h2>
            
            <div className="how-it-works-steps">
              <div className="how-it-works-step how-it-works-step-1">
                <div className="step-1-content">
                  <div className="step-1-left">
                    <div className="step-number">STEP 1</div>
                    <h3 className="step-title">
                      Get Started with a <span className="step-title-highlight">Free Consultation</span>
                    </h3>
                    <p className="step-description">
                      The first step towards successful college admissions is a free consultation with a seasoned admissions expert who genuinely listens. Working together on your applications is a partnership, and we really care about getting to know each other. We'll discuss:
                    </p>
                    <ul className="step-list">
                      <li>Student's goals, overall personal profile and dream schools</li>
                      <li>Answers to your questions about the complex college application process</li>
                      <li>Actionable insights to refine and strengthen your college admissions approach</li>
                      <li>The opportunity to schedule a follow-up "fit call" with your recommended coach to ensure the right chemistry and alignment.</li>
                    </ul>
                  </div>
                  <div className="step-1-right">
                    <div className="consultation-confirmation-card">
                      <div className="profile-pictures-grid">
                        <div className="profile-picture-blurred"></div>
                        <div className="profile-picture-blurred"></div>
                        <div className="profile-picture-blurred"></div>
                        <div className="profile-picture-blurred"></div>
                        <div className="profile-picture-blurred"></div>
                        <div className="profile-picture-blurred"></div>
                        <div className="profile-picture-blurred"></div>
                        <div className="profile-picture-blurred"></div>
                        <div className="profile-picture-main">
                          <div className="profile-image" style={{
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#ffffff',
                            fontSize: '24px',
                            fontWeight: '600'
                          }}>
                            <span>👩</span>
                          </div>
                          <div className="calendar-check-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="12" cy="12" r="10" fill="#2E44A6"/>
                              <path d="M8 12L11 15L16 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                        </div>
                        <div className="profile-picture-blurred"></div>
                        <div className="profile-picture-blurred"></div>
                        <div className="profile-picture-blurred"></div>
                        <div className="profile-picture-blurred"></div>
                        <div className="profile-picture-blurred"></div>
                        <div className="profile-picture-blurred"></div>
                        <div className="profile-picture-blurred"></div>
                        <div className="profile-picture-blurred"></div>
                        <div className="profile-picture-blurred"></div>
                      </div>
                      <div className="confirmation-text">
                        <p>Congratulations! You booked a free, 30-minute consultation.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="how-it-works-step">
                <div className="step-number">Step 2</div>
                <h3 className="step-title">Goal Setting and Strategic Application Planning</h3>
                <div className="step-subsection">
                  <h4 className="step-subtitle">Vision Development & School Selection</h4>
                  <ul className="step-list">
                    <li>Define your short- and long-term goals with expert guidance</li>
                    <li>Explore schools, internships, and geographies aligned with your ambitions</li>
                    <li>Build a smart school list (reach, target, safety schools) based on your profile and goals</li>
                    <li>Finalize a balanced set of colleges that align with your aspirations</li>
                    <li>Develop a timeline and action plan to stay ahead of deadlines</li>
                  </ul>
                </div>
                <div className="step-subsection">
                  <h4 className="step-subtitle">Professional Profile Building</h4>
                  <ul className="step-list">
                    <li>Advise on academic course selection to build a strong and well-rounded academic profile</li>
                    <li>Strategically expand extra-curricular involvement and deepen impact across key activities</li>
                    <li>Advise on competitions, volunteering, or independent projects that strengthen your profile</li>
                  </ul>
                </div>
              </div>

              <div className="how-it-works-step">
                <div className="step-number">Step 3</div>
                <h3 className="step-title">Create Your Authentic Story and Build Your Applications</h3>
                <div className="step-subsection">
                  <h4 className="step-subtitle">Strategic Positioning as a Candidate</h4>
                  <ul className="step-list">
                    <li>Review your academic, extracurricular, and leadership profile</li>
                    <li>Identify strengths, weaknesses, and areas to refine for maximum impact</li>
                    <li>Develop an application positioning strategy to authentically and strategically highlight your fit</li>
                  </ul>
                </div>
                <div className="step-subsection">
                  <h4 className="step-subtitle">Powerful Personal Statements & Essays</h4>
                  <ul className="step-list">
                    <li>Create core messaging that highlights your authentic story, unique voice, and future potential</li>
                    <li>Identify meaningful narratives for supplemental essays and build memorable stories through drafting and refinement</li>
                    <li>Collaborate through iterative editing to polish every element for maximum resonance</li>
                    <li>Highlight your academic, internships, and leadership achievements with clarity</li>
                  </ul>
                </div>
                <div className="step-subsection">
                  <h4 className="step-subtitle">Application Form Support</h4>
                  <ul className="step-list">
                    <li>Ensure consistency across essays, forms, and your personal statement</li>
                    <li>Receive detailed admissions advisor review before submission</li>
                    <li>Tailor whole application package to resonate strongly with admissions committees</li>
                  </ul>
                </div>
              </div>

              <div className="how-it-works-step">
                <div className="step-number">Step 4</div>
                <h3 className="step-title">Master the Interview Process</h3>
                <p className="step-description">
                  <strong>Interview Coaching & Mock Session</strong>
                </p>
                <ul className="step-list">
                  <li>Prepare for interviews with high impact strategies and practice sessions</li>
                  <li>Refine responses, build storytelling confidence, and strengthen personal presence</li>
                  <li>Learn how to showcase authenticity, adaptability, and leadership potential</li>
                  <li>Get coaching on how to handle tough questions, manage interview anxiety and make a lasting impression</li>
                </ul>
              </div>

              <div className="how-it-works-step">
                <div className="step-number">Step 5</div>
                <h3 className="step-title">Post-Application Support</h3>
                <p className="step-description">
                  <strong>Decision-Making Support: Your "Happy Problem"</strong>
                </p>
                <ul className="step-list">
                  <li>Understand college response requirements and get help on how to answer</li>
                  <li>Receive expert guidance when choosing between multiple offers</li>
                  <li>Analyze key factors like academic fit, campus culture, future opportunities, and financial aid</li>
                  <li>Make a confident, informed decision about where you'll thrive</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Knowledge Center Section */}
        <section className="college-services-knowledge">
          <div className="container">
            <h2 className="college-services-section-heading">Access to the Fortuna Knowledge Center</h2>
            <p className="knowledge-center-description">
              You'll gain exclusive access to the Fortuna Knowledge Center – your go-to hub for expert insights and proprietary resources, built on the insider knowledge of our coaching team and decades of admissions experience. This comprehensive library includes templates, samples, and step-by-step guidance for every stage of the application process.
            </p>
          </div>
        </section>

        {/* Who You'll Work With Section */}
        <section className="college-services-team">
          <div className="container">
            <h2 className="college-services-section-heading">Who You'll Work With</h2>
            <p className="team-intro">
              Fortuna expert coaches know exactly what it takes to get noticed. Using a team-based, high-touch approach, we provide continuous support through every milestone. From crafting compelling essays to perfecting interviews, our team of specialists accompany you until every application is submitted and every interview completed.
            </p>
            
            <div className="team-roles">
              <Card className="team-role-card">
                <h3 className="team-role-title">Expert Coach</h3>
                <p className="team-role-description">
                  A dedicated expert coach will provide personalized support, motivation and guidance as the student progresses through the strategic college application milestones. They are committed to each candidate's success and partner with students and families to navigate every step of this high-stakes process with clarity, care, and strategy.
                </p>
              </Card>

              <Card className="team-role-card">
                <h3 className="team-role-title">Advisor</h3>
                <p className="team-role-description">
                  Your Advisor brings an additional layer of expertise. It may be an objective, admissions committee-style review of your draft application, or interview prep and practice sessions to ensure your answers are fine-tuned and stand out against a competitive pool of applicants.
                </p>
              </Card>

              <Card className="team-role-card">
                <h3 className="team-role-title">Writing Specialist</h3>
                <p className="team-role-description">
                  A writing expert will help craft clear, compelling essays that authentically reflect who you are and what makes you unique. While AI tools can assist with tone and brainstorming, there's no substitute for a personal discovery process. This seasoned expert will ensure you identify your standout qualities and shape your own story to be memorable.
                </p>
              </Card>

              <Card className="team-role-card">
                <h3 className="team-role-title">Fortuna Team</h3>
                <p className="team-role-description">
                  When you partner with Fortuna, you don't just work with one coach – you benefit from the collective expertise and insight of our entire team. Thanks to our collaborative approach, every student draws on the diverse experiences and institutional knowledge of a global network of admissions professionals. It's a team effort designed to help each student not only get accepted, but to thrive at the college that fits them best.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="college-services-testimonials">
          <div className="container">
            <h2 className="college-services-testimonials-heading">Real Reviews From Real Clients</h2>
            <p className="college-services-testimonials-subtitle">Students Love Working With Us</p>
            <div className="college-services-testimonials-grid">
              {collegeTestimonials.map((testimonial) => (
                <Card key={testimonial.id} className="college-services-testimonial-card">
                  <h3 className="college-services-testimonial-headline">{testimonial.headline}</h3>
                  <p className="college-services-testimonial-quote">"{testimonial.quote}"</p>
                  <div className="college-services-testimonial-author">
                    <p className="college-services-testimonial-name">{testimonial.name}</p>
                  </div>
                </Card>
              ))}
            </div>
            <div className="college-services-testimonials-cta">
              <p className="testimonials-cta-text">
                Get candid feedback and strategic advice from former college admissions decision-makers. <strong>Talk to us today.</strong>
              </p>
              <Button
                variant="primary"
                size="large"
                onClick={() => navigate('/college/free-consultation')}
              >
                Book Free Consultation
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="college-services-faq">
          <div className="container">
            <h2 className="college-services-section-heading">Frequently Asked Questions</h2>
            <FAQ items={faqItems} defaultOpenIndex={0} />
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="college-services-final-cta">
          <div className="container">
            <p className="final-cta-text">
              Your College journey starts with a conversation. <strong>Talk to us today</strong>.
            </p>
            <Button
              variant="primary"
              size="large"
              onClick={() => navigate('/college/free-consultation')}
            >
              Book Free Consultation
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default CollegeServices;
