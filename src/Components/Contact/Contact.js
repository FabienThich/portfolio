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
                className="d-flex justify-content-center align-items-center mb-2"
                data-aos="fade-up"
                data-aos-delay="150"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-envelope-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                </svg>
                <p className="mt-3 ms-2 contactEmail">fabien06@my.yorku.ca</p>
              </div>

              <div
                data-aos="fade-up"
                data-aos-delay="250"
                data-aos-offset="-100"
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
