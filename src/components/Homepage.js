import { generate } from 'randomized-string';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCountries } from '../redux/Homepage/homeReducer';
import Country from './Country';
import './Homepage.css';

const Homepage = () => {
  const { countries } = useSelector((state) => state.homeReducer);
  const [formstate, setFormState] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (countries.length === 0) {
      dispatch(fetchCountries());
    }
  }, [dispatch]);

  const totalCases = countries.reduce((prev, curr) => prev + curr.cases, 0);

  return (
    <>
      <form
        className="search-bar"
        onChange={(event) => setFormState(event.target.value)}
      >
        <div className="search-bar__wrapper">
          <h1>Covid Data stats</h1>
          <input
            className="input"
            placeholder="Country Name"
          />
        </div>
      </form>
      <div className="container">
        <h3 className="total">
          Total number of Cases:
          {totalCases}
        </h3>
        <ul className="grid-container">
          {countries

            .filter((country) => country.country.toLowerCase().includes(formstate.toLowerCase()))
            .map((country) => (
              <div key={generate()}>
                <Country
                  name={country.country}
                  cases={country.cases}
                  flag={country.flag}
                />
              </div>
            ))}
          ;
        </ul>
      </div>
    </>
  );
};

export default Homepage;
