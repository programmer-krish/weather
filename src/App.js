import React, { useState, useEffect } from "react";
import "./App.css";
import { getCity } from "./hooks/getCity";
import CitySelector from "./Component/CitySelector";
import { Container } from "semantic-ui-react";
import { getWeather, handleResponse } from "./hooks/getWeather";
import WeatherList from "./Component/WeatherList";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  // const { data, error, setUrl } = useFetch(); no need for it as use a method
  // we need four variable here i-e data, error, city, progress will useState to maintain them
  const [city, setCity] = useState(null);
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [progress, setProgress] = useState(false);

  //Now  want our this component to perfrom side effect (data fetching etc) when the city changes
  // will do  fetchData which is a side effect in the useEffect hook like this
  // when do i want our effect to run? when the city changes so pass it as a dependency

  useEffect(() => {
    async function fetchData() {
      try {
        setProgress(true);
        if (!city) return;
        const response = await getWeather(city);
        const [data, error] = handleResponse(response);
        setData(data);
        setError(error);
        setProgress(false);
      } catch (e) {
        const [data, error] = handleResponse(e.response);
        setError(error);
        setData(data);
        setProgress(false);
      }
    }
    fetchData();
  }, [city]);

  const getContent = () => {
    if (!city) return null;
    if (progress) return <h2> Loading...Please wait! </h2>;
    if (error) return <h2> Error: {error} </h2>; // default
    return <WeatherList data={data} />;
  };
  // on check weather button we will set our city
  return (
    <Router>
      <Container className="App">
        <CitySelector onSelectButtonClick={(city) => setCity(city)} />
        {getContent()}
        <Route path="./city" component={getCity} />
      </Container>
    </Router>
  );
};

export default App;
