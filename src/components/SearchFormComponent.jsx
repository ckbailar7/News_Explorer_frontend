import "../blocks/SearchFormComponent.css";

const SearchFormComponent = ({}) => {
  return (
    <section className="search-form">
      <h1 className="search-form__header">What's going on in the world?</h1>
      <p className="search-form__subtext">
        Find the latest news on any topic and save them to your personal account
      </p>
      <form className="search-form__bar">
        <input
          type="text"
          id="search-input"
          className="search-form__input "
          placeholder="Enter topic"
        />
        <button type="submit" className="search-form__button">
          Search
        </button>
      </form>
    </section>
  );
};

export default SearchFormComponent;
