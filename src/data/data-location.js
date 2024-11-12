const data = [
  {
    location: "London",
    latitude: 51.5073219,
    longitude: -0.1276474,
  },
  {
    location: "Kolkata",
    latitude: 22.5726723,
    longitude: 88.3638815,
  },
  {
    location: "Dhaka",
    latitude: 23.8041,
    longitude: 90.4152,
  },
  {
    location: "Berlin",
    latitude: 52.520008,
    longitude: 13.404954,
  },
  {
    location: "Paris",
    latitude: 48.8575,
    longitude: 2.3514,
  },
  {
    location: "Rome",
    latitude: 41.8967,
    longitude: 12.4822,
  },
  {
    location: "Singapore",
    latitude: 1.2899175,
    longitude: 103.8519072,
  },
  {
    location: "Sydney",
    latitude: 33.8688,
    longitude: 151.2093,
  },
  {
    location: "Cape Town",
    latitude: 33.9221,
    longitude: 18.4231,
  },
  {
    location: "New York",
    latitude: 40.7127281,
    longitude: -74.0060152,
  },
  {
    location: "Toronto",
    latitude: 43.6534817,
    longitude: -79.3839347,
  },
  {
    location: "Araihazar",
    latitude: 23.7917,
    longitude: 90.6536,
  },
];

const getLocation = () => {
  return data;
};

const getLocationByName = (location) => {
  if (!location) return null;

  const filterd = data.filter((item) => item.location === location);

  if (filterd.length > 0) {
    return filterd[0];
  } else {
    const defultValue = {
      location: "",
      longitude: 0,
      latitude: 0,
    };
    return defultValue;
  }
};

export { getLocation, getLocationByName };
