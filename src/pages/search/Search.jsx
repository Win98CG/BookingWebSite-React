import Card from "../../UI/Card";
import NavBar from "../../HeaderComponent/NavBar";
import Footer from "../../FooterComponent/Footer";
import data from "../../data/search.json";
import SearchList from "../../SearchList";
import SearchPopup from "../../SearchPopup";
import styles from "./Search.module.css";
const Search = () => {
  return (
    <div>
      <Card>
        <NavBar />
      </Card>
      <div className={styles.container}>
        <SearchPopup />
        <SearchList data={data} />
      </div>
      <Footer />
    </div>
  );
};

export default Search;
