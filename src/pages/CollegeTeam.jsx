import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TeamGrid from '../components/team/TeamGrid';
import SEO from '../components/common/SEO';
import FAQ from '../components/common/FAQ';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { collegeTestimonials } from '../data/collegeTestimonials';
import './CollegeTeam.css';

const CollegeTeam = () => {
  const navigate = useNavigate();

  // College team coaches
  const collegeCoaches = [
    {
      id: 201,
      name: 'Bob Alig',
      title: 'Director',
      credential: 'Former Director, UPenn Admissions',
      photo: '/images/team/bob-alig.jpg',
      schools: [
        { name: 'University of Pennsylvania', logo: '/images/logos/upenn.png' }
      ],
    },
    {
      id: 202,
      name: 'Corinne Kang',
      title: 'Senior Expert Coach',
      credential: 'Former Senior Admissions Director, UC Berkeley & Admissions Interviewer, Yale',
      photo: '/images/team/corinne-kang.jpg',
      schools: [
        { name: 'UC Berkeley', logo: '/images/logos/uc-berkeley.png' },
        { name: 'Yale University', logo: '/images/logos/yale.png' }
      ],
    },
    {
      id: 203,
      name: 'Sharon Joyce',
      title: 'Senior Expert Coach',
      credential: 'Former Assoc. Director, UC Berkeley Admissions',
      photo: '/images/team/sharon-joyce.jpg',
      schools: [
        { name: 'UC Berkeley', logo: '/images/logos/uc-berkeley.png' }
      ],
    },
    {
      id: 204,
      name: 'Lucas Jacob',
      title: 'Writing Specialist',
      credential: '16 years in college guidance at elite schools & Fulbright Fellow',
      photo: '/images/team/lucas-jacob.jpg',
      schools: [],
    },
    {
      id: 205,
      name: 'Maren Savage',
      title: 'Senior Expert Coach',
      credential: 'Former Admissions Reader at Stanford University, UC Berkeley, & Carnegie Mellon',
      photo: '/images/team/maren-savage.jpg',
      schools: [
        { name: 'Stanford University', logo: '/images/logos/stanford.png' },
        { name: 'UC Berkeley', logo: '/images/logos/uc-berkeley.png' }
      ],
    },
    {
      id: 206,
      name: 'Judith Silverman Hodara',
      title: 'Co-Founder & Director',
      credential: 'Former Associate Director, Domestic & International Admissions, UPenn',
      photo: '/images/team/judith-hodara.jpg',
      schools: [
        { name: 'University of Pennsylvania', logo: '/images/logos/upenn.png' }
      ],
    },
  ];

  const faqItems = [
    {
      question: 'How does the Free Consultation work?',
      answer: (
        <>
          <p>
            In a 30-minute call, you (or your student) will connect with an experienced college admissions consultant who has reviewed the background information you share in advance. We'll offer personalized feedback on strengths, challenges, and goals; provide honest insights on school fit and application strategy; and, if you choose to move forward, recommend the coach who's the best match.
          </p>
          <p>
            <strong>It's a valuable first step toward a tailored, thoughtful admissions journey.</strong> To schedule your Free Consultation, just fill out our contact form or email us at info@fortunaadmissions.com.
          </p>
        </>
      ),
    },
    {
      question: "What makes Fortuna's team different from other college admissions consulting firms?",
      answer: (
        <>
          <p>
            Fortuna is one of the world's leading college admissions consulting services. Our team includes former admissions directors and senior professionals from the world's top universities in the US, UK, and Europe. We combine insider insight with a personalized, mentorship-driven approach that supports students through every stage of the college admissions process – from strategy and school selection to essays, interviews, and decision-making.
          </p>
        </>
      ),
    },
    {
      question: 'How do you match students with coaches?',
      answer: (
        <>
          <p>
            We take into account individual goals, academic interests, target schools, and working style to recommend the best-fit coach to support their success. If you have a specific coach in mind, we'll do our best to accommodate your preference depending on availability.
          </p>
        </>
      ),
    },
    {
      question: 'Can I work with more than one coach?',
      answer: (
        <>
          <p>
            Yes. Students who choose our All-Inclusive Application Package work with a primary coach and also receive support from specialists in areas such as essay review and college interview preparation. Even when working one-on-one, our team collaborates behind the scenes – so students benefit from the collective expertise of our entire group of college admissions coaching professionals.
          </p>
        </>
      ),
    },
    {
      question: 'Do I need a private admissions coach if I already have a high school counselor?',
      answer: (
        <>
          <p>
            Many students have excellent school counselors and teachers – but even the most dedicated professionals are often responsible for hundreds of students, limiting the time and depth of support they can offer. While they may review essays or provide general advice, most have not served on selective admissions committees and may not fully understand what sets top applicants apart.
          </p>
          <p>
            Our coaches do. Every member of the Fortuna team has firsthand experience reviewing applications as part of the admissions committees at elite institutions. We bring that insider knowledge to help students refine their strategy, strengthen their materials, and stand out in an increasingly competitive process. Our work complements school-based support, offering a level of personalization and strategic insight that can make all the difference.
          </p>
        </>
      ),
    },
    {
      question: 'Do your coaches only work with Ivy League applicants?',
      answer: (
        <>
          <p>
            Not at all. While many of our clients apply to Ivy League and other highly selective U.S. universities, we work with students targeting a wide range of institutions. This includes top liberal arts colleges, leading STEM programs, and renowned international universities such as the University of Cambridge, Imperial College London, École Normale Supérieure (Paris), and Delft University of Technology, among others. Our goal is to help students find and gain admission to the schools that best match their aspirations and strengths.
          </p>
        </>
      ),
    },
    {
      question: 'Can you support students in IB or other international curricula?',
      answer: (
        <>
          <p>
            Definitely. Many of our coaches specialize in advising IB students and are well-versed in how US and international colleges interpret IB scores, coursework, and predicted grades. We also work with students pursuing A-Levels, the French Baccalaureate, and students from other academic systems.
          </p>
        </>
      ),
    },
    {
      question: 'What kind of results do your students achieve?',
      answer: (
        <>
          <p>
            Each year, Fortuna students are admitted to top US colleges and leading global universities, often with significant scholarships. Our clients have earned spots at schools including Stanford, Harvard, Brown, MIT, UC Berkeley, Pomona, NYU, Oxford, Cambridge, and more. Whether you're aiming for an Ivy League university or a top liberal arts or STEM school, our college application support can elevate your chances.
          </p>
        </>
      ),
    },
    {
      question: "What's the best way to choose the right coach for me?",
      answer: (
        <>
          <p>
            Start with a Free Consultation. We'll talk through your goals and recommend the college admissions consultant or package that makes the most sense based on your needs.
          </p>
        </>
      ),
    },
    {
      question: 'How do you recruit your coaches?',
      answer: (
        <>
          <p>
            We're highly selective. Most of our coaches are former admissions professionals from top schools like Harvard, Stanford, UPenn, and Oxbridge. Many served as directors or senior members of the admissions committee. Several of us worked together or knew each other when we worked at these institutions; often our recruits come through our extensive school networks. Every recruit is selected not just for their credentials and admissions insight, but also for their coaching skills, empathy, and commitment to our collaborative ethos. If you are interested in joining the Fortuna team, reach out to us at info@fortunaadmissions.com.
          </p>
        </>
      ),
    },
  ];

  return (
    <>
      <SEO 
        title="College Admissions Team"
        description="Meet our expert college admissions coaches who are former admissions officers from top universities including Harvard, Stanford, MIT, and more."
        keywords="college admissions team, college consultants, former college admissions officers, undergraduate admissions"
        image="/images/team/og-image.jpg"
      />
      <div className="page college-team">
        {/* Hero Section */}
        <section className="college-team-hero">
          <div className="container">
            <h1 className="college-team-hero-heading">Meet the Team Behind Your Success</h1>
            <p className="college-team-hero-subheading">
              We are experts in taking the complexities out of the college admissions process.
            </p>
          </div>
        </section>

        {/* Body Section */}
        <section className="college-team-body">
          <div className="container">
            <p className="college-team-intro">
              <span className="college-team-intro-highlight">Our team guides both students and parents</span> through every step of the admissions journey, offering strategic advice, thoughtful mentorship, and steady support for key decisions and milestones. Our dedicated coaches and specialist advisors work together with families to make the process as smooth and empowering as possible, ensuring every student moves forward with clarity, confidence, and purpose.
            </p>
          </div>
        </section>

        {/* Why Choose Fortuna Section */}
        <section className="college-team-why-choose">
          <div className="container">
            <h2 className="college-team-section-heading">Why Choose Fortuna?</h2>
            <div className="college-team-features">
              <div className="college-team-features-left">
                <div className="college-team-feature">
                  <p>
                    <strong>We are more than college admissions consultants – we are trusted partners.</strong>
                    <br />
                    We provide thoughtful, expert guidance at every phase of the college admissions journey, balancing realistic strategy with honoring each student's vision and strengths.
                  </p>
                </div>
                <div className="college-team-feature">
                  <p>
                    <strong>We know the inner workings of the admissions process.</strong>
                    <br />
                    Our consultants are deeply connected to the ever-evolving landscape of global higher education. As former admissions decision-makers, we offer insider insights and up-to-date strategies to help students stand out.
                  </p>
                </div>
                <div className="college-team-feature">
                  <p>
                    <strong>We bring a global perspective to your journey.</strong>
                    <br />
                    Our team's international experience — studying, working, and living across countries and cultures — ensures sound, strategic advice for students pursuing opportunities both domestically and abroad.
                  </p>
                </div>
              </div>
              <div className="college-team-features-right">
                <div className="college-team-feature">
                  <p>
                    <strong>We offer tailored support, when and where you need it.</strong>
                    <br />
                    Whether you're starting in 8th grade or refining applications in senior year, our personalized roadmaps adapt to each student's journey. The Fortuna Admissions team includes specialists that support you on:
                  </p>
                  <ul className="college-team-support-list">
                    <li>College selection</li>
                    <li>Application strategy</li>
                    <li>Essay drafting and writing</li>
                    <li>Interviewing strategy</li>
                    <li>Personal profile development</li>
                    <li>Linked-in and resume building</li>
                    <li>Strategies for college visits</li>
                    <li>Summer programs, gap year ideas and research opportunities</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Approach Section */}
        <section className="college-team-approach">
          <div className="container">
            <h2 className="college-team-section-heading">
              Our Team Approach <span className="college-team-approach-highlight">to Your Success</span>
            </h2>
            <p className="college-team-approach-text">
              When you partner with Fortuna, you don't just work with one coach – you benefit from the collective expertise and insight of our entire team. Thanks to our collaborative approach, every student draws on the diverse experiences and institutional knowledge of a global network of admissions professionals. It's a team effort designed to help each student not only get accepted, but to thrive at the college that fits them best.
            </p>
          </div>
        </section>

        {/* Team Grid Section */}
        <section className="college-team-grid-section">
          <div className="container">
            <h2 className="college-team-section-heading">
              Fortuna <span className="college-team-coaches-highlight">Coaches</span>
            </h2>
            <TeamGrid coaches={collegeCoaches} />
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="college-team-testimonials">
          <div className="container">
            <h2 className="college-team-testimonials-heading">REAL REVIEWS FROM REAL CLIENTS</h2>
            <p className="college-team-testimonials-subtitle">Students Love Working With Us</p>
            <Slider 
              className="college-team-testimonials-slider"
              dots={true}
              infinite={true}
              speed={500}
              slidesToShow={3}
              slidesToScroll={1}
              autoplay={false}
              pauseOnHover={true}
              arrows={true}
              responsive={[
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 2,
                    arrows: true,
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 1,
                    arrows: false,
                  }
                }
              ]}
            >
              {collegeTestimonials.map((testimonial) => (
                <div key={testimonial.id} className="college-testimonial-slide">
                  <Card className="college-testimonial-card">
                    <h3 className="college-testimonial-headline">{testimonial.headline}</h3>
                    <p className="college-testimonial-quote">"{testimonial.quote}"</p>
                    <div className="college-testimonial-author">
                      <p className="college-testimonial-name">{testimonial.name}</p>
                    </div>
                  </Card>
                </div>
              ))}
            </Slider>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="college-team-faq">
          <div className="container">
            <h2 className="college-team-section-heading">Frequently Asked Questions</h2>
            <FAQ items={faqItems} defaultOpenIndex={0} />
          </div>
        </section>

        {/* CTA Section */}
        <section className="college-team-cta">
          <div className="container">
            <div className="college-team-cta-content">
              <p className="college-team-cta-text">
                Your College journey starts with a conversation. <strong>Talk to us today</strong>.
              </p>
              <Button
                variant="outline"
                size="large"
                onClick={() => navigate('/college/free-consultation')}
                className="college-team-cta-button"
              >
                Book Free Consultation →
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CollegeTeam;

