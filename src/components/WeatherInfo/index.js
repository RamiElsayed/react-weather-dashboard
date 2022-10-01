import { useContext } from "react";
import { Card, Header, Icon } from "semantic-ui-react";
import { AppContext } from "../../App";

export const WeatherInfo = () => {
  const { weatherData } = useContext(AppContext);
  console.log(weatherData);
  if (!weatherData) {
    return <Header as="h3">Please enter a city name</Header>;
  }
  return (
    <Card>
      <Card.Content header={weatherData.name} />
      <Card.Content extra>
        <div>
          <Icon name="info" />
          Temperature: {weatherData?.main?.temp || "N/A"}
        </div>
        <div>
          <Icon name="user" />
          Humidity: {weatherData?.main?.humidity || "N/A"}
        </div>
        <div>
          <Icon name="user" />
          Wind Speed: {weatherData?.wind?.speed || "N/A"}
        </div>
        <div>
          <Icon name="user" />
          Pressure:{weatherData?.main?.pressure || "N/A"}
        </div>
      </Card.Content>
    </Card>
  );
};
