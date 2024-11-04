import Header from "../component/Header/Header";
import WeatherProvider from "../provider/WeatherProvider";
import WeatherBoard from "./weather/WeatherBoard/WeatherBoard";

const Page = () => {
  return (
    <WeatherProvider>
      <div className="grid place-items-center h-screen">
        <Header />
        <main>
          <section>
            <WeatherBoard />
          </section>
        </main>
      </div>
    </WeatherProvider>
  );
};

export default Page;
