import React, { useState } from "react";
import PropTypes from "prop-types";
export const AddCategory = ({ setCategories }) => {
  const [inputVal, setInputval] = useState("");
  const handleInputChange = (e) => {
    setInputval(e.target.value);
  };
  const handleSumbit = (e) => {
    e.preventDefault();
    if (inputVal.trim().length > 2) {
      setCategories((cats) => [inputVal, ...cats]);
      setInputval("");
    }
  };
  return (
    <form onSubmit={handleSumbit}>
      <h2>Add Category</h2>
      <input type="text" value={inputVal} onChange={handleInputChange} />
    </form>
  );
};
AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
