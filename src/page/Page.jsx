import Header from "../component/Header/Header";
import WeatherBoard from "./weather/WeatherBoard/WeatherBoard";

const Page = () => {
  return (
    <div className="grid place-items-center h-screen">
      <Header />
      <main>
        <section>
          <WeatherBoard />
        </section>
      </main>
    </div>
  );
};

export default Page;
