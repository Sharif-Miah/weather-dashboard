import Header from "../component/Header/Header";
import FavoritProvider from "../provider/FavoritProvider";
import WeatherProvider from "../provider/WeatherProvider";
import WeatherBoard from "./weather/WeatherBoard/WeatherBoard";

const Page = () => {
  return (
    <WeatherProvider>
      <FavoritProvider>
        <div className="grid place-items-center h-screen">
          <Header />
          <main>
            <section>
              <WeatherBoard />
            </section>
          </main>
        </div>
      </FavoritProvider>
    </WeatherProvider>
  );
};

export default Page;
