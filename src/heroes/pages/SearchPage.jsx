import { useLocation, useNavigate } from "react-router-dom";
import { HeroCard } from "../components";
import { useForm } from "../hooks/useForm";
import queryString from "query-string";
import { getHeroesByName } from "../helpers";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);
  const { searchText, onInputChange } = useForm({ searchText: q });

  const heroes = getHeroesByName(q);

  const onSearchSubmit = (event) => {
    event.preventDefault();

    // if (searchText.trim().length <= 1) return;

    navigate(`?q=${searchText.trim()}`);
  };

  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              name="searchText"
              placeholder="Search a hero"
              className="form-control"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button type="submit" className="btn btn-outline-primary">
              Search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {q === "" ? (
            <div className="alert alert-primary">Search a hero...</div>
          ) : (
            heroes.length === 0 && (
              <div className="alert alert-danger">
                There's no hero with <strong>{q}</strong>{" "}
              </div>
            )
          )}

          {heroes.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};
