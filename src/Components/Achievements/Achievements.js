import "./Achievements.css";
import { Tabs, Tab } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Cards from "./Cards.js";
import CertTable from "./Table.js";

function Achievements() {
  return (
    <div className="container">
      <h1 data-aos="fade-up">Achievements</h1>

      <Tabs
        className="TabsFrame rounded-3"
        justify
        variant="pills"
        defaultActiveKey="academic"
        data-aos="fade-up"
      >
        <Tab
          title="Academic"
          tabClassName="Tabs"
          eventKey="academic"
          className="TabsContentExempt rounded-3"
        >
          <div className="row">
            {Cards.map((card) => {
              return (
                <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                  <div data-aos="fade-up" className="card">
                    <img src={card.image} className="card-img-top" />
                    <div className="card-body">
                      <h5 className="card-title">
                        {card.title}
                        <p className="status">{card.status}</p>
                      </h5>
                      <p className="card-text">{card.description}</p>
                      <a
                        href={card.link}
                        className="btn btn-dark rounded-pill seeMore"
                      >
                        View Repo
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Tab>
        <Tab
          title="Certifications"
          tabClassName="Tabs"
          eventKey="certifications"
          className="TabsContentExempt rounded-3"
        >
          <Table striped hover className="TableFrame">
            <thead>
              <tr>
                <th>Date</th>
                <th>Certificate Name</th>
                <th>Issuer</th>
              </tr>
            </thead>
            <tbody>
              {CertTable.map((data) => {
                return (
                  <tr>
                    <td>{data.date}</td>
                    <td>{data.name}</td>
                    <td>{data.company}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Tab>
        <Tab
          title="Video"
          tabClassName="Tabs"
          eventKey="promo"
          className="TabsContent rounded-3"
        >
          <div
            className="text-center"
            style={{ width: "100%", height: "100%" }}
          >
            <iframe
              className="promoVideo"
              src="https://www.youtube.com/embed/kCmV9_Y_kqs"
            />
            {/* This iframe, or GET causes errors in console */}
          </div>
        </Tab>
        <Tab
          title="Volunteer"
          tabClassName="Tabs"
          eventKey="volunteer"
          className="TabsContentExempt rounded-3"
        >
          <div className="row mt-5 d-flex justify-content-around text-center">
            <div className="col-md-5 col-sm-12 mb-3">
              <h4 style={{ fontWeight: "bold" }}>Pham Learning</h4>
              <p className="volDesc mt-5">Description:</p>
              <p>
                Managed invoices and updated customer files through Wave
                Financial Services as well as log new customers into the
                companies online business system.
              </p>
              <p className="volDesc mt-5">Date:</p>
              <p>Oct ‘21 - July ‘22</p>
            </div>

            <div className="col-md-5 col-sm-12 mb-3">
              <h4 style={{ fontWeight: "bold" }}>Northview Heights</h4>
              <p className="volDesc mt-5">Description:</p>
              <p>
                Promoted SHSM and co-op at a grade 8 information night for
                parents and future students of Northview Heights. As well, I
                spoke to parents about concerns and the process to apply.
              </p>
              <p className="volDesc mt-5">Date:</p>
              <p>Nov 17, 2022</p>
            </div>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}

export default Achievements;

{
  /* <div className="container Pad">
      <h1>Achievements</h1>
      <div className="row">
        {Cards.map((card) => {
          return (
            <div className="col-lg-4 col-md-6 col-sm-12 g-5">
              <div className="card">
                <img src={card.image} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">
                    {card.title}
                    <p className="status">{card.status}</p>
                  </h5>
                  <p className="card-text">{card.description}</p>
                  <a
                    href={card.link}
                    className="btn btn-dark rounded-pill seeMore"
                  >
                    See More
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div> */
}
