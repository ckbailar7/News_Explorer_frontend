import "../blocks/SearchFormComponent.css";

const SearchFormComponent = ({}) => {
  return (
    <div className="SearchFormComponent__container">
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
