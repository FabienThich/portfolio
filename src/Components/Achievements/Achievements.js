import "./Achievements.css";
import { Tabs, Tab } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Cards from "./Cards.js";
import CertTable from "./Table.js";

function Achievements() {
  return (
    <div className="container Pad border">
      <h1>Achievements</h1>

      <Tabs
        className="TabsFrame rounded-3"
        justify
        variant="pills"
        defaultActiveKey="academic"
      >
        <Tab
          title="Academic"
          tabClassName="Tabs"
          eventKey="academic"
          className="TabsContent rounded-3"
        >
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
        </Tab>
        <Tab
          title="Certifications"
          tabClassName="Tabs"
          eventKey="certifications"
          className="TabsContent rounded-3"
        >
          <Table striped hover className="TableFrame">
            <thead>
              <tr>
                <th>Date</th>
                <th>Certificate Name</th>
                <th>Company</th>
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
          title="Promo Video"
          tabClassName="Tabs"
          eventKey="promo"
          className="TabsContent rounded-3"
        >
          hi
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
