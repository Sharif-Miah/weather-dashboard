import "./App.css";
import Page from "./page/Page";
import FavoritProvider from "./provider/FavoritProvider";
import LocationProvider from "./provider/LocationProvider";
import WeatherProvider from "./provider/WeatherProvider";

function App() {
  return (
    <>
      <LocationProvider>
        <WeatherProvider>
          <FavoritProvider>
            <Page />
          </FavoritProvider>
        </WeatherProvider>
      </LocationProvider>
    </>
  );
}

export default App;
