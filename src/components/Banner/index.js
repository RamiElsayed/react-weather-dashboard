import { Grid, Header } from "semantic-ui-react";
import { Icon } from "semantic-ui-react";

import "../../styles.css";

export const Banner = () => {
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column
          mobile={16}
          tablet={12}
          computer={12}
          className="banner-item"
        >
          <Header as="h1">First Header</Header>
        </Grid.Column>
        <Grid.Column
          mobile={16}
          tablet={4}
          computer={4}
          className="banner-item"
        >
          <Header as="h4">
            <Icon disabled name="clock" />
            13:20
          </Header>
          <Header as="h5" color="grey">
            <Icon disabled name="calendar" />
            Tues 27th Sep, 2022
          </Header>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};
