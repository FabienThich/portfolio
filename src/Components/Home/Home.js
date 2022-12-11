import "./Home.css";

function Home() {
  return (
    <div className="containter" style={{height: '100vh'}}>
        <h4>Hello, This is Me...</h4>
        <h2>Fabien Thich</h2>
        <div className="homeDesc">Software Engineer For North P&D, Inc.</div>
      
      
      <div className="homeOptions">
        <a href="Resume.pdf" /**download="Resume.pdf"**/>
          <button className="btn btn-primary">Download Resume</button>
        </a>
      </div>
    </div>
  );
}

export default Home;
