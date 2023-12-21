import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Anil Vishwakarma </span>
            from <span className="purple"> Satna, MP, India.</span>
            <br /> I Have Completed My Master of Computer Application (MCA)
            in Computer Science stream at AKS University, Satna.
            <br />
            Additionally, I am currently employed as a digital Marketing at
            Digitalsatya.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Competitive Programming
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Chess
            </li>
            <li className="about-activity">
              <ImPointRight /> Teaching
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Hope For Best Prepare For Worst!"{" "}
          </p>
          <footer className="blockquote-footer">Maya Angelou</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
