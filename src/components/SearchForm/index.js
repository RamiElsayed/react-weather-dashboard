import { useEffect, useState } from "react";
import classNames from "classnames";
import "../../styles.css";
export const SearchForm = () => {
  const [isLoading, setisLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (searchTerm) {
      console.log("Make Api request for", searchTerm);
    }
  }, [searchTerm]);
  return (
    <form
      className="aside-item"
      onSubmit={(event) => {
        event.preventDefault();
        setSearchTerm(inputValue);
      }}
    >
      <div
        className={classNames("ui icon input", {
          disabled: isLoading,
          loading: isLoading,
        })}
      >
        <input
          value={inputValue}
          onChange={(event) => {
            setInputValue(event.currentTarget.value);
          }}
          type="text"
          placeholder="Enter city name"
        />
        <i className="search icon"></i>
      </div>
    </form>
  );
};
