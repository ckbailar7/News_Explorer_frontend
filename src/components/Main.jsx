import "../blocks/Main.css";
import SearchFormComponent from "../components/SearchFormComponent";
import NewsCardComponent from "./NewsCardComponent";
import AboutComponent from "../components/AboutComponent";

const Main = ({}) => {
  return (
    // Main — the main component of the main page
    <main className="main">
      <SearchFormComponent />
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
