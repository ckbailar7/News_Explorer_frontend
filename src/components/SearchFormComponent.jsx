import "../blocks/SearchFormComponent.css";

const SearchFormComponent = ({}) => {
  return (
    <div className="SearchFormComponent__container">
      <h1 className="SearchFormComponent__container-header_1">
        What's going on in the world?
      </h1>
      <h2 className="SearchFormComponent__container-header_2">
        Find the latest news on any topic and save them to your personal account
      </h2>
      <div className="SearchFormComponent__Search-Bar__container">
        <input
          type="text"
          className="SearchFormComponent__Search-Bar__container-input"
          placeholder="Enter topic"
        />
        <button className="SearchFormComponent__Search-Bar__container-search_button">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchFormComponent;
