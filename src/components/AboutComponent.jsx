import "../blocks/AboutComponent.css";
import AboutPhoto from "../assets/tripleTenFinalProjPhoto.jpeg";

const AboutComponent = () => {
  return (
    <div className="about-component__container">
      <div className="about-component__image-wrapper">
        <img className="about-component__image" src={AboutPhoto} alt="" />
      </div>
      <div className="about-component__headers-wrapper">
        <h1 className="about-component__header">About the author</h1>
        <div className="about-component__paragraph-container">
          <p className="about-component__paragraph">
            This block describes the project author. Here you should indicate
            your name, what you do, and which development technologies you know.
            You can also talk about your experience with TripleTen, what you
            learned there, and how you can help potential customers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
