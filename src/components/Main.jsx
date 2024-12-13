import "../blocks/Main.css";
import NewsCardComponent from "./NewsCardComponent";
import AboutComponent from "./AboutComponent";
const Main = ({}) => {
  return (
    // Main — the main component of the main page
    <main className="main">
      <p>This is from the MAIN component </p>
      {/* NewsCard — the news articles */}
      <NewsCardComponent></NewsCardComponent>
      {/* About — the component that displays information about the author */}
      <AboutComponent></AboutComponent>
      {/* Footer Component moved from app.js */}
    </main>
  );
};

export default Main;
