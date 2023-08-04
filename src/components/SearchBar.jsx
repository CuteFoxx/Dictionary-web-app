import { useContext, useState } from "react";
import "./SearchBar.css";
import dataContext from "../contexts/dataContext";
import axios from "axios";

const SearchBar = () => {
  const { data, setData, setError } = useContext(dataContext);
  const [inputValue, setInputValue] = useState("");
  const [isInputValide, setIsInputValid] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue || inputValue.length === 0) {
      setIsInputValid(false);
    } else {
      fetchData(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue
          .trim()
          .toLowerCase()}`
      );
      setIsInputValid(true);
    }
  };

  const fetchData = (url) => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
        setError(null);
      })
      .catch((err) => setError(err.message));
  };
  return (
    <div className="search-bar__container">
      <form className="serch-bar__form" action="" onSubmit={handleSubmit}>
        <input
          className={`serch-bar ${
            isInputValide ? "" : "serch-bar--invalid-input"
          }`}
          placeholder="Search for any word…"
          type="text"
          value={inputValue}
          onInput={(e) => setInputValue(e.target.value)}
        />
        <button className="search-bar__submit-btn">
          <img src=".\images\icon-search.svg" alt="" />
        </button>
        {isInputValide ? (
          ""
        ) : (
          <span className="serch-bar__validation-error">
            Whoops, can’t be empty…
          </span>
        )}
      </form>
    </div>
  );
};

export default SearchBar;
