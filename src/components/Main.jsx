import "../blocks/Main.css";
import NewsCardComponent from "./NewsCardComponent";
import AboutComponent from "../components/AboutComponent";
const Main = ({}) => {
  return (
    // Main — the main component of the main page
    <main className="main">
      <p>This is from the MAIN component </p>
      {/* NewsCard — the news articles */}
      <NewsCardComponent></NewsCardComponent>
      {/* About — the component that displays information about the author */}
      <div className="AboutComponent__wrapper">
        <AboutComponent />
      </div>
    </main>
  );
};

export default Main;
