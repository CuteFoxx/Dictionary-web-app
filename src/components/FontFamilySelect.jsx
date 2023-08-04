import "./FontFamilySelect.css";
import { useState, useEffect, useRef } from "react";

const FontFamilySelect = () => {
  const [selectValue, setSelectValue] = useState("sans serif");
  const [open, setOpen] = useState(false);

  const menuRef = useRef();

  //handles click outside menu and closes menu if click was outside
  useEffect(() => {
    let clickHandler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", clickHandler);

    return document.removeEventListener("click", clickHandler);
  });

  const changeBodyFontFamily = (e) => {
    setSelectValue(e.target.textContent);

    switch (e.target.textContent) {
      case "Sans serif":
        document.body.style.fontFamily = "var(--ff-sans-sefir)";
        break;
      case "serif":
        document.body.style.fontFamily = "var(--ff-sefir)";
        break;
      case "mono":
        document.body.style.fontFamily = "var(--ff-mono)";
        break;
    }
  };

  return (
    <div className="header__select select" ref={menuRef}>
      <div
        className="select__btn"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <span className="select__btn-text">{selectValue}</span>
        <img
          className="select__btn-icon"
          src="src\assets\images\icon-arrow-down.svg"
          alt=""
        />
      </div>

      <ul
        className={`select__options ${open ? "active" : ""}`}
        onClick={(e) => {
          changeBodyFontFamily(e);
          setOpen(!open);
        }}
      >
        <li className="select__option">Sans serif</li>
        <li className="select__option">serif</li>
        <li className="select__option">mono</li>
      </ul>
    </div>
  );
};

export default FontFamilySelect;
