import React, { useState } from "react";
import { Divider, Grid } from "semantic-ui-react";
import { Banner } from "./components/Banner";
import { SearchForm } from "./components/SearchForm";
import { SearchHistory } from "./components/SearchHistory";
import { WeatherInfo } from "./components/WeatherInfo";

import "./styles.css";
export const AppContext = React.createContext();
export const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <AppContext.Provider
      value={{
        cities: JSON.parse(localStorage.getItem("cities")) || [],
        searchTerm,
        setSearchTerm,
      }}
    >
      <Grid>
        <Grid.Row>
          <Grid.Column mobile={16} tablet={4} computer={4}>
            <SearchForm />
            <SearchHistory />
          </Grid.Column>
          <Grid.Column mobile={16} tablet={12} computer={12}>
            <Banner />
            <Divider />
            <WeatherInfo />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </AppContext.Provider>
  );
};
