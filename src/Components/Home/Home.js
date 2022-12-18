import "./Home.css";

function Home() {
  return (
    <div className="container" style={{ height: "90vh" }}>
      <div className="row homeStarter">
        <div className="col-md-6 col-sm-12">
          <h4 className="myGreeting">Hello, This is Me...</h4>
          <h2 className="myName">Fabien Thich</h2>
          <div className="myStatus">Software Engineer Intern For North P&D, Inc.</div>
          <div>
            <a href="https://www.linkedin.com/in/fabienthich">
              <img
                className="socials"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH0AAAB9CAMAAAC4XpwXAAAAZlBMVEX///8AAABaWlqioqJgYGD29vb7+/t7e3vj4+PExMTIyMju7u4uLi6oqKiQkJAICAgiIiJpaWk5OTmcnJzd3d0+Pj6vr6/Ozs4dHR3V1dWDg4Nubm40NDS9vb1JSUm3t7dSUlIWFhbwAbO6AAADtElEQVRoge2ba5PqIAyGe7e2u1qt1Xqp5/j//+QRK7VCJoSLcj7wzuyMzhqfhUISQjaKgoKCgoKC/kcVRZHff77Ozat0dU66fh2v+y45r9Kq/hL5mGYxpCw9fpicH04NiB7VnA75x9hlu0XQo7Zt+RH2bqFEj1rsnLPrM5HNtHG7BuuTBpvp5JC/x5YarH7viF0n2mymxMnwl70R/D78pT18ZchmWlmyC7NZ50qsgkB+sYLH8cXC99Vq36bS1njt1bYjf4zeEJ/bj5xpazT5hYuRM11Mlp7dap8r0Yfb7HNR2vt+6RAex5perzZ1r7B6vYXv7qGP0nr0e9F6VecaKnYb8Qs0Aq4074PWxDGJ6UhDn3vR9KwNlwdwIluK09bq0yMp6acOXnpoqQs6cQJ3op0bekxLtOW83Q19QTErJTNH9JhyymlRek49KAF0wuKFovpEH1hifyYFbIDeqQ0PstVEH8a3VwoeOmYflFbQmelJL/i0/DGkqz0OdGh60icvRNm6EL1RGR0BI07PbemxqrqRIvQp7lamdNXWRY2eXpAUMMAvyhRGkM3rTy7PXXfdk3JUuLSE20jhTZywgpqdw3TculLRyYLp+IoBF52SXhyGYSmEMJiOfxOcxXObU/PDdGO+vu0fr5sqyldjHtP/zucVpuOZPVyZ4nQeex90PpdlN33uOgtBMB33FHAmjdGHn9kHZwdWmI5m1kUH2kD05wpZv3vm14aG6R22Wwv4CIPQRU1hDKb3KH1tQu82f6fXU/oE09cYPQdNcPptmd+33PT0cTrqbkzGPu7zyU3xrzcYu8Fz5yGHTz4PoibPXXvNT3kO/x1fdgZrXmO/czovDPD33JMb7HcNXyfSf0l03Nfhft6ejvt5PMbZ0/EYh8d3ezoe3/HcBooyenRFZvRhOg7Hc1pruiqnRfN5a7oqRcPOMvZ05U0tco6zpivPcdgZ1pquPgRh53cKnb83O79jtYt281DGcsd9Nr7mj3IY3ydIhCXULhR1G7LM6jaea1Z+63Wea5VyivHNOq0c6Ghz9iZ565AL9KLHuel3Ukjxglyfj2rR3W4r1lREVy3BNe4m5HuZ+JpoKJODhVYjhNc7Kc/3cY7vIinlxTd5vYf1fAf9qofbyuj+3W/vgee+C889J577bTz3GkV++6zuqox7zLQ9HCSv/XWRUW9h46q3MPLcVxn57SllKhdwGVXSB/ppH/wULmXO1X2ol5jJZx/1KH895Fz++udf8vW/A0FBQUFBQRT9A92ONaPtwODXAAAAAElFTkSuQmCC"
              />
            </a>
            <a href="https://github.com/FabienThich">
              <img
                className="socials"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtXmyWwGVESVJ9-ip22SkZPDZRtIfEfpM-mVWUTvOlgg&s"
              />
            </a>
          </div>
          <a /**download="Resume.pdf"**/>
            <button className="btn btn-primary rounded-pill download">
              Download Resume
            </button>
          </a>
        </div>

        <div className="col"></div>
      </div>
    </div>
  );
}

export default Home;
