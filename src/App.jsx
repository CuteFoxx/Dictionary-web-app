import "./App.css";
import dataContext from "./contexts/dataContext";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import SearchBar from "./components/SearchBar";
import { useState } from "react";

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  return (
    <dataContext.Provider value={{ data, setData, error, setError }}>
      <Header></Header>
      <SearchBar />
      {data && !error ? <HomePage data={data} /> : ""}
      {error ? <ErrorPage /> : ""}
    </dataContext.Provider>
  );
}

export default App;
