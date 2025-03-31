import "../blocks/SearchFormComponent.css";

const SearchFormComponent = ({ handleSearch, loading }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    //The trim() method in JavaScript is used to remove any whitespace characters from the beginning and the end of a string.
    const searchQuery = e.target.elements.search.value.trim();
    if (searchQuery) {
      handleSearch(searchQuery);
    }
  };

  return (
    <section className="search-form">
      <h1 className="search-form__header">What's going on in the world?</h1>
      <p className="search-form__subtext">
        Find the latest news on any topic and save them to your personal account
      </p>
      <form className="search-form__bar" onSubmit={handleSubmit}>
        <input
          type="text"
          id="search-input"
          className="search-form__input"
          placeholder="Enter topic"
          name="search"
        />
        <button
          type="submit"
          className="search-form__button"
          disabled={loading}
        >
          {loading ? "Searching ..." : "Search"}
        </button>
      </form>
    </section>
  );
};

export default SearchFormComponent;
