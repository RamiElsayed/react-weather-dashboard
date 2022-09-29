import "../../styles.css";
export const SearchForm = () => {
  return (
    <form
      className="aside-item"
      onSubmit={(event) => {
        event.preventDefault();
        console.log("make API request");
      }}
    >
      <div className="ui icon input">
        <input type="text" placeholder="Enter city name" />
        <i className="search icon"></i>
      </div>
    </form>
  );
};
