import "../styles/Home/Home.css";
import Filter from "../components/Filter/Filter";
import SearchComponent from "../components/SearchComponent/SearchComponent";

export default function Home() {
  return (
    <main className="home">
      <Filter />
      <SearchComponent />
    </main>
  );
}
