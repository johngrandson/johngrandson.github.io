/* eslint-disable react/no-unescaped-entities */
import AOS from 'aos';
AOS.init();

const resumeData = {
  experiences: [
    {
      period: "11/2021 - now",
      title: "Senior Software Engineer",
      company: "Sortium @ Miami, Florida",
      responsibilities: [
        "Developed a solution to monitor credit card fingerprints, preventing the use of stolen cards on our platform and maintaining a record of our customers' valid credit cards.",
        "Rewrote the legacy payment gateway code to a new pattern and maintainable solution.",
        "Removed the integration between the platform with Wyre and Checkout, then after it, implemented the KYC, Payments, Trades and Digital wallets systems with Fortress Trust and Sardine.AI solutions.",
        "Wrote all the solutions behind the payments, KYC/AML, Credit Card, Crypto Payouts, and Trades as the Customers' Digital Wallets, ACH and international wire transfers."
      ]
    },
    {
      period: "11/2024 - now",
      title: "Senior Software Engineer",
      company: "Gravity @ João Pessoa, Paraíba",
      responsibilities: [
        "Improved maintainability and scalability for 20 ISPs in Latin America by integrating Mikrotik with a REST API.",
        "Continuous integration and delivery working close to the Project Managers and Product Owners of the company.",
        "Created the Payment Gateway for the Gravity Software."
      ]
    },
    {
      period: "05/2021 - 11/2021",
      title: "Senior Software Engineer",
      company: "Popstand @ Los Angeles, California",
      responsibilities: [
        "Led a team to develop an NFT marketplace, facilitating over $2MM in transactions for a month.",
        "Developed financial solutions integrations with Wyre API to serve the customer's services like digital wallets, KYC, ACH, and international wire transfers all using USD and USDC."
      ]
    },
  ],
  education: [
    {
      period: "2023 - 2024",
      title: "MBA - Arquitetura Full Cycle",
      company: "FullCycle @ Online"
    },
    {
      period: "2018",
      title: "Bootcamp - Imersão Desenvolviment Front-end",
      company: "Mastertech @ São Paulo, São Paulo"
    },
    {
      period: "2017 - 2018",
      title: "Bootcamp - IOT and Backend Development with C#",
      company: "Escola SENAI de Informática @ São Paulo, São Paulo"
    }
  ],
  certifications: [
    {
      period: "2022",
      title: "RabbitMQ",
      company: "FullCycle",
      credential: "https://fullcycle.com.br/certificado/380f470c-fe74-4cbd-a93d-c6f7516ab09b"
    },
    {
      period: "2022",
      title: "Become a Blockchain Developer",
      company: "Educative",
      credential: "https://www.educative.io/verify-certificate/nzmqQZvRWDvuxnvQyYQpwlivKg79Elg9XcQ"
    },
    {
      period: "2021",
      title: "Learn Blockchain by Building Your Own in JavaScript",
      company: "Udemy",
      credential: "http://ude.my/UC-aaf3bd54-a116-4203-8cf5-9b3cd1c1bf08"
    },
    {
      period: "2020",
      title: "English Certification (C1 Advanced)",
      company: "EF SET",
      credential: "https://www.efset.org/cert/uodNZV"
    },
    {
      period: "2020",
      title: "JavaScript (Basic)",
      company: "HackerRank",
      credential: "https://www.hackerrank.com/certificates/92c190a95f28"
    },
    {
      period: "2020",
      title: "Problem Solving (Basic)",
      company: "HackerRank",
      credential: "https://www.hackerrank.com/certificates/d29819a4d2a2"
    },
  ]
};


const Resume = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <h2>My Resume</h2>
          <div className="space-border"></div>
        </div>
      </div>
      <div className="row gh-5">
        <div className="col-lg-6" data-aos="fade-up" data-aos-once="true">
          <div className="p-4">
            <h3 className="s_border">Experiences</h3>
            <ul className="d_timeline">
              {resumeData.experiences.map((exp, index) => (
                <li key={index} className="d_timeline-item">
                  <h3 className="d_timeline-title">{exp.period}</h3>
                  <p className="d_timeline-text">
                    <span className="d_title">{exp.title}</span>
                    <span className="d_company">{exp.company}</span>
                    <ul>
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx}>{resp}</li>
                      ))}
                    </ul>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="col-lg-6" data-aos="fade-up" data-aos-once="true">
          <div className="p-4">
            <h3 className="s_border">Education</h3>
            <ul className="d_timeline">
              {resumeData.education.map((edu, index) => (
                <li key={index} className="d_timeline-item">
                  <h3 className="d_timeline-title">{edu.period}</h3>
                  <p className="d_timeline-text">
                    <span className="d_title">{edu.title}</span>
                    <span className="d_company">{edu.company}</span>
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4">
            <h3 className="s_border">Certifications</h3>
            <ul className="d_timeline">
              {resumeData.certifications.map((cert, index) => (
                <li key={index} className="d_timeline-item">
                  <h3 className="d_timeline-title">{cert.period}</h3>
                  <p className="d_timeline-text">
                    <span className="d_title">{cert.title}</span>
                    <span className="d_company">{cert.company}</span>
                    {cert.credential && <a href={cert.credential} target="_blank" rel="noreferrer">Credential</a>}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;