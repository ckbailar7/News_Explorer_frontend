import "../blocks/SearchFormComponent.css";

const SearchFormComponent = ({ handleSearch, loading, searchQuery, setSearchQuery, errorMessage, setErrorMessage }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedQuery = e.target.elements.search.value.trim();
    if (!trimmedQuery) {
      setErrorMessage("Please enter a Keyword");
      return;
    } 

    setErrorMessage("");
    handleSearch(trimmedQuery);
    
    
  };

  console.log(typeof setSearchQuery)

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
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          
        />
        {errorMessage ? (<p className="search-form__error">{errorMessage}</p>): ""} 
        <button
          type="submit"
          className="search-form__button"
          disabled={loading}
        >
          {loading ? "Searching ..." : "Search"}
        </button>
      </form>
      {/* {errorMessage && <p className="search-form__error">{errorMessage}</p>} */}
    </section>
  );
};

export default SearchFormComponent;
