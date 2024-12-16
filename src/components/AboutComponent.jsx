import "../blocks/AboutComponent.css";
import AboutPhoto from "../assets/AboutPlaceholderPhoto.svg";

const AboutComponent = ({}) => {
  return (
    <div className="AboutComponent__container">
      <div className="AboutComponent__image_wrapper">
        <img className="AboutComponent__image" src={AboutPhoto} alt="" />
      </div>
      <div className="AboutComponent__HeadersWrapper">
        <h1 className="AboutComponent__Header1">About the author</h1>
        <p className="AboutComponent__paragraph">
          This block describes the project author. Here you should indicate your
          name, what you do, and which development technologies you know. You
          can also talk about your experience with TripleTen, what you learned
          there, and how you can help potential customers.
        </p>
      </div>
    </div>
  );
};

export default AboutComponent;
