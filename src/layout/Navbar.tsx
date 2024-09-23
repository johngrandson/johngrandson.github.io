import { useEffect, useState, useRef } from "react";
import { Link } from "react-scroll";

const Navbar = function () {
  const [showMenu, setMenu] = useState(false);
  const [isSticky, setSticky] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current && window.scrollY > headerRef.current.offsetTop) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [headerRef]);
  return (
    <header ref={headerRef} className={isSticky ? "sticky" : ""} id="header-wrap">
      <nav className="navbar transition">
        <div className="container">
          <div className="navbar-brand color-white logo">
            const JN: string = &quot;👨‍💻 Software Engineer&quot;;
          </div>
          <div className="dekstopmenu">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link transition font-20" activeClass="active" spy to="hero-area">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link transition font-20" activeClass="active" spy to="about">
                  About Me
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link transition font-20" activeClass="active" spy to="tech-stack">
                  My Tech Stack
                </Link>
                </li>
              <li className="nav-item">
                <Link className="nav-link transition font-20" activeClass="active" spy to="resume">
                  My Resume
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link transition font-20" activeClass="active" spy to="blog">
                  Blog
                </Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link transition font-20" activeClass="active" spy to="contact">
                  Contact Me
                </Link>
              </li>
            </ul>
          </div>
          {showMenu &&
            <div className="mobilemenu" >
              <ul className="navbar-nav mr-auto w-100 justify-content-end clearfix">
                <li className="nav-item">
                  <Link className="nav-link" activeClass="active" spy to="hero-area" onClick={() => setMenu(!showMenu)}>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" activeClass="active" spy to="about" onClick={() => setMenu(!showMenu)}>
                    About Me
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" activeClass="active" spy to="tech-stack" onClick={() => setMenu(!showMenu)}>
                    My Tech Stack
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" activeClass="active" spy to="resume" onClick={() => setMenu(!showMenu)}>
                    My resume
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link className="nav-link" activeClass="active" spy to="blog" onClick={() => setMenu(!showMenu)}>
                    Blog
                  </Link>
                </li> */}
                <li className="nav-item">
                  <Link className="nav-link" activeClass="active" spy to="contact" onClick={() => setMenu(!showMenu)}>
                    Contact Me
                  </Link>
                </li>
              </ul>
            </div>
          }
          <button className="burgermenu" type="button" onClick={() => setMenu(!showMenu)}>
            <i className="fa fa-bars" aria-hidden="true"></i>
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar;