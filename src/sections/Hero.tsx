import { ReactTyped } from "react-typed";
import AOS from 'aos';

AOS.init({
  offset: 200,
  duration: 800,
  easing: 'ease-in-out-sine',
  delay: 200,
  mirror: true
});

const Hero = () => {
  return (
    <div className="v-center">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-8">
            <h2 className="color"
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="1000"
              data-aos-easing="ease"
              data-aos-once="true"
            >
              I Am João Netto
            </h2>
            <div className="spacer-20"></div>
            <div className="h1_big"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1000"
              data-aos-easing="ease"
              data-aos-once="true"
            >
              <ReactTyped
                strings={["Software Engineer", "Problem Solver", "Music Producer", "Kitesurfer", "AI Enthusiast"]}
                typeSpeed={60}
                backSpeed={50}
                loop
              />
            </div>
            <ul className="list_location"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="1000"
              data-aos-easing="ease"
              data-aos-once="true"
            >
              <li><h4>Brasil 🇧🇷</h4><span>João Pessoa, Paraíba</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;