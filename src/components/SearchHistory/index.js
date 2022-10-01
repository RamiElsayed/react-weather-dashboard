import { useContext } from "react";
import { Divider, List } from "semantic-ui-react";
import { AppContext } from "../../App";
import "../../styles.css";
export const SearchHistory = () => {
  const { cities, setSearchTerm } = useContext(AppContext);
  return (
    <div className="aside-item">
      <h2>Recent Searches</h2>
      <Divider />
      <List divided>
        {cities.map((city) => {
          return (
            <List.Item
              key={city}
              as="a"
              onClick={() => {
                console.log("item clicked");
                setSearchTerm(city);
              }}
              className="recent-search-item"
            >
              {city}
            </List.Item>
          );
        })}
      </List>
    </div>
  );
};
