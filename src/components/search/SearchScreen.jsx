import queryString from "query-string";
import React, { useMemo } from "react";

import { useLocation } from "react-router";
import { useForms } from "../../hooks/useForms";
import { getHeroesByName } from "../../selectors/getHeroesByName";
import HeroCard from "../heroes/HeroCard";

const SearchScreen = ({ history }) => {
  const { search } = useLocation();
  const { q = "" } = queryString.parse(search);
  console.log(q);
  const [values, setValues, resetInput, handleInputChange] = useForms({
    searchInput: q,
  });

  const { searchInput } = values;
  const heroesFiltered = useMemo(() => getHeroesByName(q), [q])
  

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`?q=${searchInput}`);
  };
  return (
    <div>
      <h1>Search screen</h1>
      <div className="row">
        <div className="col-5">
          <h4>Search</h4>
          <hr />

          <form onSubmit={handleSearch}>
            <input
              type="text"
              className="form-control"
              placeholder="Search heroe"
              name="searchInput"
              autoComplete="off"
              onChange={handleInputChange}
              value={searchInput}
            />
            <button
              type="submit"
              className="btn btn-outline-primary mt-3 btn-block"
            >
              Search...
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {  
            heroesFiltered.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchScreen;
