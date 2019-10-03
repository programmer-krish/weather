import React from "react";
import { Card, List } from "semantic-ui-react";
import WeatherCard from "./WeatherCard";

const WeatherList = ({ data }) => (
  <Card>
    <Card.Content>
      {data &&
        data.list &&
        data.list.map(({ dt, temp, weather }, index) => (
          <List key={index}>
            <WeatherCard
              city={data.city.name}
              country={data.city.country}
              min={temp.min}
              max={temp.max}
              day={temp.day}
              dt={dt * 1000}
              main={weather[0].main}
              icon={weather[0].icon}
            />
          </List>
        ))}
    </Card.Content>
  </Card>
);

export default WeatherList;
