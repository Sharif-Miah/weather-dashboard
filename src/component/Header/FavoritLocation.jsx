/* eslint-disable react/prop-types */
import Heart from "../../assets/heart.svg";

const FavoritLocation = ({ onFav }) => {
  return (
    <div>
      <div className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all">
        <img src={Heart} alt="" />
        <span onClick={onFav}>Favourite Locations</span>
      </div>
    </div>
  );
};

export default FavoritLocation;
