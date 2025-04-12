import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Chaitali Patil </span>
            from <span className="purple"> Shirpur, India.</span>
            <br />
            I'm a 2nd-year Computer Engineering student with a strong interest in web and app development. I’ve been building custom websites using technologies like ReactJS, JavaScript, HTML5, and CSS3.
            <br />
            I actively practice Data Structures and Algorithms (DSA) to improve my problem-solving skills and strengthen my coding fundamentals—often solving challenges on platforms like LeetCode and Codeforces.
            Beyond coding, I enjoy learning new technologies, improving my logical thinking, and exploring creative outlets like writing and design. I'm always excited to work on new projects and expand my skills!
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening Songs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
