/* eslint-disable react/prop-types */
import { FavoritContext } from "../context";
import useLocalStore from "../hooks/useLocalStore";

const FavoritProvider = ({ children }) => {
  const [favorites, setFavorites] = useLocalStore("favorite", []);

  const addToFavorit = (location, longitude, latitude) => {
    setFavorites([
      ...favorites,
      {
        location: location,
        longitude: longitude,
        latitude: latitude,
      },
    ]);
  };

  const removeFromFavorit = (location) => {
    const filtered = favorites.filter((fav) => fav.location !== location);

    setFavorites(filtered);
  };

  return (
    <FavoritContext.Provider
      value={{ addToFavorit, removeFromFavorit, favorites }}
    >
      {children}
    </FavoritContext.Provider>
  );
};

export default FavoritProvider;
