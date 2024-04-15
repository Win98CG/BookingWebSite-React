import Card from "../UI/Card";
import HeaderForm from "./HeaderForm";
import NavBar from "./NavBar";
//Header cho Homepage
function Header() {
  return (
    <Card>
      <NavBar />
      <HeaderForm />
    </Card>
  );
}
export default Header;
