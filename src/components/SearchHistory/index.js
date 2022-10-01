import { useState } from "react";
import { isCompositeComponentWithType } from "react-dom/test-utils";
import { Divider, List } from "semantic-ui-react";
import "../../styles.css";
export const SearchHistory = () => {
  const [cities, setCities] = useState(
    JSON.parse(localStorage.getItem("cities")) || []
  );
  return (
    <div className="aside-item">
      <h2>Recent Searches</h2>
      <Divider />
      <List divided>
        {cities.map((city) => {
          <List.Item
            key={city}
            as="a"
            onClick={() => {
              console.log("item clicked");
            }}
            className="recent-search-item"
          >
            {city}
          </List.Item>;
        })}
      </List>
    </div>
  );
};
