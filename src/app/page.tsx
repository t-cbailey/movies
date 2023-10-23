import getMovies from "../../lib/getMovies";
import Featured from "./components/Trending";

export default async function Home() {
  return (
    <>
      <h1 className="text-center mt-24 text-3xl">Home</h1>
      <Featured />
    </>
  );
}
