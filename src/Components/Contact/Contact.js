import "./Contact.css";

function Contact() {
  return (
    <div className="full">
      <div className="container Pad">
        <h1>Contact Me</h1>

        <div className="row gy-5 justify-content-center">
          <div className="col-lg-8 col-sm-12 rounded-5 wholeForm">
            <form
              action="https://formsubmit.co/ce2fd17a373249f623ee75903ce2d2f5"
              method="POST"
            >
              <input
                type="hidden"
                name="_subject"
                value="A visitor left a message on your portfolio!"
              />
              <input type="hidden" name="_template" value="box" />
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_next"
                value="https://fabienthich.github.io/portfolio/"
              />

              <div className="row gy-5 justify-content-center text-center">
                <div className="col-lg-5 col-sm-12">
                  <input
                    type="text"
                    name="name"
                    className="rounded-5 inputBoxHead"
                    placeholder="Name"
                    required
                  />
                </div>

                <div className="col-lg-5 col-sm-12">
                  <input
                    type="email"
                    name="email"
                    className="rounded-5 inputBoxHead"
                    placeholder="Email"
                    required
                  />
                </div>
              </div>

              <div className="row gy-5 justify-content-center">
                <div className="col-8">
                  <input
                    type="text"
                    name="message"
                    placeholder="Message"
                    required
                    className="rounded-5 inputBoxBody"
                  />
                </div>
              </div>

              <div className="row gy-5 justify-content-center">
                <div className="col-8">
                  <button type="submit" className="btn btn-dark rounded-pill">
                    Send Form
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
