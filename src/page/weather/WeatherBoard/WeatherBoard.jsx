import { useContext } from "react";
import { WeatherContext } from "../../../context";
import AddToFavorit from "../AddToFavorit/AddToFavorit";
import WeatherCondition from "../WeatherCondition/WeatherCondition";
import WeatherHeadline from "../WeatherHeadline/WeatherHeadline";

const WeatherBoard = () => {
  const { weatherData, loading } = useContext(WeatherContext);
  console.log(weatherData);

  return (
    <div className="container">
      <div className="grid bg-black/20 rounded-xl backdrop-blur-md border-2 lg:border-[3px] border-white/[14%] px-4 lg:px-14 py-6 lg:py-10 min-h-[520px] max-w-[1058px] mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-6">
          {loading.status ? (
            <>
              <p>{loading.message}</p>
            </>
          ) : (
            <>
              <AddToFavorit />
              <WeatherHeadline />
              <WeatherCondition />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default WeatherBoard;
