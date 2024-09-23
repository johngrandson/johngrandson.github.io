import { Parallax } from 'react-parallax';
import { FaCode, FaDatabase, FaCloud, FaTools } from 'react-icons/fa';
import image1 from "../assets/images/bg-character2.jpg";

const technologies = [
  {
    title: 'Frontend',
    skills: ['HTML', 'CSS', 'React', 'Vue', 'Angular', 'State Management'],
    icon: <FaCode className="text-black text-3xl mb-2" />
  },
  {
    title: 'Backend & Databases',
    skills: ['Node JS', 'Postgres', 'MongoDB', 'Redis', 'GraphQL', 'REST', 'Docker', 'Microservices', 'Serverless', 'Firebase', 'Hasura', 'Prisma', 'NestJS'],
    icon: <FaDatabase className="text-black text-3xl mb-2" />
  },
  {
    title: 'Cloud & DevOps',
    skills: ['AWS', 'Google Cloud', 'Netlify', 'Vercel', 'CI/CD', 'Github Actions'],
    icon: <FaCloud className="text-black text-3xl mb-2" />
  },
  {
    title: 'Other Technologies',
    skills: ['Javascript', 'Typescript', 'Python', 'C#', 'Rust', 'Linux', 'Elixir', 'Unity', 'RabbitMQ', 'Blockchain', 'Ethereum', 'NFTs', 'Web3', 'DApps'],
    icon: <FaTools className="text-black text-3xl mb-2" />
  }
];

const About = () => {
  return (
    <div className="section bg-top bg-bottom py-0">
      <Parallax className="pb-5" bgImage={image1} strength={300} blur={2}>
        <div className="py-5 position-relative">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h2>My Tech Stack</h2>
                <div className="space-border"></div>
              </div>
            </div>
            <div className="row gh-5">
              <div className="col-lg-9" data-aos="fade-up" data-aos-once="true">
                <div className="p-4">
                  <h3 className="s_border">Experiences</h3>
                  <ul className="d_timeline">
                    {technologies.map((tech, index) => (
                      <li key={index} className="d_timeline-item_stack">
                        <span className="icon">{tech.icon}</span>
                        <h3 className="d_timeline-title">{tech.title}</h3>
                        <p className="d_timeline-text">
                          <span className="d_title">{tech.skills.map((skill) => `${skill}, `)}</span>
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default About;
