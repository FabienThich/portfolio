import "./Contact.css";

function Contact() {
  return (
    <div style={{ backgroundColor: "black" }} className="Pad">
      <div className="container">
        <h1 data-aos="fade-up" className="darkHeading">
          Contact
        </h1>
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8 col-sm-12 rounded-5 wholeForm">
            <form
              action="https://formsubmit.co/ce2fd17a373249f623ee75903ce2d2f5"
              method="POST"
            >
              <input type="text" name="_honey" style={{ display: "none" }} />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="box" />

              <input
                type="hidden"
                name="_subject"
                value="A visitor left a message on your portfolio!"
              />

              <input
                type="hidden"
                name="_next"
                value="https://fabienthich.github.io/portfolio/"
              />

              <div
                data-aos="fade-up"
                data-aos-delay="50"
                // data-aos-offset="-100"
                className="col"
              >
                <label for="name">Name</label>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="50"
                // data-aos-offset="-100"
                className="col"
              >
                <input
                  type="text"
                  name="name"
                  className="rounded-3 inputBoxHead"
                  required
                />
              </div>

              <div
                data-aos="fade-up"
                data-aos-delay="100"
                // data-aos-offset="-100"
                className="col"
              >
                <label for="email">Email</label>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="100"
                // data-aos-offset="-100"
                className="col"
              >
                <input
                  type="email"
                  name="email"
                  className="rounded-3 inputBoxHead"
                  required
                />
              </div>

              <div
                data-aos="fade-up"
                data-aos-delay="150"
                // data-aos-offset="-100"
                className="col"
              >
                <label for="message">Message</label>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="150"
                // data-aos-offset="-100"
                className="col"
              >
                <textarea
                  type="text"
                  name="message"
                  className="rounded-3 inputBoxBody"
                  rows="3"
                  required
                />
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="200"
                // data-aos-offset="-100"
              >
                <button
                  type="submit"
                  className="btn btn-dark rounded-pill submitForm"
                >
                  Send Form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
