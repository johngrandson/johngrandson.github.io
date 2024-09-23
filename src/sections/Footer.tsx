const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p>Copyright © JN {currentYear}</p>
          </div>
          <div className="col-md-6">
            <div className="social-icons">
              <a href="https://github.com/johngrandson" target="_blank" rel="noreferrer"><i className="fa fa-github"></i></a>
              <a href="https://www.linkedin.com/in/joaonettopb" target="_blank" rel="noreferrer"><i className="fa fa-linkedin"></i></a>
              <a href="https://www.instagram.com/johngrandson_/" target="_blank" rel="noreferrer"><i className="fa fa-instagram"></i></a>
              <a href="https://soundcloud.com/theghostmachine" target="_blank" rel="noreferrer"><i className="fa fa-soundcloud"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;