import React, { useState } from "react";
import { useForm } from "react-hook-form";

function SearchBar() {
  const { handleSubmit, register, setValue } = useForm();

  const canadianCities = [
    "Toronto",
    "Vancouver",
    "Montreal",
    "Calgary",
    "Ottawa",
    "Edmonton",
    "Mississauga",
    "Winnipeg",
    "Halifax",
    "Quebec City",
  ];

  const [cities, setCities] = useState(canadianCities);
  const [searchInputValue, setSearchInputValue] = useState("");

  function handleSearchClick(e) {
    e.preventDefault();
    const newValue = e.target.value.toLowerCase();
    setCities(
      newValue === ""
        ? canadianCities
        : canadianCities.filter((item) =>
            item.toLowerCase().includes(newValue),
          ),
    );
    setSearchInputValue(newValue);
    setValue("searchCities", searchInputValue);
  }

  function handleLocationSelection(item) {
    setSearchInputValue(item);
  }

  function onSubmit(value) {
    console.log(value);
  }

  return (
    <div className="absolute top-0">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("searchCities")}
          type="text"
          onChange={handleSearchClick}
          placeholder="Search for properties, agents, or local info"
        />
        <ul>
          {cities &&
            cities.map((city) => (
              <li
                className="cursor-pointer hover:bg-red-200"
                onClick={() => handleLocationSelection(city)}
                value={city}
              >
                <strong>{city}</strong>
              </li>
            ))}
        </ul>
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchBar;
