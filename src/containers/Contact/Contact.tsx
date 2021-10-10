import React from "react";
import { getSpannedTitle } from "../../utils";
import Map from "../../components/Image/Map";
import ContactForm from "../../components/ContactForm/ContactForm";

const Contact: React.FC = () => {
  return (
    <div className="contact">
      <main>
        <section className="contact" id="contact">
          <h2 className="tag section-title hasSpans">
            {getSpannedTitle("Get in touch")}
          </h2>
          <div className="tag form">
            <div className="contact--grid">
              <ContactForm />
              <div className="contact--content">
                <div className="map--wrapper">
                  <Map />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;
