import React, { useState } from "react";
// import Name from './component/Name'
import NamesList from "./component/NamesList";
import PEOPLE from "./data";
import "./App.css";
import Search from "./component/Search";
import ClearList from "./component/ClearList";
import FavoritName from "./component/FavoritName";
// import ScrollToTop from './component/ScrollToTop';
// import {CircleArrow as ScrollUpButton} from "react-scroll-up-button"

function App() {
  const [search, setSearch] = useState("");
  
  const handleSearch = (search) => {
    setSearch(search);
  };

  const handleClearInput = () => {
    setSearch("");
  };
  // useEffect(() => {
  //   window.scrollTo(0, 0)
  // }, [])

  return (
    <div className="App">
      
      <Search onSearch={handleSearch} search={search} />
      <FavoritName  datas={PEOPLE}/>
      <NamesList datas={PEOPLE} search={search} />
      {search && <ClearList content="Clear List" onClick={handleClearInput} />}
    </div>
  );
}

export default App;
