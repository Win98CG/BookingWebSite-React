import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Detail from "./pages/detail/Detail";
import Search from "./pages/search/Search";
//cai dat icon global
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faFemale,
  faBed,
  faTaxi,
  faCar,
  faCalendar,
  faPlane,
  faMapMarker,
} from "@fortawesome/free-solid-svg-icons";
library.add(
  fab,
  faFemale,
  faBed,
  faTaxi,
  faCar,
  faCalendar,
  faPlane,
  faMapMarker
);
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
