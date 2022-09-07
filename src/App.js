import { Grid } from "semantic-ui-react";
import { Header } from "./components/Header";
import { SearchForm } from "./components/SearchForm";
import { SearchHistory } from "./components/SearchHistory";
import { WeatherInfo } from "./components/WeatherInfo";

import "./styles.css";

export const App = () => {
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column mobile={16} tablet={4} computer={4}>
          <SearchForm />
          <SearchHistory />
        </Grid.Column>
        <Grid.Column mobile={16} tablet={12} computer={12}>
          <Header />
          <WeatherInfo />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};
