import React from "react";
import { Card, Image } from "semantic-ui-react";

const WeatherCard = ({ dt, min, max, main, icon, day, city, country }) => {
  const date = new Date(dt);
  return (
    <Card>
      <Image src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
      <Card.Content>
        <Card.Header> City : {city}</Card.Header>
        <p>Country: {country}</p>
        <p>{main}</p>
        <p>
          {date.getFullYear()}-{date.getMonth() + 1}-{date.getDate()}
        </p>
        <p>Day: {day}</p>
        <p>Min: {min}</p>
        <p>Max: {max}</p>
      </Card.Content>
    </Card>
  );
};

export default WeatherCard;
