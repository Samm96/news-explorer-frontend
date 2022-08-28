import "./About.css";
import authorImage from "../../images/Author/Samantha-author-op1.png";

const About = () => {
  return (
    <section className="about">
      <div className="about__container">
        <img className="about__author" src={authorImage} alt="Author" />
        <div className="about__text-container">
          <h2 className="about__title">About the author</h2>
          <p className="about__text">
            Samantha Horsch is visual designer and a recent full-stack web
            developer. She has experience working with both frontend and backend
            technologies including HTML, CSS, JavaScript, and the M.E.R.N stack.
          </p>
          <p className="about__text">
            The soon-to-be graduate of Practicum's Software Development program
            has participated in an apiary, working with an international team of
            many time zones to successfully develop a responsive app for a real
            world company.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
