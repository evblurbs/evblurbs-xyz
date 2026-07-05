import { Link } from "react-router-dom";
import "./Page.css";

const About = () => {
  return (
    <div className="page">
      <div className="page-content">
        <h1 className="page-title">About</h1>
        <div className="page-body">
          <p>
            Hi, I'm Evan — a software engineer based in New York. I've spent over
            a decade at Amazon building high-scale front-end products across
            International Expansion and Advertising, and lately I've been going
            deep on computer vision and AI in my free time, most recently
            teaching a camera to find made baskets in my pickup games.
          </p>
          <p>
            Outside of work I organize{" "}
            <Link to="/projects/saturday-hoops">Saturday Hoops NYC</Link>, a
            pick-up basketball community I run. I also read constantly, shoot the
            occasional photo with a Ricoh GR IIIx, and spend a lot of time
            exploring NYC's food scene. I root for the Knicks and the Liberty.
          </p>
          <p>
            This site is where I keep the things I'm building, reading, and
            learning. Look around, and feel free to{" "}
            <a href="mailto:hello@evblurbs.xyz">reach out</a> any time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
