import "./Page.css";

const About = () => {
  return (
    <div className="page">
      <div className="page-content">
        <h1 className="page-title">About</h1>
        <div className="page-body">
          <p>
            Welcome! I'm Evan — a front-end engineer who also happens to love
            books, photography, and basketball. This site started as a quick
            experiment when I was considering new opportunities this September,
            but I think I'll keep it going.
          </p>
          <p>
            When I'm not working or tinkering here, you'll probably find me
            exploring NYC's food scene, shooting hoops, or at a Nets or Liberty
            game.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
