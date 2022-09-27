import { Grid, Header } from "semantic-ui-react";

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
          <div>13:20</div>
          <div>Tues 27th Sep, 2022</div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};
