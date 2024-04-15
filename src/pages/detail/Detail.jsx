import Card from "../../UI/Card";
import NavBar from "../../HeaderComponent/NavBar";
import Footer from "../../FooterComponent/Footer";
import DetailBody from "../../DetailBody";
const Detail = () => {
  return (
    <div>
      <Card>
        <NavBar />
      </Card>
      <DetailBody />
      <Footer />
    </div>
  );
};

export default Detail;
