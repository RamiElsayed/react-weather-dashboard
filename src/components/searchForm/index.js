import "../../styles.css";
export const SearchForm = () => {
  return (
    <div className="aside-item">
      <div className="ui icon input">
        <input type="text" placeholder="Enter city name" />
        <i className="search icon"></i>
      </div>
    </div>
  );
};
