import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import "./citystyle.css";

const CitySelector = ({ onSelectButtonClick }) => {
  const [city, setCity] = useState(null);

  return (
    <>
      <h1 id="temp">Hello, select your city!</h1>
      <Form>
        <Form.Field>
          <input
            id="form-control"
            placeholder="Enter city"
            onChange={e => setCity(e.target.value)}
          />
        </Form.Field>
        <Button onClick={() => onSelectButtonClick(city)}>Check weather</Button>
      </Form>
    </>
  );
};

export default CitySelector;
