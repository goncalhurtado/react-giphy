import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { GuardarHistorial } from "./historial.js";

const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!(inputValue.trim().length > 2) || inputValue === "") {
      return notify();
    }
    setCategories((data) => [inputValue]);
    // setCategories((data) => [inputValue, ...data]) //si quisiera que se sumen uno abajo del otro
    setInputValue("");
    GuardarHistorial(inputValue);
  };
  const notify = () => {
    toast.error("Estas buscando mal, serás castigada!🎶");
  };

  return (
    <form onSubmit={handleSubmit} className="buscador">
      <Toaster />
      <input
        className="buscador__input"
        type="text"
        placeholder={inputValue ? "" : "buscar gifs"}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </form>
  );
};

export default AddCategory;
