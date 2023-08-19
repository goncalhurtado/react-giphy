import { getGifs } from "./helpers/getGifs";
import { useEffect, useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";
import Button from "@mui/material/Button";
import Historial from "./components/Historial.jsx";
import BackspaceIcon from "@mui/icons-material/Backspace";

function App() {
  const [categories, setCategories] = useState([""]);

  getGifs();
  return (
    <>
      <div className="contendorLogo">
        <h1 className="logo">SeveGifs</h1>
      </div>
      <div className="contenedorApp">
        <AddCategory setCategories={setCategories} />
        <Button
          onClick={() => setCategories([""])}
          variant="contained"
          color="error"
          startIcon={<BackspaceIcon />}
        ></Button>
      </div>
      <ol>
        {categories.map((category) => {
          return <GifGrid category={category} key={category} />;
        })}
      </ol>
      <Historial />
    </>
  );
}

export default App;
