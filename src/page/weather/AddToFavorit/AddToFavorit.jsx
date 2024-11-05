import { useContext, useEffect, useState } from "react";
import HeartRed from "../../../assets/heart-red.svg";
import Heart from "../../../assets/heart.svg";
import { FavoritContext, WeatherContext } from "../../../context";

const AddToFavorit = () => {
  const [isFavorit, toggleFavorit] = useState(false);

  const { addToFavorit, removeFromFavorit, favorites } =
    useContext(FavoritContext);
  const { weatherData } = useContext(WeatherContext);

  const { location, latitude, longitude } = weatherData;

  useEffect(() => {
    const found = favorites.find((fav) => fav.location === location);
    toggleFavorit(found);
  }, []);

  const handleFavorit = () => {
    const found = favorites.find((fav) => fav.location === location);

    if (!found) {
      addToFavorit(location, latitude, longitude);
    } else {
      removeFromFavorit(location);
    }

    toggleFavorit(!isFavorit);
  };

  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          onClick={handleFavorit}
          className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
        >
          <span>Add to Favourite</span>
          <img src={isFavorit ? HeartRed : Heart} alt="" />
        </button>
      </div>
    </div>
  );
};

export default AddToFavorit;
