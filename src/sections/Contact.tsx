import { useRef } from 'react';
import toast from 'react-hot-toast';
import emailjs from '@emailjs/browser';
import { Parallax } from "react-parallax";
import AOS from 'aos';
AOS.init();

import image1 from "../assets/images/bg-character8.jpg";
import useStore from '../store';
const SERVICE_ID = import.meta.env.VITE_EMAIL_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const { setLoading } = useStore((state) => state);

  const sendEmail = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (!form.current) return;

    setLoading(true);

    toast.promise(
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY),
      {
        loading: 'Sending email...',
        success: <b>Email sent successfully!</b>,
        error: <b>Could not send the email.</b>,
      }
    ).finally(() => {
      setLoading(false);
    });
  };


  return (
    <div className="section bg-top bg-bottom py-0">
      <Parallax className="py-5" bgImage={image1} blur={1} strength={300}>
        <div className="py-5 mt-5 position-relative">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center"
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-delay="0"
                data-aos-duration="1000"
                data-aos-easing="ease"
              >
                <h2>Contact Me</h2>
                <div className="space-border"></div>
              </div>
            </div>
            <div className="col-lg-8 offset-lg-2"
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-delay="200"
              data-aos-duration="1000"
              data-aos-easing="ease"
            >
              <div className="contact_form_wrapper">
                <form ref={form} name="contactForm" id="contact_form" className="form-border" onSubmit={sendEmail}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="field-set">
                        <input type="text" name="Name" id="name" className="form-control" placeholder="Your Name" required />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="field-set">
                        <input type="text" name="Email" id="email" className="form-control" placeholder="Your Email" required />
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="field-set">
                      <textarea name="message" id="message" className="form-control" placeholder="Your Message" required></textarea>
                    </div>
                    <div id='submit' className="mt30">
                      <button type='submit' id='send_message' className="btn-main">
                        Send Message
                      </button>
                    </div>

                  </div>
                </form>
              </div>
              <div className="spacer-double"></div>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
}

export default Contact;