import { Parallax } from "react-parallax";
import { Link } from "react-scroll";
import { Toaster } from 'react-hot-toast';

import Navbar from "../layout/Navbar";
import Preloader from "../layout/Preloader";
import Loader from "../layout/Loader";
import ScrollToTopBtn from '../layout/ScrollToTop';

import Hero from '../sections/Hero';
import About from '../sections/About';
import Blockquote from "../sections/Blockquote";
import Resume from '../sections/Resume';
// import Blog from '../sections/Blog';
import Contact from '../sections/Contact';
import Footer from '../sections/Footer';

import { GlobalStyles } from '../styles/base';

import image1 from "../assets/images/bg-character5.jpg";

function Home() {
  return (
    <>
      <Toaster />
      <GlobalStyles />
      <Preloader />
      <Loader />
      <div className="home">
        <header id="header-wrap">
          <Navbar />
        </header>
        <section id="hero-area" className="bg-bottom py-0">
          <Parallax bgImage={image1} blur={2}>
            <Hero />
            <Link smooth spy to="about">
              <span className="mouse transition" id="fly">
                <span className="scroll"></span>
              </span>
            </Link>
          </Parallax>
        </section>
        <section id="about" className="pb-0">
          <Blockquote />
        </section>
        <section id="tech-stack" className="pb-0">
          <About />
        </section>
        <section id="resume" className="pb-0">
          <Resume />
        </section>
        {/* <section id="blog" className="pb-0">
          <Blog />
        </section> */}
        <section id="contact" className="pb-0">
          <Contact />
          <Footer />
        </section>
      </div>
      <ScrollToTopBtn />
    </>
  );
}

export default Home;
